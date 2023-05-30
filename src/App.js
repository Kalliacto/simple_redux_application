// import { useSelector } from 'react-redux';
import './App.css';
import CounterPage from './components/CounterPage';
import ProductsPage from './components/ProductsPage';

function App() {
    // const state = useSelector((s) => s);
    // console.log({ state });

    return (
        <div className='App'>
            {/* <CounterPage /> */}
            <ProductsPage />
        </div>
    );
}

export default App;
