import React, {useState} from "react";
import useCounter from "./useCounter";

function SubscribeBox(){

  const [state, setState] = useState( {
    subscribe: false,
    // like: 0,
    dislike: 0
  })

  const [like, handleLike, handleTripleLike] = useCounter(0)
  const [dislike, handleDisLike] = useCounter(0)

  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe : !state.subscribe
    })
  }

  // tambahan callback currentState
  // const handleLike = () => {
  //   setState(currentState => ({
  //     ...state,
  //     like : currentState.like + 1
  //   }))
  // }

  // share logic di dislike

  // const handleTripleLike = () => {
  //   handleLike()
  //   handleLike()
  //   handleLike()
  // }

  return (
    <div>
      <p>
        <button onClick={handleSubscribe}> Subscribe 
        </button>
        <span>{JSON.stringify(state.subscribe)}</span>
      </p>
      <p>
        <button onClick={handleLike}> Like </button>
        <span>{like}</span>
      </p>
      <p>
        <button onClick={handleDisLike}> Dislike </button>
        <span> {dislike} </span>
      </p>
      <p>
        <button onClick={handleTripleLike}> Triple Like</button>
        <span> {like} </span>
      </p>
    </div>
  );
} 

export default SubscribeBox