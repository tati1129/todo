import React from 'react'
import s from './style.module.css'


export default function Header({createTask}) {

  return (
    <div className={s.header}>
        <form  className={s.form} onSubmit={createTask}>
        <div className={s.choice}>
            <div className={s.day}> Choose a day
                <select className={s.select}  name='selectDay' id='' required>
                    <option value=""></option>
                    <option value="Mo">Mo</option>
                    <option value="Tu">Tu</option>
                    <option value="We">We</option>
                    <option value="Th">Th</option>
                    <option value="Fr">Fr</option>
                    <option value="Sa">Sa</option>
                    <option value="Su">Su</option>
                </select>
            </div>
            <div className={s.priority}> Priority
                <select className={s.select}name='selectPriority'>
                    <option value=""></option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </div>
        <div className={s.inp}>
        <input className={s.descr} type="text" placeholder='Case Description' name='description' required/>
        <button className={s.add_btn}>Add Task</button>
        </div>
        
      </form>
    </div>
  )
}
