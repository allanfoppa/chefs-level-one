
const Card = (props) => {
    return(
        <div className="break-inside p-8 my-6 bg-gray-100 rounded-lg">
            {props.id}
            {props.name}
            {props.thumbsUp}
            {props.thumbsDown}
            <img src={props.image} alt="teste" />
        </div>
    )
}

export default Card