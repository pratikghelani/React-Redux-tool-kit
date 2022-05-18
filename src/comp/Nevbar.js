import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Nevbar() {
    const count = useSelector((state) => state.counter)
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">{count}</a>
            </div>
        </nav>
    </>
  )
}

