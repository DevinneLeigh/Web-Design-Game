// OBJECT STRUCTURE
/* 
RuleSet Object:
{   
    selector: string,
    
    *optional childRuleSets: [(RuleSetObjects),...],
    
    *optional properties: [(PropertyObjects),...]
}

Property Object:
{
    property: "background-color",
    *optional value: [[(valueObject),...],...]
    *optional useFinalValue: bool,
                
    *optional operator: "string",
    *optional unit: "string",
}

Value Objects
    
    { // Function Object
        functionName: "linear-gradient"
        *optional value: [[valueObject...]...]
    },
    { // Number Object
        value: number,
        *optional unit: string, //(%, em, px, etc.)
        *optional operator: string //(>=, <, !=, etc.)
    }
    { // String Object
        value: string,
    }

    // VALUE OBJECT EXAMPLES
    the outer array separates by commas, the inner array separates by space so like 
    value: [
            [
            {value: "solid"},
            {value: 2, unit: "px"},
            {value:"blue"}
            ]
           ] would be for "solid 2px blue"
    while
    value: [
            [{value: "solid"}],
            [{value: 2, unit: "px"}],
            [{value:"blue"}]
           ] would be for "solid, 2px, blue"

    This is really mean for functions where some values are in the same comma like
    linear-gradient(to right, red 25%, blue 100%) 
    this could be represented like

    [[{ functionName: "linear-gradient"
        value: [
        [{value: "to"}, {value: "right"}],
        [{value: "red"}, {value: 25, unit:"%"}],
        [{value:"blue"}, {value:100, unit:"%"}]
        ]
    }}]]
    if we wanted the user to be able to put any % less than or eqaul to 75 for the red color

    [[{ functionName: "linear-gradient"
        value: [
        [{value: "to"}, {value: "right"}],
        [{value: "red"}, {value: 75, operator:"<=",  unit:"%"}],
        [{value:"blue"}, {value:100, unit:"%"}]
        ]
    }}]]

// GUIDE
*/
// Selector: string) the way the ruleset is selected ".box" would expect the user to select the box class
// also something like "@keyframe (animation-name)" or "div.box span #thing" is valid

// childRulesSets: [array]) when you need a ruleset within a ruleset, like "50% {}" inside a

// Properties: [array])
/* Properties are built out of Property objects which are made of:
//  property: string) margin-left, width, color, padding, etc. 
//  value: [[valueObject,...],...]) what the expected value is. property could be "text-align" and value may be [[{value: "center}]]"

//  useFinalValue: bool) it will apply the rule sets to an object and uses the .style values of the object instead of what the user inputted
    this is useful when the are multiple ways of doing the same thing
    like the animation property can be used to set a few other properties at once 
    animation: crazy-box 5s infinite; will set animation-duration, animation-iteration-count, and animation name
    !!! hex colors like #512525 will be read back as rgb(81, 37, 37) when using final value

//  these are only for when value is a number
//  operator: string) if value is a number, you can tell the validator ">=" if you want the user to input defaults to "=="
//  unit: string) instead of putting "px" or "%" at the end of value, put it into a unit
*/

// EXAMPLES
/* property Example 1
{
    property: "animation-duration",
    value: [[{value: "5", unit: "s",}]] 
    useFinalValue: true,
}
    // Unit is "s", meaning we are expecting 5 seconds for animation-duration 
    // useFinalValue is being used to read "animation-duration",
    // if it wasnt animation: crazy-box 5s infinite; would change the animation-duration property would change, and the validator would not know
*/
/* property Example 2
{
    property: "padding",
    value: [[{value: 10, unit: "px", operator: ">="}]]
}   
    // Expects the padding value to be greater than or equal to 10px
*/

