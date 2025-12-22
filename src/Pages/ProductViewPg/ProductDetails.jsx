import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import './ProductDetails.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const ProductDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)

    const goToProduct = () => navigate('/product')

    const addToCart = () => {
        console.log("Added to cart:", product)
    }

    useEffect(() => {
        axios
            .get(`http://localhost:3000/product/${Number(id)}`)
            .then(res => setProduct(res.data))
            .catch(() => setProduct(false))
    }, [id])

    if (product === null) return <div className="text-center mt-5">Loading...</div>
    if (product === false) return <div className="text-center mt-5">Product not found</div>

    return (
        <div className="product-details-section">
            <div className="product-details-head">
                <h2>{product.name}</h2>
            </div>

            <div className="product-details-para text-center">
                <img src={product.image} alt={product.name} className="img-fluid mb-3" />
                <p>{product.description}</p>
                <p><b>Price:</b> ₹{product.price}</p>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-3">
                <input type="button" value="Go To Product List" onClick={goToProduct} className='btn-btn-color' />

                <Button variant="warning" onClick={addToCart}>
                    <ShoppingCartCheckoutIcon /> Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductDetails
