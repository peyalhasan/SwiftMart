import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import DisplayProduct from './DisplayProduct';

const Home = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const isPopular = data.filter(product => product.isPopular)
        setProducts(isPopular)
    }, [data])
    return (
        <div>
            <h1>Here is the products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20' >
                {
                    products.map(product => <DisplayProduct key={product.id} product={product} ></DisplayProduct>)
                }
            </div>
        </div>
    );
};

export default Home;