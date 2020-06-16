import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { TodoPage } from './components/pages/TodoPage/TodoPage';
import { AboutPage } from './components/pages/AboutPage/AboutPage';

const App: React.FC = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={ TodoPage } path="/" exact/>
          <Route component={ AboutPage } path="/about"/>
        </Switch>
      </div>
    </BrowserRouter>
  </>;
}

export default App;
