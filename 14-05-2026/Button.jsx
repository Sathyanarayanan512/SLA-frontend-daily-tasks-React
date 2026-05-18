function Button(props){
    return (
        <>
            <button type={props.type} style={{margin: 5, width: 100}} onClick={props.onClick} disabled = {props.disabled}>{props.value}</button>
        </>
    )
}

export default Button