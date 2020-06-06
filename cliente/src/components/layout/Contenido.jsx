import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import Proyecto from '../proyectos/Proyecto';

const Contenido = () => {
    return ( 
        <>
                
        <Switch>
            <Route exact path="/proyectos" component={ListadoProyectos} />
            <Route exact path="/proyectos/crear-proyecto" component={NuevoProyecto} />
            <Route exact path="/proyectos/proyecto" component={Proyecto} />
        </Switch>
        </>
     );
}
 
export default Contenido;