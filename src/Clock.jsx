import React,{Component} from 'react';
import './app.css';

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
        // console.log('this.prop',this.props);

    }
    leadingzero(num){
        return num < 10 ? '0' +num : num;
    }
    componentWillMount(){
            this.timeLeft(this.props.deadLine);
    }
    componentDidMount(){
        setInterval(()=>this.timeLeft(this.props.deadLine),1000);
    }
    timeLeft(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({days,minutes,hours,seconds})
    }
    render(){



        return(

            <div>
            <div className="clock-days">{this.leadingzero(this.state.days)} days</div>
            <div className="clock-hours">{this.leadingzero(this.state.hours)} hours</div>
            <div className="clock-mins">{this.leadingzero(this.state.minutes)} minutes</div>
            <div className="clock-secs">{this.leadingzero(this.state.seconds)} seconds </div>
            </div>

        )
    }
}
export default Clock;