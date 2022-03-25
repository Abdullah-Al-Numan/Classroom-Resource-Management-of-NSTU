import React from 'react';
import Solverpost from '../../component/screens/solvercreatepost';
import Solverhom from '../../component/screens/solverhome';

function Noticecard() {

  const [load,setLoad] = React.useState(true);

  const handle =()=>{
    setLoad(!load)
    console.log(load);
  }
  return (<div>

<Solverpost handle={handle} />
{ load && <Solverhom />  }
  </div>)
}

export default Noticecard;

