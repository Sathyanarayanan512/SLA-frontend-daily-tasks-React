import { useRef } from 'react'

export default function UseRefInputFocus(){
    const inputRef = useRef(null);

    function focusInput(){
        inputRef.current.focus();
    }

    return(
        <>
          <h1>Input Focus using useRef</h1>
          <input ref={inputRef} type="text" placeholder="Type something..."/>
          <button onClick={focusInput}>Focus</button>
        </>
    )
} 