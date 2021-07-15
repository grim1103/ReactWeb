import { Component } from 'react';
import Header from './tap/Header';
import GameBody from './tap/GameBody';
import MainBody from './tap/MainBody';
import Dice from './tap/Dice';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bodyState:0
    }
  };

  render(){
  
  var body_State=this.state.bodyState;
  var Body=null;

    if(body_State===0){
      Body=<MainBody></MainBody>
    }else if(body_State===1){
      Body=<GameBody></GameBody>
    }

    return (
      <div>
      <Header onChangeMode={
        function(_bodyState){
          this.setState({
          bodyState:_bodyState
        }
      );
    }.bind(this)
     }></Header><br/>
      {Body}<br/>
      <Dice></Dice>
      </div>
      );
  }
 
}

export default App;
