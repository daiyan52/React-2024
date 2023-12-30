import Product from "./Product";

function ProductTab(){
    // let option1 = ["8GB RAM","i5","Mi"];
    let options = ["8GB RAM","i5","Mi"];

    // let option2 = {a:"8GB RAM", b:"i5",c:"Mi"};
    return(
        <>
        <Product title="iphone" price={89000} options={options}/>
        <Product title="Macbook" price={6999} options={options}/>
        <Product title="Pen Tablet" price={2199} options={options}/>
        </>
    )
}
export default ProductTab;