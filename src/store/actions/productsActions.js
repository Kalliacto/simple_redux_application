export function addAllProducts(data) {
    return {
        type: 'PRODUCTS_ADD_ALL',
        payload: data,
    };
}

export function loadingProducts(data) {
    return {
        type: 'PRODUCTS_SET_LOADING',
        payload: data,
    };
}

export function getAllProducts() {
    return (dispatch) => {
        dispatch(loadingProducts(true));
        fetch('https://rickandmortyapi.com/api/character')
            // fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300')
            .then((res) => res.json())
            .then((data) => dispatch(addAllProducts(data?.results)))
            .finally(() => dispatch(loadingProducts(false)));
        // .then((data) => dispatch({
        //         type: 'PRODUCTS_ADD_ALL',
        //         payload: data,
        //     }));
    };
}
