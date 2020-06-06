import React from 'react';

const Pie = () => {

    const anio = new Date().getFullYear();

    return ( 
        <>
            <footer className="pie">
                Todos los derechos reservados {anio}
            </footer>
        </>
     );
}
 
export default Pie;