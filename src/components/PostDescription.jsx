import React from "react";

export class PostDescription extends React.Component{


    render() {
        return(<div className={"post-description-wrapper"}>
            <strong className={"post-description-title"}>Description</strong>
            <hr/>
            <span>
                {
                    this.props.description
                }
            </span>
        </div>)
    }
}