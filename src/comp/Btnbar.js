import React from 'react'
import {useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

export default function Btnbar() {

  const dispatch = useDispatch()

  return (
    <>
      <div className="container mt-5"> 
        <button type="button" class="btn btn-success"  onClick={() => dispatch(increment())} >Add</button>
        <button type="button" class="btn btn-danger"   onClick={() => dispatch(decrement())} >Remove</button>
        </div>
    </>
  )
}
