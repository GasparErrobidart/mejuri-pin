export function setGrids(grids) {
    return {
        type: "SET_GRIDS",
        payload: grids
    };
}

export function setCachedGrids(cached) {
    return {
        type: "SET_CACHED_GRIDS",
        payload: cached
    };
}
