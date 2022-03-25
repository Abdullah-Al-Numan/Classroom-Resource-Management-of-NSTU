import React from 'react';
import CreatePost from '../../component/screens/CreatePost';
import Home from '../../component/screens/Home';

function Noticecard() {
  const [load,setLoad] = React.useState(true);

  const handle =()=>{
    setLoad(!load)
    console.log(load);
  }

  return (<div>

<CreatePost handle ={handle}/>
{load && <Home />}
  </div>)
}

export default Noticecard;



