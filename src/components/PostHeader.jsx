import React from "react";

export class PostHeader extends React.Component{
    render() {
        return(
            <header className={"post-header"}>
                <h3>Author</h3>
                <button className={"btn-more"}>---</button>
            </header>
        )
    }
}