/* gradient level css as example
{
          selector: "#gradient1",

          properties:
          [{
              property: "background-image",
              useFinalValue: true, 
              // The level has background as the property the user changes for the gradient
              // background: linear-gradient(red, yellow)
              // background-image: linear-gradient(red, yellow)
              // will both change the background-image style on the affected object
              // I useFinalValue to read the background-image value, so the user can use either method
            
              value: [[{
              functionName: "linear-gradient", // this value is requiring linear-gradient(red, yellow)
              value: [
                [{value: "red"}],
                [{value:  "yellow"}],],
              }]]
            
          },]
        },{
          selector: "#gradient2",

          properties:
          [{
              property: "background-image",
              useFinalValue: true,
            
              value: [[{
              functionName: "linear-gradient", // background: radial-gradient(to right, white, purple)
              value: [
                [{value: "to"}, {value: "right"}],
                [{value: "blue"}],
                [{value:  "green"}],],
              }]]
            
          },]
        },{
          selector: "#gradient3",

          properties:
          [{
              property: "background-image",
              useFinalValue: true,
            
              value: [[{
              functionName: "radial-gradient", // background: radial-gradient(white, purple)
              value: [
                [{value: "white"}],
                [{value:  "purple"}],],
              }]]
          },]
        } 
*/

export function checkCss(userCss, requiredCss) {
    const ruleSets = splitIntoRuleSets(userCss);

    requiredCss.forEach((require) => {
        checkRuleSet(ruleSets, require);
    });
}

const valueTypes = {
    FUNCTION: "function",
    COLOR: "color",
    NUMBER: "number",
    STRING: "string",
};

function checkRuleSet(scope, require) {
    let validCandidates = ruleSetsWithSelector(require.selector, scope);

    if (validCandidates.length == 0) {
        throw new Error(`${require.selector} selector is missing`);
    }

    if (require.childRuleSets != null) {
        validCandidates.filter((candidate) => {
            require.childRuleSets.forEach((childRequirement) => {
                // this will spit up errors if childRequirements are not met
                checkRuleSet(candidate.childRuleSets, childRequirement);
            });
        });
    }

    if (require.properties != null) {
        require.properties.forEach((property) => {
            validCandidates = objectsWithProperty(property, validCandidates);

            if (validCandidates.length == 0) {
                throw new Error(
                    `${property.property} is not complete in ${require.selector}`,
                );
            }
        });
    }
}

// Returns all rulesets that include desired selector
function ruleSetsWithSelector(desiredSelector, candidates) {
    return candidates.filter((objects) => {
        return objects.selectors.includes(desiredSelector);
    });
}

function objectsWithProperty(desiredProperty, candidates) {
    return candidates.filter((candidate) => {
        let hasProperty = false;
        
        // If values haven't been specified as a requirement, we skip checking for them
        if (desiredProperty.value == null) {return true} 

        let hasValue = false;
        candidate.rules.forEach((rule) => {
            if (
                rule.property == desiredProperty.property ||
                desiredProperty.useFinalValue != null
            ) {
                hasProperty = true;

                // If right property, check it's value
                let value = rule.value;
                if (desiredProperty?.useFinalValue != null) {
                    const finalizedObject = document.createElement("div");
                    const testStyle = `${rule.property}:${valuesToString(rule.value)}`;

                    finalizedObject.style = testStyle;
                    value = finalizedObject.style[desiredProperty.property];
                }

                hasValue = checkForValues(rule, desiredProperty.value);
            }
        });
        return hasProperty && hasValue;
    });
}

function checkForValues(valueGroups, desiredValues) {
    let worked = true;

    if (valueGroups.value.length < desiredValues.length) {
        worked = false;
    }

    valueGroups.value.forEach((valueGroup, groupIndex) => {
        let itemsFound = [];
        valueGroup.forEach((value) => {
            // don't want to use the same value to meet multiple requirements
            let foundOne = false; 
            // Loop over the requirements to check if value meets any of them
            if (groupIndex <= desiredValues.length) {
                desiredValues[groupIndex].forEach((desiredValue) => {
                    if (!foundOne && !itemsFound.includes(desiredValue)) {
                        let isAMatch = true;

                        // Do the types match? 
                        if (value.type != findRequirementType(desiredValue)) {
                            isAMatch = false;
                        // If they do. Are its contents good?
                        } else if (!checkValueContents(value, desiredValue)) {
                            isAMatch = false;
                        }
                        
                        if (isAMatch) {
                            foundOne = true;
                            itemsFound.push(desiredValue);
                        }
                    }
                });
            }
        });

        //
        if (itemsFound.length < desiredValues[groupIndex].length) {
            worked = false;
        }
    });
    return worked;
}

