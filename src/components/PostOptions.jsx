import React from "react";
import isLike from "../assets/is-like.png"
import noLike from "../assets/no-like.png"
export class PostOptions extends React.Component{

    render(){
        return(<div className={"post-options"}>
            <img onClick={()=>this.props.likeHandler(this.props.post.id,!this.props.post.isLiked)} className={"like"} src={this.props.post.isLiked ? isLike : noLike} alt={"like"}/>
        </div>)
    }
}