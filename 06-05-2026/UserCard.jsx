function UserCard(props){
    return (
        <>
          <h2>User Card:</h2>
          <h3>User name: {props.name}</h3>
          <h3>User age: {props.age}</h3>
        </>
    )
}

export default UserCard