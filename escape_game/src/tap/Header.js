import { Component } from 'react';


class Header extends Component {
  render(){
    
    return (
      <div>
        <table border='1'>  
            <tr>
            <input type='button' value='메인'onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode(0);
              }.bind(this)}/>

            <input type='button' value='게임시작' onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode(1);
              }.bind(this)}/>
            </tr>
        </table>
      </div>
      );
  }
 
}

export default Header;
