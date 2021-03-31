const Container = (props) => {
    return(
        <div className={`container ${props.styling}`}>
            {props.children}
        </div>
    )
}

export default Container