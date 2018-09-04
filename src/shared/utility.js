export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    };
};

export const updateArray = (oldArray, updateProperties) => {
    return [...oldArray, ...updateProperties];
};
