import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col text-white border-2 rounded-bl-lg border-solid hover:border-slate-400 m-3 p-3 h-auto w-auto bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-slate-400'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2 className='text-lg font-medium'>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='border rounded-full mt-5 hover:bg-red-600'>
        X
      </button>
    </div>
  )
}

export default GoalItem
