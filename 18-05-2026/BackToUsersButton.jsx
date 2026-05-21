import {useNavigate} from 'react-router-dom'

function BackToUsersButton(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/users/1/Sathya');
    }

    return (
        <>
            <button onClick={handleClick}>Back To Users</button>
        </>
    )
}

export default BackToUsersButton;