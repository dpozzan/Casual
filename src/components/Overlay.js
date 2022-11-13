import React from 'react';
import CardDetails from '../components/Cards/CardDetails';
import classes from './Overlay.module.css';

const Overlay = (props) => {

    const closeDialogHandler = (e) => {
        props.onClick(e);
    }

    return(
        <div className={`${classes.overlay} ${props.className}`} >
            <CardDetails colorPokemon={props.colorPokemon}/>
            <div className={classes.between} onClick={closeDialogHandler}/>
        </div>
    )
}

export default Overlay;