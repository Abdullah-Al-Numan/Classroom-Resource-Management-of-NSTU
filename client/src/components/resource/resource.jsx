import React,{useState} from 'react';
import Resourcecreatepost from '../../component/screens/resourcecreatepost';
import Resourcehome from '../../component/screens/resourcehome';
function Resource() {
  const [load,setLoad] = React.useState(true);

  const handle =()=>{
    setLoad(!load)
    console.log(load);
  }
 
 return (<div>

<Resourcecreatepost handle={handle}/>
{load && <Resourcehome />}
  </div>)
}

export default Resource;




