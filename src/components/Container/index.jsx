import React from 'react'
import Day from '../Day';
import s from "./style.module.css";


export default function Container({tasks, deleteTask, deleteTasksAll}) {

    const mo = tasks.filter((task) => task.day === 'Mo');
    const tu = tasks.filter((task) => task.day === 'Tu');
    const we = tasks.filter((task) => task.day === 'We');
    const th = tasks.filter((task) => task.day === 'Th');
    const fr = tasks.filter((task) => task.day === 'Fr');
    const sa = tasks.filter((task) => task.day === 'Sa');
    const su = tasks.filter((task) => task.day === 'Su');
  return (
    <div>
        {mo[0] && (
          <div className={s.container}>
            <div className={s.container_day}>Mo</div>
            <Day
            tasks={mo}
            deleteTask={deleteTask}
            deleteTasksAll={deleteTasksAll} />
          </div>
        )}
        
       {tu[0] && (
        <div className={s.container}>
          <div className={s.container_day}>Tu</div>
          <Day 
          tasks={tu}
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )}

       {we[0] && (
        <div className={s.container}>
          <div className={s.container_day}>We</div>
          <Day
          tasks={we} 
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )}

       {th[0] && (
        <div className={s.container}>
          <div className={s.container_day}>Th</div>
          <Day
          tasks={th}
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )}

       {fr[0] && (
        <div className={s.container}>
          <div className={s.container_day}>Fr</div>
          <Day
          tasks={fr}
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )}

       {sa[0] && (
        <div className={s.container}>
          <div className={s.container_day}>Sa</div>
          <Day
          tasks={sa}
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )}

       {su[0] && (
        <div className={s.container}>
          <div className={s.container_day}>Su</div>
          <Day
          tasks={su}
          deleteTask={deleteTask}
          deleteTasksAll={deleteTasksAll} />
        </div>
       )} 
    </div>
  )
}
