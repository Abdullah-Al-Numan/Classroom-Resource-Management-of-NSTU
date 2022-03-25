import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav'
import Engineering from './components/engineering'
import Institute from './components/institute'
import Science from './components/science'
import Social from './components/social'
import Business from './components/business'
import Education from './components/education'
import Law from './components/law'
import Deptnames from './components/deptnames'
import Department from './components/department'
import React, {useState, useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './component/screens/Home';
import Signin from './component/screens/Signin';
import Profile from './component/screens/Profile';
import Signup from './component/screens/Signup';
import UserProfile from './component/screens/UserProfile';
import Reset from './component/screens/Reset';
import Newpassword from './component/screens/Newpassword';
import Post from './component/screens/Post';
import { reducer, initialState } from './reducers/userReducer';
import Routes from "./route"
//schedule
import AddUser from './components/schedule/adduser';
import EditUser from './components/schedule/edituser';
export const UserContext = createContext();


const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
      dispatch({type:"USER", payload: user});
    }
    else {
      if(!history.location.pathname.startsWith('/reset')) 
        history.push('/signin');
    }
  }, []);

  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:userid" exact component={UserProfile} />
      <Route path="/reset" exact component={Reset} />
      <Route path="/reset/:token" exact component={Newpassword} />
      <Route path="/post/:postid" exact component={Post} />
      <Route>
        <Routes />
       </Route>
    </Switch>
  );
};

  


function App() {
const [eng,setEng] = useState([ "Computer Science and Telecommunication Engineering",
"Applied Chemistry and Chemical Engineering",
"Information and Communication Engineering",
"Electrical and Electronic Engineering"])

const [institute, setInstitute] = useState([  "Software Engineering",
  "information sciences and library management"])
  const [science , setScience] = useState(
    [ "Fisheries and Marine Science",
    "Pharmacy",
    "Microbiology",
    "applied mathematics",
    'Food Technology and Nutrition Science',
    "Environmental Science and Disaster Management",
    "Biotechnology and Genetic Engineering",
    "Agriculture",
    "Statistics",
    "Oceanography",
    "biochemistry and molecular biology",
    "Zoology"
   ])
   const [social,setSocial] = useState([
    "English",
    "Economics",
    "bangladesh and liberation war studies",
    "Sociology",
    "Bangla",
    "social work",
   ])
   const [business, setBusiness] = useState([
     "Business Administration",
     'Tourism and Hospitality Management',
     'Management Information Systems',
   ])
   const [education, setEducation] = useState([
     'Education',
     'educational administration'
   ])
   const [law,setLaw] = useState(["Department of Law"])
   const [deptnames,setDeptnames] = useState({eng,science,business,social,education,law,institute})
   const alldep = [...eng,...science,...business,...social,...education,...law,...institute];


   const [state, dispatch] = useReducer(reducer, initialState);
   


  return (

    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Route>
        <Routing />
      </Route>
       
      <Switch>
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path = '/'>
        <Nav />
        <Department/>
        <Deptnames eng={eng} science={science} business={business} social = {social} education = {education} law={law} institute={institute} />  
        </Route>
        <Route path = '/engineering'>
        <Nav />
        <Department/>
        <Engineering eng = {eng} />
        </Route>
        <Route path = '/institute'>
        <Nav />
        <Department/>
        <Institute institute = {institute} />
        </Route>
        <Route path = '/science'>
        <Nav />
        <Department/>
        <Science science = {science} />
        </Route>
        <Route path = '/social'>
        <Nav />
        <Department/>
        <Social social = {social} />
        </Route>
        <Route path = '/business'>
        <Nav />
        <Department/>
        <Business business = {business} />
        </Route>
        <Route path = '/education'>
        <Nav />
        <Department/>
        <Education education = {education} />
        </Route>
        <Route path = '/law'>
        <Nav />
        <Department/>
        <Law law = {law} />
        </Route>
        </Switch>
     </Router> 
     </UserContext.Provider>
    </div>
  )
};

export default App;
