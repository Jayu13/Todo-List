"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, SetTitle] = useState("")
  const [desc, SetDesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const handler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, { title, desc }])
    SetTitle("")
    SetDesc("")
  }



  let renderTask = <h2 className='Text-white font-semibold text-2xl'>No Task Available </h2>

  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between items-center'>
          <div className='flex justify-between w-2/3 item-center'>
            <h5 className='text-white text-2xl text-bold border px-6 py-2 mt-5  border-black rounded '>{t.title}</h5>
            <h6 className='text-2xl text-white text-semibold border px-6 py-2 mt-5 border-black rounded '>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              DeleteHandler()
            }}
            className='bg-red-500 text-white rounded text-bold px-4 py-2 mt-5'>Delete</button>
        </li>
      )
    })
  }
  const DeleteHandler = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }



  return (
    <>
      <h1 className='bg-black text-white p-5 font-bold text-5xl text-center'>
        My Todo List
      </h1>
      <form onSubmit={handler} className='text-center'>
        <input type='text' placeholder='Enter Your Task' className='text-2xl border-zinc-800 border-4 m-8 py-2 px-4 rounded'
          value={title}
          onChange={(e) => {
            SetTitle(e.target.value)
          }}
        />
        <input type='text' placeholder='Enter Description Task' className='text-2xl border-zinc-800 border-4 m-8 py-2 px-4 rounded'
          value={desc}
          onChange={(e) => {
            SetDesc(e.target.value)
          }}
        />

        <button className='bg-black text-white font-bold rounded text-2xl px-4 py-2 m-5'>Add Task</button>
      </form>
      <hr />

      <div className='p-8 bg-slate-400 m-4 '>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page