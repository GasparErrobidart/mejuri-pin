export function addProduct(product) {
    return {
        type: "ADD_OR_REPLACE_PRODUCT",
        payload: product
    };
}
