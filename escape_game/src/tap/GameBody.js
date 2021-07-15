import { Component } from 'react';
import Img from '../img/game_main.jpg'

class GameBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            dise:0
        }
      };

    render(){
         
    return (
      <div>
        <img src={Img} alt="profile" />

        <input type='text' readOnly value={this.state.dise}/>
        <input type='button' value='주사위 굴리기' 
            
            onClick={function (e) {
                e.preventDefault();
                  var randomNo = Math.floor(6 * Math.random()) + 1;
                  this.setState({
                    dise:randomNo
                  }
                  );
                 
                }.bind(this)
            }
            
            />
      </div>
      );
  }
 
}

export default GameBody;
