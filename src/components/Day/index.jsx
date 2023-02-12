import React from 'react'
import Task from '../Task'
import s from './style.module.css';

export default function Day({tasks, deleteTask, deleteTasksAll}) {
  return (
    <div  className={s.day}>
        {
            tasks.map((task) => (
                <Task key={task.id} {...task}
                deleteTask={deleteTask} />
            ))
        }
        <button className={s.del_btn} onClick={() => deleteTasksAll(tasks[0].day)}>X</button>
    </div>
  )
}
