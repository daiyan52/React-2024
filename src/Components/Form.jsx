function handleFormSubmit(event){
    event.preventDefault();
    console.log('Form  submitted');
}
function Form(){
    return(
        <form action="">
            <input type="text"  placeholder="write here" className="form-control"/>
            <button className="btn btn-primary" onClick={handleFormSubmit}>submit</button>
        </form>
    )
}
export default Form;