import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, filterProductThunk, filterCategoryThunk } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom'
import { Row, Col, Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap'


const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState(" ")
    const [categories, setCategories] = useState([])

    const products = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))
    }, [])



    return (
        <div>
            <br />
            <Row>
                <Col lg={3} >

                    <ListGroup>

                        {categories.map((category) => (
                            <ListGroup.Item
                             key={category.id}
                                onClick={() => dispatch(filterCategoryThunk(category.id))}
                            >{category?.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>

                <Col>

                    <h1>Home</h1>

                    <InputGroup className="mb-3"> 
                        <Form.Control
                            placeholder=" products "
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={e => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <Button variant="outline-secondary" onClick={() => dispatch(filterProductThunk(searchValue))}>
                            Button
                        </Button>
                    </InputGroup>


                    <Row
                        xs={1} md={2} lg={2} className="g-4">

                        {
                            products.map(product => (
                                <Col key={product.id}>
                                    <Card >
                                        <div style={{ display: "block" }} onClick={() => navigate(`products/${product.id}`)}>
                                            <Card.Img style={{ heigth: "200px" }} src={product.productImgs} variant="top" />
                                            <Card.Title style={{fontziSiza:"14px", fontWeight: " bold"}}> {product.title}</Card.Title>
                                          
                                            <Card.Body style={{borderTop: "2px solid Black", marginTop: "15px"}}>
                                                <div >
                                                    Price
                                                    <div style={{display: "plex", justifyContent: "center"}}>
                                                        <small>$ {product.price}</small>
                                                        <Button variant="outline-danger"> to buy </Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </Col>

                            ))

                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;