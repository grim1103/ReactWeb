import { Component } from 'react';
import Header from './tap/Header';
import GameBody from './tap/GameBody';
import MainBody from './tap/MainBody';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bodyState:0
    }
  };

  render(){

  const gameCss={
      float:'left',
      color:'green', 
      margin: '150px'
    }

  var body_State=this.state.bodyState;
  var Body=null;

    if(body_State===0){
      Body=<MainBody></MainBody>
    }else if(body_State===1){
      Body=<GameBody></GameBody>
    }

    return (
      <div>
        <div>
          <Header onChangeMode={
          function(_bodyState){
            this.setState({
            bodyState:_bodyState
              }
            );
          }.bind(this)} 
          Body_state={body_State}
          ></Header>
        </div>

        <div style= {gameCss}>
      
          {Body}

        </div>
    </div>
      );
  }
 
}

export default App;
