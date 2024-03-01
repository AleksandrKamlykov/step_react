import React from "react";
import { PostPhoto} from "./PostPhoto.jsx";
import {PostDescription} from "./PostDescription.jsx";
import {PostOptions} from "./PostOptions.jsx";
import {PostComments} from "./PostComments.jsx";
import {PostHeader} from "./PostHeader.jsx";

export class Post extends React.Component{



    render(){
        return(<div className={"post"}>
            <PostHeader post={this.props.post} />
            <PostPhoto gallery={this.props.post.gallery}/>
            <PostOptions likeHandler={this.props.likeHandler} post={this.props.post}/>
            <PostDescription description={this.props.post.description}/>
            <PostComments comments={this.props.post.comments ?? []}/>
        </div>)
    }
}