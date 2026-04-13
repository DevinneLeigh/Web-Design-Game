export function checkTag(scope, tag) {
    const searchForTag = scope.getElementsByTagName(tag.tag);
    let validCandidates = Array.from(searchForTag);

    const errorIfNoValidTags = (message) => {
        if (validCandidates.length == 0) {
            throw new Error(message);
        }
    };

    errorIfNoValidTags(
        `${tag.tag} is missing` +
            (scope.tagName ? ` under ${scope.tagName}` : ""),
        +(scope.classList ? ` with ${scope.classList} classes` : ""),
    );

    if (tag.class) {
        validCandidates = classFilter(validCandidates, tag);

        errorIfNoValidTags(`No ${tag.tag} with "${tag.class}" class`);
    }
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
                    const childElement = checkTag(element, childTag);

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

        errorIfNoValidTags(errorFindingChild);

        // Correct Order filter
        validCandidates = orderFilter(validCandidates, orderedTags);
    }
    if (tag.content) {
        validCandidates = contentFilter(validCandidates, tag);

        errorIfNoValidTags(`${tag.tag} is missing text "${tag.content}"`);
    }

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
