// code validator will collect all elements with a valid tag, and filter out any that don't meet the requirements
// validTags: [strings...]) elements allowed to meet requirements eg. ["h1","h2","h3"] or ["img"]
// nickName: string) a descriptive name meant to clarify requiremnts to user, if heading tag would work "heading" could help
// class: string) the tag needs to have all classes separated by a space "classA ClassB"
// childElements: another tag object) required elements found under object with their own requirements
// order: int) you need to find an element that meets the order 2 requirements after an order order 1 element
// count: int) there must be at least x number of valid elements on the page

// content: string) text needed to be found within an element
// contentStrictness: string) "loose" will make capitalization of text content not matter
export function checkTag(scope, tag) {
    const errorIfMissingTags = (message, addition = true) => {
        if (validCandidates.length == 0) {
            throw new Error((addition ? "Missing " : "") + message);
        } else if (tag.count && validCandidates.length < tag.count) {
            throw new Error((addition ? "Need another " : "") + message);
        }
    };

    const tagName =
        tag.nickName ? tag.nickName : `${tag.validTags}`.replace(",", " or ");

    // Gather initial candidates in scope based on tag name
    let validCandidates = [];
    tag.validTags.forEach((validTag) => {
        const validElements = Array.from(scope.getElementsByTagName(validTag));
        validCandidates = validCandidates.concat(validElements);
    });
    // If none or not enough are found an error is thrown
    errorIfMissingTags(tagName);

    // Filter out candidates that don't fit class requirements
    if (tag.class) {
        validCandidates = classFilter(validCandidates, tag);
        errorIfMissingTags(`"${tag.class}" class in ${tagName}`);
    }

    // Filter out candidates that don't have required children
    if (tag.childElements) {
        let orderedTags = [];

        let errorFindingChild = "";
        let setChildError = (errorMessage) => {
            if (errorFindingChild == "") {
                errorFindingChild = errorMessage;
            }
        };

        // Required Children Filter
        validCandidates = validCandidates.filter((element) => {
            const orderInTag = [];
            let worked = true;
            tag.childElements.forEach((childTag) => {
                try {
                    // will throw error if child is not found
                    const childElement = checkTag(element, childTag);

                    // keeps track of what elements will work i
                    if (childTag.order) {
                        orderInTag.push({
                            order: childTag.order,
                            element: childElement,
                        });
                    }
                } catch (error) {
                    worked = false;
                    setChildError(error.message);
                }
            });
            orderedTags.push(orderInTag);
            return worked;
        });

        // If no candidate has the right children throw the out error its children gave
        errorIfMissingTags(errorFindingChild + ` under ${tagName}`, false);

        // This filters out the candidates whose children are not in the right order
        try {
            validCandidates = orderFilter(validCandidates, orderedTags);
        } catch (error) {
            throw new Error(error.message + `\nunder ${tagName}`);
        }
    }

    // Filters out candidates that don't contain required text
    if (tag.content) {
        validCandidates = contentFilter(validCandidates, tag);

        errorIfMissingTags(`text in ${tagName} "${tag.content}"`);
    }

    // If all goes well we return the list of elements that meet all our requirements
    return validCandidates;
}

function classFilter(validCandidates, tag) {
    const classes = tag.class.split(" ");

    return validCandidates.filter((element) => {
        let hasClass = true;
        classes.forEach((desiredClass) => {
            if (!element.classList.contains(desiredClass)) {
                hasClass = false;
            }
        });
        return hasClass;
    });
}

function contentFilter(validCandidates, tag) {
    return validCandidates.filter((element) => {
        let a = tag.content;
        let b = element.textContent;

        if (tag.contentStrictness && tag.contentStrictness == "loose") {
            a = a.toLowerCase();
            b = b.toLowerCase();
        }
        return b.includes(a);
    });
}

function orderFilter(validCandidates, orderedTags) {
    return validCandidates.filter((validCandidate, tagIndex) => {
        const currentTags = orderedTags[tagIndex];
        return checkOrder(validCandidate, currentTags);
    });
}

export function checkOrder(validCandidate, orderedTags) {
    const currentTags = orderedTags.slice(0);
    currentTags.sort((a, b) => a.order - b.order);

    const descendants = listChildElements(validCandidate);
    for (let i = 0; i < descendants.length; i++) {
        const tagsToCheck = currentTags.filter(
            (tag) => tag.order == currentTags[0].order,
        );

        tagsToCheck.forEach((tagCheck, index) => {
            if (tagCheck.element.includes(descendants[i].element)) {
                tagsToCheck.splice(0);
                currentTags.splice(index, 1);
                i += descendants[i].childCount;
            }
        });
    }
    // Elements were not in the right order
    if (currentTags.length > 0) {
        let errorMessage = "Needs to be in this order";
        orderedTags.forEach((orderedTag) => {
            const element = orderedTag.element[0];
            errorMessage += `\n${orderedTag.order}. ${element.tagName} ${element.classList.length > 0 ? `with classes "${element.classList}"` : ""}`;
        });

        throw new Error(errorMessage);
    }
    return true;
}

function listChildElements(element) {
    let returnList = [];
    Array.from(element.children).forEach((childElement) => {
        const decendents = listChildElements(childElement);
        returnList.push({
            element: childElement,
            childCount: decendents.length,
        });
        returnList = returnList.concat(decendents);
    });
    return returnList;
}