function checkValueContents(value, desiredValue) {
    let worked = true;
    switch (value.type) {
        case valueTypes.FUNCTION:
            if (value.functionName != desiredValue.functionName) {
                // Wrong function
                worked = false;
            }
            // Check all the arguments for the function
            if (!checkForValues(value, desiredValue.value)) {
                worked = false;
            }
            break;
        case valueTypes.COLOR:
        case valueTypes.STRING:
            // Are they equal?
            if (value.value != desiredValue.value) {
                worked = false;
            }
            break;
        case valueTypes.NUMBER:
            const operator = desiredValue.operator ?? "==";
            // Do the numbers compare correctly
            if (!eval(`${value.value} ${operator} ${desiredValue.value}`)) {
                worked = false;
            }
            // Was the right unit used
            if (desiredValue.unit != null && value.unit != desiredValue.unit) {
                worked = false;
            }
            break;
    }
    return worked;
}

function findRequirementType(requirement) {
    let type = "";
    if (requirement.type != null) {
        type = requirement.type;
    } else if (requirement.functionName != null) {
        type = valueTypes.FUNCTION;
    } else if (!/\D/.test(requirement.value)) {
        type = valueTypes.NUMBER;
    } else if (/#.{3,}/.test(requirement.value)) {
        type = valueTypes.COLOR;
    } else {
        type = valueTypes.STRING;
    }
    return type;
}

function valuesToString(values) {
    let strings = [];
    let currentString = "";

    values.forEach((valueGroup) => {
        valueGroup.forEach((value) => {
            let valueString = "";
            switch (value.type) {
                case valueTypes.NUMBER:
                    valueString = value.value + value.unit;
                    break;
                case valueTypes.STRING:
                case valueTypes.COLOR:
                    valueString = value.value;
                    break;
                case valueTypes.FUNCTION:
                    valueString = `${value.functionName}(${valuesToString(value.value)})`;
            }
            currentString += " " + valueString;
        });
        strings.push(currentString);
        currentString = "";
    });
    return strings.join(",");
}

