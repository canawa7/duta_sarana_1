import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import InvoicePage from './pages/invoice/invoicepage.component';
import BalancePage from './pages/balance/balance.component';

class App extends React.Component{

  render(){
    return (
      <div classname='app'>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/invoice' component={InvoicePage}/>
          <Route path='/balance' component={BalancePage}/>
        </Switch>
      </div>
    );  
  }
}

export default App;
