const ProjectList = ({projects}) => {

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

export default ProjectList;