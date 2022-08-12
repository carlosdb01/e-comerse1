import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/favorites.slice';

const Purchases = () => {

    const dispactch = useDispatch()
    const purchases = useSelector(state => state.purchases)

    useEffect(() => {
        dispactch(getPurchasesThunk())
    }, [])

    return (
        <div>
            <h1>Login</h1>

            <ul>
                {
                    purchases?.map(purchase => (
                        <li  key={purchase.id}>
                            {purchase.title}
                            <img src={purchase.product.Imgs} alt="" />
                        </li>
            
                    ))
        }

            </ul>
        </div>
    );
};

export default Purchases;