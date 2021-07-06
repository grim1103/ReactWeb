import { Component } from 'react';
class Header extends Component {
  
    render(){
    
      var id=this.props.id;
      
      console.log('헤더');
      console.log("test ID===" + this.props.id);

      var logInOUt,inputId,inputInfome= null;

      if(id === null){
          logInOUt=  <input onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('logIn');
              }.bind(this)}
              type="button" value="로그인"/>
      }else{
        inputId=<label>{id}</label>
        logInOUt=      
        <input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('logOut');
                  }.bind(this)}
        type="button" value="로그아웃"
        />
        inputInfome= <input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('inFome');
          }.bind(this)}
          type="button" value="입력"/>
                }
      return(
      <div>
        <div>
          <input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('default');
            }.bind(this)}
            type="button" value="go Main"/>

        {inputId}&nbsp;&nbsp;
        {logInOUt}
        {inputInfome}

        </div>
      </div>
            
            );
            
    }
   
  }

  export default Header ;