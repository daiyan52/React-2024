import { useState } from "react";

function LikeButton(){
    let [isLiked,setisLiked] = useState(false);
    let [Count,setCount] = useState(0);
    let toggleLiked = () =>{
        setCount(Count+1);
        setisLiked(!isLiked);
    }
    return(
        <div>
            <h2>Like Button</h2>
            <p onClick={toggleLiked}>
                <h2 style={{fontFamily:"cursive"}}>{Count} Liked</h2>
                {isLiked ? <i className="fa-solid fa-heart" style={{color:"red"}}></i> : <i className="fa-regular fa-heart"></i>}
                </p>
        </div>
    )
}
export default LikeButton;