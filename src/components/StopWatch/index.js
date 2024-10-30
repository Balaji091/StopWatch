import React, { Component } from 'react';
import './index.css';

class StopWatch extends Component {
    state={time:0,seconds:0,isRunning:false}
    startTimer=()=>{
        if(!this.state.isRunning){
       this.intervalId=setInterval(()=>{
            this.setState(prevstate=>{
                const{time,seconds}=prevstate
                if(seconds===59)
                {
                    return({time:time+1,seconds:0})
                }
                else{
                    return({seconds:seconds+1})
                }
            })
       },1000)
       this.setState({isRunning:true})
    }
    }
    resetTimer=()=>{
        clearInterval(this.intervalId)
        this.setState({time:0,seconds:0,isRunning:false})
    }
    stopTimer=()=>{
        clearInterval(this.intervalId)
        this.setState({isRunning:false})
    }
    
    render() {
        const{time,seconds}=this.state
        console.log(time,seconds)
        const formattedMinutes=time>9?time:`0${time}`
         const formattedSeconds=seconds>9?seconds:`0${seconds}`
        return (
            <div className="stopwatch-container">
                <h1 className="title">Stopwatch</h1>
                <div className="stop">
                    <h3 className="timer-label">Timer</h3>
                    <p className="time-display">{formattedMinutes}:{formattedSeconds}</p>
                </div>
                <div className="buttons">
                    <button className="start-button" onClick={this.startTimer}>Start</button>
                    <button className="stop-button" onClick={this.stopTimer}>Stop</button>
                    <button className="reset-button" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StopWatch;