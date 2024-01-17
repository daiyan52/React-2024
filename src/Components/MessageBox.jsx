import Message from "./Message";
function MessageBox(){
   return(
        <>
            <Message userName={"Daiyan"} textColor={"red"}/>
            <Message userName={"Raju"} textColor={"yellow"}/>
            <Message userName={"Anis"} textColor={"blue"}/>
        </>
    )
}
export default MessageBox;