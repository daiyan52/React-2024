function Price({oldPrice,newPrice}){
    let styles = {
        backgroundColor : "#e0c367",
        height : "50px",
        width : "200px",
        borderBottomLeftRadius : "14px",
        borderTopRightRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
     }
    return(
        <div style={styles}>
            <span className="oldPrice">{oldPrice}&#8377;</span>
            &nbsp;&nbsp;
            <span>{newPrice}&#8377;</span>
        </div>
    )
}
export default Price;