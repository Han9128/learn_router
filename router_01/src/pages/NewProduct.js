
import React from "react";
import {Form, redirect} from "react-router";
import Home from "./Home";

function NewProduct(){

    return(
        <div className="new-product">
            <h1>This is New Product Page</h1>
            <Form method='POST'>
            <div className="new-product-info">
                <input type="text" name="productName" placeholder="productName" />
            </div>
            <button type="submit">Add Product</button>
            </Form>
        </div>
    )
}

export async function addProductAction({request}){
    const formData = await request.formData();
    const productName = formData.get("productName");
    console.log(productName);

    return redirect("/home");
}

export default NewProduct;