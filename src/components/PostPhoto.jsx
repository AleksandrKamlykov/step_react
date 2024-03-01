import React from "react";

export class PostPhoto extends React.Component{

    state={
        indexImg: 0
    }

    constructor(props) {
        super(props);
    }

    next =()=>{
        if(this.state.indexImg < this.props.gallery.length -1){
            this.setState(prev => ({indexImg: prev.indexImg +1}))
        }
    }

    prev =()=>{
        if(this.state.indexImg >0){
            this.setState(prev => ({indexImg: prev.indexImg -1}))
        }
    }
    render(){

        return(<div className={"gallery"}>
            <span className={"galery-counter"}>{this.state.indexImg +1}/{this.props.gallery.length}</span>
            <img src={this.props.gallery[this.state.indexImg]} alt={"post-photo"} className={"post-photo"}/>
            <button onClick={this.next} className={"next-btn"}>Next</button>
            <button onClick={this.prev} className={"prev-btn"}>Prev</button>
        </div>)
    }
}

