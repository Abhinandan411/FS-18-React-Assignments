import React, { useContext, useState, useEffect } from 'react'
import { productContext } from '../App'


function Cart() {
    const { products } = useContext(productContext);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        products.forEach((product) => {
            total += product.price * product.quantity;
        });
        setTotalPrice(total);
    }, [products]);


    return (
        <div className='Cart'>
            <h1 style={{ textAlign: "center" , padding:"1rem"}}>Carts</h1>
            <ul>
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <li key={product.id}>
                            {product.name}
                        </li>
                        <li>{product.quantity} x {product.price}</li>
                    </div>
                ))}
            </ul>
            <h2 style={{ textAlign: "center" }}>Total Price: ${totalPrice}</h2>
        </div>
    )
}

export default Cart