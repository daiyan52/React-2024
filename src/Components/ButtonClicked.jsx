function Clicked(){
    console.log("Clicked")
}
function mouseOver(){
    console.log('Mouse over event');
}
function dblClick()
{
    console.log("Double Clicked")
}
function ButtonClicked(){
    return(
        <div>
            <button className="btn btn-primary" onClick={Clicked}>CLicked me!</button>
            <p onMouseOver={mouseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ratione, reiciendis dolorem. Deleniti ea praesentium facere 
                vero cupiditate minus nemo accusantium labore? Itaque iste aperiam 
                obcaecati natus sequi praesentium accusamus aspernatur!</p>
            <button onDoubleClick={dblClick} className="btn btn-danger">Double Click</button>
        </div>
    )
}
export default ButtonClicked;