export function addCategory(category) {
    return {
        type: "ADD_OR_REPLACE_CATEGORY",
        payload: category
    };
}
