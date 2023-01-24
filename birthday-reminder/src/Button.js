import './Button.css'
import {useState} from 'react'
import {Birthday} from './Birthday'

function Button(props){
const [getTheDate, getDate] = useState("")
    const selectDate=(e)=>{
        let createDate = new Date(e.target.value)
        let year = createDate.getFullYear()
        let month = createDate.getMonth()+1
        let day = createDate.getDate() + 1 
        let dateOfBirth = `${year}-${month}-${day}`
        getDate(dateOfBirth)
    }

const handleBirthday=(e)=>{
    e.preventDefault()
   
    const birthDate = Birthday.filter((date)=>{
        let dateObj =  new Date(date.birthday)
        let year = dateObj.getFullYear()
        let month = dateObj.getMonth()+1
        let day = dateObj.getDate() 
        let birthList = `${year}-${month}-${day}`
        return birthList===getTheDate
       
    })
    props.listOfBirthDays(birthDate)
}
    return(
       <div id="form-wrapper" onSubmit={handleBirthday}>
        <form>
             <label htmlFor="select-date">Select Date</label>
             <br/>
             <input 
              type="date" 
              id="select-date"
              onChange={selectDate}/>
             <br/>
             <button>Submit</button>
        </form>
       
       </div>
    )
}

export default Button

// selectedDate(selectedDate)
// props.dateSelect(selectedDate)

// if(getTheDate !==""){
//     console.log(getTheDate)
//  }

// if(selectedDate===" "){
        //     console.log("Missing Data")
        // }