import { Component } from 'react';


class Header extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      bodyState:0
    }
  };

  render(){
 
    var Body_state=this.props.Body_state;
    
    var Game_state;
    console.log(Body_state);
    if(this.props.Body_state===1){
      
      Game_state=
        <input type='button' value='재시작' onClick={function(e){
        e.preventDefault();
        this.props.onChangeMode(2);
        alert('게임 시작 버튼을 눌러주세요.');
        }.bind(this)}/>
       
    }else{
      Game_state=
        <input type='button' value='게임시작' onClick={function(e){
        e.preventDefault();
        this.props.onChangeMode(1);
        }.bind(this)}/>
    } 

    return (
      <div style={{float: 'right',right:'150px'}}>
        <table border='1'>  
            <tr>
            <input type='button' value='메인'onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode(0);
              }.bind(this)}/>
              
              {Game_state}
              
            </tr>
            
        </table>
      </div>
      );
  }
 
}

export default Header;
