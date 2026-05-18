import { useState,useEffect } from 'react'
import Button from './Button'
import TextInput from './TextInput'

function SignupForm(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [preview, showPreview] = useState(false)
    function handleSubmit(event){
        event.preventDefault();
        showPreview(true)
    }
    function handleClear(e) {
        e.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
        showPreview(false)
    }
    const isDisabled = name.trim() === '' || email.trim() === '' || password.trim() === '';
    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <TextInput type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <label>Email : </label>
            <TextInput type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <label>Password : </label>
            <TextInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <Button type="submit" value="Submit" disabled={isDisabled}/>
            <Button type="button" value="Clear" onClick={handleClear}/><br/><br/><br/>
            <div style={{display: preview ? 'block' : 'none'}}>
                <h2>Preview Panel</h2>
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Password: </strong>{password}</p>
            </div>
            </form>
        </>
    )
}

export default SignupForm