// Seperate user input into usable data
function findRuleSets(inputCSS) {
    const ruleSets = [];
    let layersDeep = 0;
    let startOfRuleSet = 0;

    for (let i = 0; i < inputCSS.length; i++) {
        const character = inputCSS[i];
        switch (character) {
            case "{":
                layersDeep++;
                break;
            case "}":
                layersDeep--;
                if (layersDeep == 0) {
                    ruleSets.push(inputCSS.slice(startOfRuleSet, i + 1));
                    startOfRuleSet = i + 1;
                }
                break;
            case ";":
                if (layersDeep == 0) {
                    startOfRuleSet = i + 1;
                }
                break;
        }
    }

    return ruleSets;
}
function splitIntoRuleSets(inputCSS) {
    return breakUpRuleSets(findRuleSets(inputCSS));
}
function breakUpRuleSets(ruleSets) {
    const brokenRules = [];

    ruleSets.forEach((ruleSet) => {
        const newRuleset = {};

        // selector
        const selectorSearcher = ruleSet
            .replaceAll(/\/\*.*\*\//g, "") // Remove block comments
            .replaceAll(/\/\/.*/g, "") // Remove comments
            .replaceAll(/\s(?:\s)+/g, " ") // Condenses multiple spaces into one
            .replaceAll("\n", ""); // removes new lines

        newRuleset.selectors = /(.|\s)+?{/
            .exec(selectorSearcher)[0] // Get all regex matches
            .replace("{", "") // Exclude { bracket
            .split(",") // seperate selectors by commas
            .map((element) => {
                return element.trim();
            }); // remove surrounding spaces

        // Child rulesets
        let clearBrackets = selectorSearcher;
        clearBrackets = clearBrackets.replaceAll(/^.*?{|}\s*$/g, "");

        const ruleSetsAsStrings = findRuleSets(clearBrackets);

        ruleSetsAsStrings.forEach((segment) => {
            // remove rulesets from string, don't want the rules including selectors and such
            clearBrackets = clearBrackets.replaceAll(segment, "");
        });
        newRuleset.childRuleSets = breakUpRuleSets(ruleSetsAsStrings);

        // ClearBrackets should only have rules text left... hopefully, so we just pass it in
        newRuleset.rules = breakRules(clearBrackets);

        brokenRules.push(newRuleset);
    });

    return brokenRules;
}

function findFunctions(inputCSS) {
    const functions = [];
    let layersDeep = 0;
    let startOfFunction = 0;

    for (let i = 0; i < inputCSS.length; i++) {
        const character = inputCSS[i];
        switch (character) {
            case "(":
                layersDeep++;
                break;
            case ")":
                if (layersDeep > 0) {
                    layersDeep--;
                }
                if (layersDeep == 0) {
                    functions.push(inputCSS.slice(startOfFunction, i + 1));
                    startOfFunction = i + 1;
                }
                break;
            case ";":
            case " ":
                if (layersDeep == 0) {
                    startOfFunction = i + 1;
                }
                break;
        }
    }
    return functions;
}

function seperateValues(inputCSS) {
    const values = [];
    let currentValues = [];
    let currentValue = "";
    let layersDeep = 0;

    for (let i = 0; i < inputCSS.length; i++) {
        const character = inputCSS[i];
        if (![",", " "].includes(character) || layersDeep > 0) {
            currentValue += character;
        }

        switch (character) {
            case "(":
                layersDeep++;
                break;
            case ")":
                layersDeep--;
                break;

            case ",":
            case " ":
                if (layersDeep == 0 && currentValue.length > 0) {
                    currentValues.push(currentValue);
                    currentValue = "";
                }

                if (layersDeep == 0 && character == ",") {
                    values.push(currentValues.slice());
                    currentValues = [];
                }
                break;
        }

        if (i == inputCSS.length - 1) {
            if (currentValue != "") {
                currentValues.push(currentValue);
            }
            if (currentValues.length > 0) {
                values.push(currentValues.slice());
            }
        }
    }
    return values;
}

function catogorizeValue(inputValue) {
    const categorizedValue = {
        type: "",
        value: [],
    };

    if (findFunctions(inputValue).length > 0) {
        let functionName = /.+\(/.exec(inputValue) ?? "";
        if (functionName != "") {
            functionName = functionName[0].replace("(", "");
        }

        const functionArguments = inputValue
            .replace(functionName + "(", "")
            .replace(")", "");

        categorizedValue.functionName = functionName;
        categorizedValue.type = valueTypes.FUNCTION;
        categorizedValue.value = evaluateValues(functionArguments);
    } else if (/#\d{3,}/.test(inputValue)) {
        categorizedValue.type = valueTypes.COLOR;
        categorizedValue.value = inputValue;
    } else if (/\d/g.test(inputValue)) {
        const unit = (/\D+/.exec(inputValue) ?? ["none"])[0];
        categorizedValue.type = valueTypes.NUMBER;
        categorizedValue.unit = unit;
        categorizedValue.value = inputValue.replace(unit, "");
    } else if (inputValue) {
        categorizedValue.type = valueTypes.STRING;
        categorizedValue.value = inputValue;
    }
    return categorizedValue;
}

function evaluateValues(inputValues) {
    const seperatedValues = seperateValues(inputValues);
    const finalizedValues = [];
    seperatedValues.forEach((separateValueGroups) => {
        const valueGroups = [];
        separateValueGroups.forEach((value) => {
            const finalizedValue = catogorizeValue(value);

            valueGroups.push(finalizedValue);
        });
        finalizedValues.push(valueGroups);
    });
    return finalizedValues;
}

function breakRules(rules) {
    const segmentedRules = [];
    rules.split(";").forEach((rule) => {
        const splitRule = rule.split(":");

        if (splitRule[0].trim() != "") {
            const values = evaluateValues(splitRule[1]);
            segmentedRules.push({
                property: splitRule[0].trim(),
                value: values,
            });
        }
    });
    return segmentedRules;
}
