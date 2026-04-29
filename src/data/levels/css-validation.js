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
    *optional value: "string" | number,
    *optional useFinalValue: bool,
                
    *optional operator: "string",
    *optional unit: "string",
}

// GUIDE
*/
// Selector: string) the way the ruleset is selected ".box" would expect the user to select the box class
// also something like "@keyframe (animation-name)" or "div.box span #thing" is valid 

// childRulesSets: [array]) when you need a ruleset within a ruleset, like "50% {}" inside a 

// Properties: [array])
/* Properties are built out of Property objects which are made of:
//  property: string) margin-left, width, color, padding, etc. 
//  value: string) what the expected value is. property could be "text-align" and value may be "center"

//  useFinalValue: bool) it will apply the rule sets to an object and uses the .style values of the object instead of what the user inputted
    this is useful when the are multiple ways of doing the same thing
    like the animation property can be used to set a few other properties at once 
    animation: crazy-box 5s infinite; will set animation-duration, animation-iteration-count, and animation name

//  these are only for when value is a number
//  operator: string) if value is a number, you can tell the validator ">=" if you want the user to input defaults to "=="
//  unit: string) instead of putting "px" or "%" at the end of value, put it into a unit
*/

// EXAMPLES
/* property Example 1
{
    property: "animation-duration",
    value: "5",
    unit: "s", 
    useFinalValue: true,
}
    // Unit is "s", meaning we are expecting 5 seconds for animation-duration 
    // useFinalValue is being used to read "animation-duration",
    // if it wasnt animation: crazy-box 5s infinite; would change the animation-duration property would change, and the validator would not know
*/
/* property Example 2
{
    property: "padding",
    value: "10",
    unit: "px",
    operator: ">=",
}   
    // Expects the value to be greater than or equal to 10px
*/

export function checkCss(userCss, requiredCss) {
    const ruleSets = splitIntoRuleSets(userCss);

    requiredCss.forEach(require => {
        checkRuleSet(ruleSets, require)
    });
}

function checkRuleSet(scope, require) {
    let validCandidates = ruleSetsWithSelector(require.selector, scope)

    if (validCandidates.length == 0) {
        throw new Error(`${require.selector} selector is missing`)
    }

    if (require.childRuleSets != null) {
        validCandidates.filter((candidate) => {
            require.childRuleSets.forEach(childRequirement => {
                // this will spit up errors if childRequirements are not met
                checkRuleSet(candidate.childRuleSets, childRequirement) 
            });
        })
    }

    if (require.properties != null) {
        require.properties.forEach(property => {
            validCandidates = objectsWithProperty(property, validCandidates)
                
            if (validCandidates.length == 0) {
                throw new Error(`${property.property} is not complete in ${require.selector}`)
            }
        });
    }
}

// Returns all rulesets that include desired selector
function ruleSetsWithSelector(desiredSelector, candidates) {
    return candidates.filter((objects) => {
        return objects.selectors.includes(desiredSelector)
    })
}

function objectsWithProperty(desiredProperty, candidates) {
    return candidates.filter((candidate) => {
        let hasProperty = false;
        let hasValue = false;

        candidate.rules.forEach((rule) => {
            if (rule.property == desiredProperty.property || desiredProperty.useFinalValue != null) {
                hasProperty = true;

                // If right property, check it's value
                let value = rule.value;
                if (desiredProperty?.useFinalValue != null) { 
                    const finalizedObject = document.createElement("div")
                    finalizedObject.style = `${rule.property}: ${rule.value}`;
                    
                    value = finalizedObject.style[desiredProperty.property]
                }
                
                const isNumber = /\d/.test(value) && /\d/.test(desiredProperty.value);          
                if (isNumber) { // Test for numbers
                    const inputNumber = value.replaceAll(/\D/g, "");
                    const operator = desiredProperty.operator ?? "==";
                    const desiredValue = desiredProperty.value;
                    
                    if (desiredProperty.value == null || eval(`${inputNumber} ${operator} ${desiredValue}`)) {
                            hasValue = true;
                    }
                    if (value.replaceAll(/\d/g, "") != desiredProperty.unit) {
                    console.log("incorrect unit, expected unit: " + desiredProperty.unit )
                    hasValue = false;
                    }
                }
                else if (desiredProperty.value == null || desiredProperty.value == value) { // Test for not numbers
                    hasValue = true;
                }
            }
        }) 
        return hasProperty && hasValue;
    })
}

// Seperate user input into usable data
function findRuleSets(inputCSS) {
    const ruleSets = []
    let layersDeep = 0
    let startOfRuleSet = 0;

    for (let i = 0; i < inputCSS.length; i++) {
        const character = inputCSS[i];
        switch(character) {
            case '{':
            layersDeep++;
                break;
            case '}':
                layersDeep--;
            if (layersDeep == 0) {
                ruleSets.push(inputCSS.slice(startOfRuleSet, i + 1));
                startOfRuleSet = i + 1;
            }
                break;
            case ';':
                if (layersDeep == 0) {
                    startOfRuleSet = i + 1;
                }
                break;
        }
    }
    
    return ruleSets
}
function splitIntoRuleSets(inputCSS) {
    return breakUpRuleSets(findRuleSets(inputCSS))
}
function breakUpRuleSets(ruleSets) {
    const brokenRules = []

    ruleSets.forEach(ruleSet => {
        const newRuleset = {}

        // selector
        const selectorSearcher = ruleSet
        .replaceAll(/\/\*.*\*\//g, "") // Remove block comments
        .replaceAll(/\/\/.*/g, "") // Remove comments
        .replaceAll(/\s(?:\s)+/g, " ") // Condenses multiple spaces into one
        .replaceAll("\n", "") // removes new lines
        
        newRuleset.selectors = /(.|\s)+?{/
        .exec(selectorSearcher)[0] // Get all regex matches 
        .replace("{", "") // Exclude { bracket
        .split(",") // seperate selectors by commas
        .map((element)=>{return element.trim()}) // remove surrounding spaces

        // Child rulesets
        let clearBrackets = selectorSearcher;
        clearBrackets = clearBrackets.replaceAll(/^.*?{|}\s*$/g, "");
        
        const ruleSetsAsStrings = findRuleSets(clearBrackets)

        ruleSetsAsStrings.forEach((segment) => {
            // remove rulesets from string, don't want the rules including selectors and such  
            clearBrackets = clearBrackets.replaceAll(segment, "") 
        })
        newRuleset.childRuleSets = breakUpRuleSets(ruleSetsAsStrings)

        // ClearBrackets should only have rules text left... hopefully, so we just pass it in
        newRuleset.rules = breakRules(clearBrackets);

        brokenRules.push(newRuleset)
    });
    
    return brokenRules
}
function breakRules(rules) {
    const segmentedRules = []
        rules.split(";").forEach(rule => {

            const splitRule = rule.split(":")
            
            if (splitRule[0].trim() != "") {
                const values = splitRule[1]?.trim()//.split(" ")
                segmentedRules.push({property: splitRule[0].trim(), value: values})
            }
        });
    return segmentedRules
}