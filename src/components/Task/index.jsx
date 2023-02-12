import React from 'react'
import s from './style.module.css'

export default function Task({id,priority, description, deleteTask}) {
  return (
    <div className={s.task}>
      <div className={s.task_day}>
        <p  className={priority === "High" ? s.red : s.green}>{description}
        <button className={s.task_del_btn} onClick={() => deleteTask(id)} >X</button>
        </p>
        
      </div>
        
    </div>
  )
}
