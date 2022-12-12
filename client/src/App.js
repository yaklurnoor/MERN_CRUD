import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Edit from './components/Edit';



function App() {
  return (
  
   
<>

          <Router>                       
                      
                      <Switch> 
                        <Route exact path = "/"   component = {Home}></Route>
                        <Route exact path = "/register"  component = {Register}></Route>    
                        <Route exact path = "/edit"  component = {Edit}></Route>                                               
                      </Switch>
            </Router>

 

                    
   </>               
                        
      
   
  );
}
export default App;
