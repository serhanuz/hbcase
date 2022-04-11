import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from '../components/Nav'
import NotFound from '../components/NotFound'
import ListContainer from './ListContainer'
import AddLinkContainer from './AddLinkContainer'

class App extends Component {  
  render() {
    return (
      <Router>
      	<Fragment>
          <LoadingBar className='loading-bar' />
          <div className='nav-container'>
            <Nav />
            <hr className='hr-line-color' />
          </div>
          <div className='container'>
            <Switch>
              <Route path='/' exact component={ListContainer} />
              <Route path='/add' exact component={AddLinkContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
      	</Fragment>
      </Router>
    );
  }
}

export default App;