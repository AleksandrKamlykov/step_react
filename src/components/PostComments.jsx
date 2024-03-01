import React from "react";

export class PostComments extends React.Component{
    state={
        show:false
    }
    constructor(props) {
        super(props);
    }

    showCommentsHandler =()=>{
        this.setState(prev=>({...prev,show: !prev.show}))
    }
formatter = new Intl.DateTimeFormat("en-UK",{
    hour:"2-digit",
    minute:"2-digit",
    day:"numeric",
    month:"numeric"

}).format
    render(){
        return(<div className={"comments-wrapper"}>
            <button className={"btn-comment"} onClick={this.showCommentsHandler}>{this.state.show ? "Hide comments":"Show comments"}</button>
            {
                this.state.show ? <>
                    {
                        this.props.comments.map(({text,date}, index)=> <div key={index}>
                            <span >{text}</span>
                            <p style={{padding:0,margin:0}}>
                                <small>{this.formatter(date)}</small>
                            </p>
                        </div>)
                    }
                </>: <p>comments...</p>
            }
        </div>)
    }
}