import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/header';



function Routes({alldep}) {
  return(
      <Switch>
           <Route exact  path='/Com,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Com,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/App,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Inf,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ele,Y-4,T-2'>
            <Header />
            </Route> 
            <Route exact  path='/Sof,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sof,Y-4,T-2'>
            <Header />
            </Route> 
            <Route exact  path='/inf,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/inf,Y-4,T-2'>
            <Header />
            </Route> 
            <Route exact  path='/Fis,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Fis,Y-4,T-2'>
            <Header />
            </Route> <Route exact  path='/Pha,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Pha,Y-4,T-2'>
            <Header />
            </Route> <Route exact  path='/Mic,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Mic,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/app,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Foo,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Env,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bio,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Agr,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Sta,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Oce,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/bio,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Zoo,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eng,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Eco,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/ban,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Soc,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Ban,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/soc,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Bus,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Tou,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Man,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Edu,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/edu,Y-4,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-1,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-1,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-2,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-2,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-3,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-3,T-2'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-4,T-1'>
            <Header />
            </Route>
            <Route exact  path='/Dep,Y-4,T-2'>
            <Header />
            </Route>
            
            
      </Switch>
  )
}

export default Routes;
