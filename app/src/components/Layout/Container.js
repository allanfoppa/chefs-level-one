export const FullContainer = (props) => {
    return(
        <div className={`${props.styling}`}>
            {props.children}
        </div>
    )
}

export const Container = (props) => {
    return(
        <div className={`container ${props.styling}`}>
            {props.children}
        </div>
    )
}