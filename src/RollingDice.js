import React,{Component} from 'react';
import Dice from './Dice'
import './RollingDice.css'

class RollingDice extends Component {


    constructor(props){
        super(props);
        this.state={dice1:'one',dice2:'six',isRolling:false};
        this.roll = this.roll.bind(this);
    }
    roll() {
        const numbers = ['one','two','three','four','five','six'];
        let cdice1 = numbers[Math.floor(Math.random()*5)];
        let cdice2 = numbers[Math.floor(Math.random()*5)];     
        this.setState({dice1:cdice1,dice2:cdice2,isRolling:true});

        setTimeout(() => {
            this.setState({isRolling:false});
        }, 1000);


    }
 
   render(){




        let containerStyle= {display:"flex", justifyContent:"space-around"};

        return(
            <div>
            <div style={containerStyle}>
                <Dice num={this.state.dice1} rolling={this.state.isRolling} />
                <Dice num={this.state.dice2} rolling={this.state.isRolling} />
            </div>
            <button  className={this.state.isRolling ? 'rollButtonI':'rollButtonA'} onClick={this.roll} disabled={this.state.isRolling}>{ this.state.isRolling ? "Is Rolling":"Roll Dice"}</button>
            </div>
        )
    }
}

export default RollingDice;
