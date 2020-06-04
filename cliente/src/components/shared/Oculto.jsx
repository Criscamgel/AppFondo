import React from 'react';
import { withWidth, Typography, Hidden, Button } from '@material-ui/core';

const Oculto = (props) => {
    return ( 
        <>
            <Typography variant="h6">

                Ancho: {props.width}

            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="default">
                  xs
                </Button>
            </Hidden>

            <Hidden mdUp>
                <Button variant="contained" color="default">
                  md
                </Button>
            </Hidden>

            <Hidden only={['md', 'xs']}>
                <Button variant="contained" color="default">
                  lg
                </Button>
            </Hidden>
        </>
     );
}
 
export default withWidth()(Oculto);