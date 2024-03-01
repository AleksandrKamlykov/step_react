import React, { useState } from 'react'

import './App.css'
import {Post} from "./components/Post.jsx";
import {Header} from "./components/Header.jsx";


class App extends React.Component{

    state = {
        posts:[
            {
                id:1,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                isLiked:false,
                gallery:["https://picsum.photos/200/200","https://picsum.photos/200/200"],
                comments:[
                    {
                        text:"comment 1",
                        date: new Date()
                    },
                    {
                        text:"comment 2",
                        date:new Date
                    }
                ]
            },
            {
                id:2,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                isLiked:true,
                gallery:["https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200"],
                comments:[
                    {
                        text:"comment 22221",
                        date: new Date()
                    },
                    {
                        text:"comment 222222",
                        date:new Date
                    }
                ]
            },
            {
                id:3,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                isLiked:false,
                gallery:["https://picsum.photos/200/200"],
                comments:[
                    {
                        text:"comment 33333333",
                        date: new Date()
                    },
                    {
                        text:"comment 3333333",
                        date:new Date
                    }
                ]
            }
        ]
    }

    constructor(props) {
        super(props);


    }
    likeHandler = (id, value)=>{


        this.setState((prev)=>{

            prev.posts = prev.posts.map(post=>{
                if(post.id === id){
                    post.isLiked = value
                }
                return post
            })

            return prev
        })
    }

 render() {
     return (
         <>
             <Header />
             <div className={"insta"}>
                 {
                     this.state.posts.map(post => (<Post likeHandler={this.likeHandler} key={post.id} post={post}/>))
                 }
             </div>
         </>
     )
 }
}

export default App
