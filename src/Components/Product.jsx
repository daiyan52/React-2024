import '../CSS/Product.css';
function Product({title,price,features}){
    let list = features.map((feature) => 
    <li key={feature.id}>{feature}</li>)
    console.log(list);
    return(
        <div className="Product">
            <div>
                <h2 className='text-danger'>{title}</h2>
                <h3 className="text-muted">Price: {price}</h3>
                <p>{list}</p>
             </div>
            {/* <button className="btn btn-primary">Read Details</button> */}
        </div>
    )
}
export default Product;