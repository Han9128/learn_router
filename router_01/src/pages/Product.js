
import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const dummy_products = [
    {id:"p1",name:"Product 1"},
    {id:"p2",name:"Product 2"},
    {id:"p3",name:"Product 3"}
]

function Product(){
    // const navigate = useNavigate();

    // navigate("/home")
    return (
        <div className="product">
            <h1>This is Product page</h1>
            {dummy_products.map((prod)=>(
                <li>
                    <Link to={`/product/${prod.id}`}>{prod.name}</Link>
                </li>
            ))}
        </div>
    )
}

export default Product;