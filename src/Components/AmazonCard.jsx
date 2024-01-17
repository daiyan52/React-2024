import '../CSS/Amazon.css';
import Price from './Price';
function AmazonCard({title,index}){
    let oldPrice  = ["2233","3234","31278","4345"];
    let newPrice = ["2133","2345","30234","2305"];
    return(
        <div className="AmazonCard">
              <div>
                <h2 className='text-danger'>{title}</h2>
                <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
             </div>
        </div>
    )
}
export default AmazonCard;