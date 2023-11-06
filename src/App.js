import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { data } from './Components/EmpArray';
import UserComponent from './Components/UserComponents';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import { NoPage } from './Components/NoPage';
import { UserDetails } from './Components/UserDetails';
// import { Redirect } from 'react-router-dom';


function App() {

     const [user,setUser] = useState(data);

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path = '/'>
          <UserComponent
            user = {user}
            setUser={setUser}/>
          </Route>
          <Route path="/add/user">
            <AddUser
            user={user}
            setUser={setUser}/>
            </Route>

          <Route path="/user/:id">
            <UserDetails
            user={user}
            setUser={setUser}/>
            </Route>

          <Route path="/edit/:id">
             <EditUser user={user}
             setUser={setUser}/>
             </Route>

          {/* <Route path="/users">
           <Redirect path="/"/>
            </Route>   */}

          <Route path = "**">
           <NoPage/>
           </Route>

      </Routes>
     </Router>
     

    </div>
  );
}

export default App;
