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

export function getAllProducts(num) {
    return (dispatch) => {
        dispatch(loadingProducts(true));
        // fetch('https://rickandmortyapi.com/api/character')
        fetch(`https://fakerapi.it/api/v1/images?_quantity=${num}&_type=pokemon&_height=50`)
            .then((res) => res.json())
            .then((data) => dispatch(addAllProducts(data)))
            .finally(() => dispatch(loadingProducts(false)));
        // .then((data) => dispatch({
        //         type: 'PRODUCTS_ADD_ALL',
        //         payload: data,
        //     }));
    };
}
