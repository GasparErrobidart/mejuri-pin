export function addLike(productId) {
    return {
        type: "ADD_LIKE",
        payload: productId
    };
}

export function removeLike(productId) {
    return {
        type: "REMOVE_LIKE",
        payload: productId
    };
}
