import React, {useState} from 'react';
import classes from './Navbar.module.css';
import {InputText} from 'primereact/inputtext';
import "primereact/resources/themes/vela-orange/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function Navbar() {
    const [value2, setValue2] = useState('');

    return(
        <div className={classes.Navbar}>
         
            <img className={classes.Logo} src={require('../assets/imgs/logo.png')} />
            <span className="p-float-label p-input-icon-left">
                <i className="pi pi-search" />
                <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                <label htmlFor="lefticon">Search pokemon</label>
            </span>
           
        </div>
    )
}

export default Navbar;