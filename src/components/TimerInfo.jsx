import React from "react";

export class TimerInfo extends React.Component{


    render() {
        return(<div>
            <strong>{this.props.time}</strong>
        </div>)
    }
}