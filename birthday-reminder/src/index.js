import React from 'react'
import ReactDom from 'react-dom/client'
import List from './List'
import Button from './Button'
import {useState} from 'react'

import './index.css'

function BirthayReminder(){
    const [birthdays, setBirthDays] = useState([])
    const birthdayHandler=add=>{
        setBirthDays(old=>{
            return [add, ...old]
        })
    }

    const clearList=()=>{
        setBirthDays([])
    }

    return(
        <div>
            <h1 id="h1">Birthday Reminder</h1>
            <div id="birthday-container">
            <Button listOfBirthDays={birthdayHandler}/>
                {birthdays.map((birth)=>{
                    return birth.map((day)=>{
                        return(
                            <List key={day.id} {...day}/>
                        )
                    })
                })
                }
                <button onClick={clearList}>Clear List</button>
            </div>
             

        </div>
       
       
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<BirthayReminder/>)