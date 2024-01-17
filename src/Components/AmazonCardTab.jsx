import AmazonCard from "./AmazonCard";
function AmazonCardTab(){
    return(
        <div className="d-flex justify-content-evenly">
        <AmazonCard title="Macbook" index={0}/>
        <AmazonCard title="hp" index={1}/>
        <AmazonCard title="samsung" index={2}/>
        <AmazonCard title="Dell" index={3}/>
        </div>
    )
}
export default AmazonCardTab;