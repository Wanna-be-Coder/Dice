import React,{Component} from 'react';

class Dice extends Component {
    render(){
        let diceStyle= {color:"purple",fontSize:"300px"};
        let dice =  "fas fa-dice-"+this.props.num;
        return(

            <div>
                <i className={dice} style={diceStyle} ></i>
            </div>
       
        )
    }
}

export default Dice;
