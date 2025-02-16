import React from 'react';
import '../../styles/Homepage.css';

const products = [
    // { id: 1, name: 'Sunglasses', image: 'sunglasses.jpg' },
    // { id: 2, name: 'Watches', image: 'watches.jpg' },
    // { id: 3, name: 'Handbags', image: 'handbags.jpg' },
    // { id: 4, name: 'Jewelry', image: 'jewelry.jpg' },
];

const Product = () => {
    return (
        <div className='product-body'>
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Product;