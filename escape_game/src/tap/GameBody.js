import { Component } from 'react';
import Img from '../img/game_main.jpg'
import Unit from '../img/Unit_001.png'

class GameBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            dise:0
        }
      };

    render(){
    
    const diseCss = {
      width:'143px',
      height:'150px',
      position : 'absolute',
      top:'637px',
      right:'155px',
      backgroundColor:'red',
      color:'yellow'
    }
    const nomCss ={
      width:'137px',
      height:'75px',
      position : 'absolute',
      top:'561px',
      right:'155px',
      textAlign: 'center',
      backgroundColor:'green',
      color:'yellow'
    }
    const unitCss ={
      width:'30px',
      height:'50px',
      position : 'absolute',
      top:'700px',
      left:'155px',
    
    }
    const unitCss1 ={
      width:'30px',
      height:'50px',
      position : 'absolute',
      top:'700px',
      left:'170px',
    
    }
    const unitCss2 ={
      width:'30px',
      height:'50px',
      position : 'absolute',
      top:'700px',
      left:'180px',
    
    }
    const unitCss3 ={
      width:'30px',
      height:'50px',
      position : 'absolute',
      top:'700px',
      left:'190px',
    
    }
    

    return (
      <div>
        <img src={Img} alt="profile" />
        <img src={Unit} alt="profile"  style={unitCss} />
        <img src={Unit} alt="profile"  style={unitCss1}/>
        <img src={Unit} alt="profile"  style={unitCss2}/>
        <img src={Unit} alt="profile"  style={unitCss3}/>
        <input type='text' readOnly value={this.state.dise}
        style={nomCss}
        />
        <input type='button' value='주사위 굴리기' 
            style={diseCss}
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
