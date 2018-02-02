import React,{Component} from 'react';
import './app.css';
import Clock from './Clock';
import {Form,FormControl,Button} from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            deadLine : 'December 12, 2018',
            newDeadline : ''
        }

    }
    changeDeadline(){
        this.setState({deadLine:this.state.newDeadline});
    }
    render(){

        return ( 
        <div className="wrapper">
            <div className="title">CountDown to {this.state.deadLine}</div>
                <Clock deadLine={this.state.deadLine}/>
                <Form inline>
                <FormControl onChange={event=>this.setState({newDeadline:event.target.value})} type="text" placeholder="New Date"/>
                <Button onClick={() => this.changeDeadline() }> Submit </Button>
            </Form>
        </div>
        
            
    )   
    }
}

export default App;