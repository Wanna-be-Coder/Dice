import React,{Component} from 'react';
import './Dice.css'

class Dice extends Component {
    render(){
        let diceStyle= {color:"purple",fontSize:"300px"};
        let dice =  "fas fa-dice-"+this.props.num;
        return(

            <div>
                <i className={`${dice} ${this.props.rolling ? 'rolling':''}`} style={diceStyle} ></i>
            </div>
       
        )
    }
}

export default Dice;
