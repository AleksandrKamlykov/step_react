import React, { useState } from 'react'

import './App.css'
import {TimerInfo} from "./components/TimerInfo.jsx";

class App extends React.Component{

    interval = null;
    constructor(props) {
        super(props);
        this.state ={
            minutes: 1,
            seconds: 0,
            inputValue: 0
        }

    }


    formatter = new Intl.DateTimeFormat("uk-UA",{minute:"2-digit", second:"2-digit"})

    nextStepTomer =()=>{
        if(this.state.minutes === 0 && this.state.seconds === 0){
            clearInterval(this.interval)
        }else if(this.state.seconds === 0){
            this.setState((prev)=>({...prev, minutes: prev.minutes - 1, seconds: 59}))
        }else{
            this.setState((prev)=>({...prev,seconds: prev.seconds - 1}))
        }

    }

    runTimer=()=>{
      this.setState((prev)=>({minutes: prev.inputValue, seconds: 0}))
        if(this.interval){
            clearInterval(this.interval)
        }
        this.interval = setInterval(this.nextStepTomer , 1000);
    }
    stopTimer =()=>{
        clearInterval(this.interval)
    }

    minutesHandler = (event)=>{
        const value = +event.target.value > 60 ? 60 : +event.target.value
        this.setState({inputValue:value})
    }

 render() {

     return (
         <div className={"timer"}>
            <TimerInfo time={this.formatter.format(new Date(0,0,0,0,this.state.minutes,this.state.seconds))} />
             {this.state.minutes === 0 && this.state.seconds === 0 ?<span>Время вышло</span>: null}
             <input value={this.state.inputValue} onChange={this.minutesHandler} type={"number"} placeholder={"Enter minutes"} />
             <button onClick={this.runTimer}>run</button>
             <button onClick={this.stopTimer}>stop</button>
         </div>
     )
 }
}

export default App
