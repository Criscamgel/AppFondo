import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Tarea from './Tarea';

const tareas = [
    {     
      nombre: 'tarea 1',
      responsable: 'Lunes',  
      prioridad: 'Alta'
    },
    {     
      nombre: 'tarea 2',
      responsable: 'Martes',  
      prioridad: 'Media'
    },
    {     
      nombre: 'tarea 3',
      responsable: 'Miercoles',  
      prioridad: 'Baja'
    },
    {     
      nombre: 'tarea 4',
      responsable: 'Jueves',  
      prioridad: 'Alta'
    }
] 

const ListadoTareas = () => {
    return ( 
        <>
            {tareas.length === 0 
            ? (<Typography variant="h5" component="h2">
            Este proyacto no tiene tareas
            </Typography>) 
            : tareas.map((tarea, key) => (
                <Grid item xs={12}>
                    <Tarea  
                        tarea={tarea}
                    />
                </Grid>                      
                ))
            }
            
        </>
     );
}
 
export default ListadoTareas;