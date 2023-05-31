import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import React from 'react';
import { getAllProducts } from '../store/actions/productsActions';

const ProductsPage = (props) => {
    // const rickyState = useSelector((s) => s.products.list);
    // const { list, iLoading } = useSelector((s) => s.products);
    const { list: pokemons, iLoading } = useSelector((s) => s.products);
    const { value: count } = useSelector((s) => s.counter);

    const dispatch = useDispatch();

    const handleLoad = (data) => {
        dispatch(getAllProducts(data));
    };

    return (
        <div className='products__wrap block'>
            <div>Pokemon List</div>
            <div className='btns'>
                <button onClick={() => handleLoad(count)}>Добавить покемонов</button>
                <button onClick={() => dispatch({ type: 'DELETE' })}>Удалить покемонов</button>
            </div>
            {iLoading ? (
                'LOADING'
            ) : (
                <div className='products'>
                    {pokemons.map((item, i) => {
                        return (
                            <div className='products__list' key={i}>
                                <span>{item.title}</span>
                                {/*<span>{item.status}</span>*/}
                                <div className='img__wrap'>
                                    <img src={item.url} alt='' />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
