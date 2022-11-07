import React, {useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import "primereact/resources/themes/vela-orange/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function Navbar() {
    const [value2, setValue2] = useState('');

    return(
        <div className='Navbar'>
            <Link to='/'>
                <img className='Logo' src={require('../assets/imgs/logo.png')} />
                <span className="p-float-label p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <label htmlFor="lefticon">Search pokemon</label>
                </span>
            </Link>
        </div>
    )
}

export default Navbar;