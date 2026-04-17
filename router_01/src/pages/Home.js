
import React from "react";
import { Link } from "react-router";

function Home(){

    return (
       <div className="home">
        <h1>This is Home page</h1>
        {/* Linking page this way refreshes the whole website which is in efficient */}
        {/* <a href="\product">Link to product page</a> */}

        {/* lets use Link provided by react-router */}
        {/* <Link to = "/product">Link to product page</Link> */}
       </div>
    );
}

export default Home;