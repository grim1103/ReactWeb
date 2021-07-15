import { Component } from 'react';


class MainBody extends Component {

  render(){


    return (
       
          <div>
            <h1>게임 방법</h1>

            <li >1. 게임 순서는 주사위를 굴려 제일 큰 수가 나오는 사람을 기준으로 시계방향으로 진행한다.</li>
            <li >2. 플레이어가 이동을 마친후 해당 위치의 버튼을 눌르며, 해당 지시대로 행동을 한다.</li>
            <li>3. 개인이 찾아야하 하는 보물 2개를 찾은 유저는 계단으로 이동하여 다음 단계를 진행한다.</li>
            <li>4. 옥상에 도착 하여 마지막 문제를 맞춘다 (문제는 랜덤으로 주어진다.)</li>
            <li>5. 최종 문제를 맞춘사람이 승리자가 되며 게임은 끝이나게 된다.</li>
            <li>6. 게임을 다시 진행하려면 재시작 버튼을 클릭한다.</li>
          </div>
          
       
      );
  }
 
}

export default MainBody;
