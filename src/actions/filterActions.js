export function setFilter(id,checked) {
    return {
        type: "SET_FILTER",
        payload: {id,checked}
    };
}
