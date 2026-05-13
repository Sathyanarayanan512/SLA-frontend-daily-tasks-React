import { useReducer } from 'react'

const initialState = {count:0};

function UseReducerCounter(){
    function reducer(state, action){
        switch(action.type){
            case "INCREMENT":
                return {count : state.count+1}
            case "DECREMENT":
                return {count : state.count-1}
            case "RESET":
                return initialState
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
          <h1>Counter using useReduce</h1>
          <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
          <span>{state.count}</span>
          <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button><br/>
          <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </>
    )

}

export default UseReducerCounter