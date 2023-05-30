import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import React from 'react';
import { addAllProducts, getAllProducts } from '../store/actions/productsActions';
import store from '../store/store';

const ProductsPage = (props) => {
    // const rickyState = useSelector((s) => s.products.list);
    const { list, iLoading } = useSelector((s) => s.products);
    const dispatch = useDispatch();

    const handleLoad = () => {
        dispatch(getAllProducts());
    };
    return (
        <div>
            <div>ProductsPage</div>
            <button onClick={handleLoad}>Ckick me</button>
            {iLoading ? (
                'LOADING'
            ) : (
                <div className='products'>
                    {list.map((item) => {
                        return (
                            <div className='products__list' key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.status}</span>
                                <img src={item.image} alt='' />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
