import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import { ThemeProvider } from '@material-ui/core';
import tema from './temaMui';
import VistaInicio from './components/layout/VistaInicio';
import Pie from './components/shared/Pie';

function App() {
  return (
    <ThemeProvider theme={tema}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route path="/proyectos" component={VistaInicio} />          
        </Switch>
      </Router>
      <Pie />
    </ThemeProvider>
  );
}

export default App;
