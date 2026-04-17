
import { useParams } from "react-router";

function ProductInfo(){
    const params = useParams();
    console.log(params);
    return (
        <div className="product-ifo">
            <h2>Product Info page</h2>
            <h3>{params.id}</h3>
        </div>
    );
}

export default ProductInfo;