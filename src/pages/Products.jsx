import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {

    const allProducts = useSelector(state=> state.products)
    const [productsDetail, setProductsDetail] = useState ([])
    const [suggestProducts, setSuggestProducts] = useState ([])

    const navigate = useNavigate()

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
        
    }, [])

    useEffect(() => {
            const products = allProducts?.find(productsItem => productsItem.id === Number(id))
            console.log(products);
           setProductsDetail(products)
           
           const filteredProducts = allProducts.filter( productsItem => 
            productsItem?.category.id === products?.category.id ) 
            setSuggestProducts(filteredProducts)
    }, [ allProducts])
    
console.log(productsDetail);
    
    return (
        <div>
            <h1>Products</h1>
                <h2>{productsDetail?.title}</h2>
                <img src={productsDetail?.productImgs} alt="" />
                <p>{productsDetail?.description}</p>
                <ul>
                {
                suggestProducts.map((products) =>(
                    <li key={products.id} onClick={() => navigate(`/products/${products.id}`)}>
                        {products.title}
                    </li>
                ) )
                }  
                </ul> 
        </div>
    );
};

export default Products;