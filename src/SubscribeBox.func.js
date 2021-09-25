import React, {useState} from "react";

function SubscribeBox(){

  const [state, setState] = useState( {
    subscribe: false,
    like: 0,
    dislike: 0
  })

  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe : !state.subscribe
    })
  }

  const handleLike = () => {
    setState({
      ...state,
      like : state.like + 1
    })
  }

  return (
    <div>
      <p>
        <button onClick={handleSubscribe}> Subscribe 
        </button>
        <span>{JSON.stringify(state.subscribe)}</span>
      </p>
      <p>
        <button onClick={handleLike}> Like </button>
        <span>{state.like}</span>
      </p>
      <p>
        <button> Dislike </button>
        <span> {state.dislike} </span>
      </p>
      <p>
        <button> Triple Like</button>
        <span> </span>
      </p>
    </div>
  );
} 

export default SubscribeBox