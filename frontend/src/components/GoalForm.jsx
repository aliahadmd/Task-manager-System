import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className='flex justify-center'>
      <form onSubmit={onSubmit}>

        <label className='text-3xl italic py-5' htmlFor='text'>Task Management System</label>
        <input
          type='text'
          name='text'
          id='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 m-2"
        />


        <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2' type='submit'>
          Add Task
        </button>

      </form>
    </section>
  )
}

export default GoalForm
