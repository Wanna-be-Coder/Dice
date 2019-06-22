import React,{Component} from 'react';
import Dice from './Dice'

class RollingDice extends Component {


    constructor(props){
        super(props);
        this.state={dice1:'one',dice2:'six'};
        this.roll = this.roll.bind(this);
    }
    roll() {
        const numbers = ['one','two','three','four','five','six'];
        let cdice1 = numbers[Math.floor(Math.random()*5)];
        let cdice2 = numbers[Math.floor(Math.random()*5)];     
        this.setState({dice1:cdice1,dice2:cdice2});


    }
 
   render(){




        let containerStyle= {display:"flex", justifyContent:"space-around"};
        let buttonStyle = {height:"100px",width:"200px",backgroundColor:"purple",color:"white",fontSize:"2rem",margin:"auto",display:"block"};

        return(
            <div>
            <div style={containerStyle}>
                <Dice num={this.state.dice1} />
                <Dice num={this.state.dice2} />
            </div>
            <button style={buttonStyle} onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollingDice;
