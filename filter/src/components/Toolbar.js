import { Component } from "react";

export default class Toolbar extends Component {

    render() {
        return(
            <div>
                {this.props.filters.map((el, index) => {
                    return(
                        <button key={index} onClick={(e) => this.props.onSelectFilter(e.target)}>{el}</button>
                    );
                })}             
            </div>
        );
    }
}