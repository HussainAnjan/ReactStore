import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import { Link } from 'react-router-dom';

const Card = () => {
const [data,setData]=useState([]);
const [loader,setLoader]=useState(true)
const fetchData=async()=>{
const response=await axios.get("https:fakestoreapi.com/products")
setData(response.data)
setLoader(false)
}
useEffect(()=>{
  fetchData();
},[])
  return (

<div className="container d-flex justify-content-center flex-wrap gap-5">
{loader ? <Loader /> : null}
      {
        data.map((e)=>{
          return(
            <>
                 <div
                className="card mt-5 border-2 bg-dark text-center text-light border-success p-2"
                style={{ width: "20.5rem", height: "auto" }}
              >
              <Link to={`${e.id}`}>
              <img
                  src={e.image}
                  className="card-img-top"
                  style={{ height: "40vh" }}
                  alt="..."
                />
              </Link>

                <div className="card-body d-flex flex-column justify-content-around align-items-center">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text text-align-center text-warning">
                    {e.category}
                  </p>
                  <p className="card-text text-align-center">
                    Price : {e.price}$
                  </p>
                  <Link to={`${e.id}`} className="btn btn-outline-light">
                    Buy Now
                  </Link>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Card
