import { Col, Container, Row } from 'react-bootstrap'
import "./ProductsList.css"

import productsDb from '../../db'
import { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductsLitst(){
    
    const [productsData , setProductsData] = useState(productsDb);
    
    return (
        <Container className='py-4'>
            <Row className='gy-3'>
                {
                    
                    productsData.map( product => (
                        <Col sm={6} md={4} lg={3} key={product.id}><ProductItem {...product} /></Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductsLitst