const Card = () => {

    return(

        <div className="task">
        
            <img className="task__img" src={task.image} alt="task_image"></img>
            <h2 className="task__head">{task.head}</h2>
            <p className="task__des">{task.des}</p>
        
        </div>
    )

} 

export default Card;