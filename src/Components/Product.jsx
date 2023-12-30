import '../CSS/Product.css';
function Product({title,price,options}){
    // let list = options.map((option,index)=> 
    // <li key={index}>{option}</li>
    // )
    let list = Array.isArray(options) ? (
        options.map((option, index) => (
          <li key={index}>{option}</li>
        ))
      ) : null;
    
    
    return(
        <div className="Product">
            <div>
                <h2 className='text-danger'>{title}</h2>
                <h3 className="text-muted">Price: {price}</h3>
                {list && <ol>{list}</ol>}
                <button className="btn btn-primary">Read Details</button>
             </div>
        </div>
    )
}
export default Product;