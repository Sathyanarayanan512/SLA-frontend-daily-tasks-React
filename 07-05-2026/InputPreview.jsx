import { useState } from 'react'

function InputPreview(){
    const [text, setText] = useState('');
    return (
    <>
      <h4>Live Preview of input text</h4>
      <label>Enter your name : </label>
      <input type="text" onInput={(e) => setText(e.target.value)}/>
      <p>Hi {text}</p>
    </>
    )
}

export default InputPreview