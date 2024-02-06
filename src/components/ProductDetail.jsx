import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ProductDetail = () => {
    const [product,setProduct]=useState(null)
    const {id}=useParams()

    const getProduct = async()=>{
        const response=await axios.get(`https:fakestoreapi.com/products/${id}`)
        setProduct(response.data)
    }
    useEffect(()=>{
        getProduct();
      })

  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={product?.image} alt="" className='h-75 w-75'/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                    <b className='gap-5'>{product?.category.toUpperCase()}</b>
                    <h5>Stock Available : {product?.rating?.count}</h5>
                    <h2><b> Price : {product?.price}$</b></h2>
                    <button className='btn btn-dark w-50'>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
