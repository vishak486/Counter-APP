import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmount]=useState(0)
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()

  const handleIncrementAmount=()=>{
    if(amount)
    {
      dispatch(incrementByAmount(amount))
    }
    else
    {
      alert('Please enter a valid amount')
    }
  }
  return (
    <div className='border rounded  p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div style={{width:'500px'}} className="d-flex justify-content-between my-5">
            <button onClick={()=>dispatch(decrement())}  className="btn btn-warning text-light fw-bolder">Decrement</button>
            <button onClick={()=>dispatch(reset())}  className="btn btn-danger text-light fw-bolder">Reset</button>
            <button onClick={()=>dispatch(increment())}  className="btn btn-success text-light fw-bolder">Increment</button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <input onChange={e=>setAmount(e.target.value)} className='form-control' placeholder='Input amount to be incremented' type="text" />
            <button onClick={handleIncrementAmount} className="btn btn-primary text-light ms-3 fw-bolder">Increment by amount</button>
        </div>
    </div>
  )
}

export default Counter