import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { name } = useParams()

    const [product, setProduct] = useState({})
    //products'dan bize data gelecek

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then((result) => setProduct(result.data.data))
        //başarılı olursa gelecek sonuç için 
    }, [])

    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                        bilgiler
                    </Card.Text>
                    <Button variant="primary">Git</Button>
                </Card.Body>
            </Card>


        </div>

    )
}
