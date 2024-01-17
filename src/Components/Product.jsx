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

      let isDiscount = price >= 30000 ? "Discount : 15%" : "Discount : 5%";
      let styles = {backgroundColor : price >= 30000 ? "yellow" : "cyan"};
      return(
        <div className="Product" style = {styles}>
            <div>
                <h2 className='text-danger'>{title}</h2>
                <h3 className="text-muted">Price: {price}</h3>
                {list && <ol>{list}</ol>}
                <p>{isDiscount}</p>
                 <button className="btn btn-primary">Read Details</button>
             </div>
        </div>
    )
}
export default Product;