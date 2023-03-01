import { Component } from "react";

export default class ProjectList extends Component {
    render() {
        const projects = this.props.projects;

        return(
            <div className="projectlist">
                {projects.map((el,index) => {
                    return (
                            <img src={el.img} alt='' key={index}/>
                        )
                    })}
            </div>
        );
    }
}