import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./composants/Header"
import Liste from "./composants/Contact/Liste"
import ToDoList from "./composants/Todo/ToDoList"
import AddContact from "./composants/Contact/AddContact"
import Accueil from "./composants/Pages/Accueil"
import Erreur from './composants/Pages/Erreur'
import {Provider} from "./Context"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

  render(){

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Accueil} />
                <Route exact path="/AddContact" component={AddContact} />
                <Route exact path="/Liste" component={Liste} />
                <Route exact path="/TodoList" component={ToDoList} />
                <Route component={Erreur} />
            </Switch>  
          </div>
          </div>
        </Router>
      </Provider>

      );
    }  
}
 
export default App;

