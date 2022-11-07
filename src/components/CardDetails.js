import React, {useState, useEffect} from 'react';
import Home from './Home';
import { useParams } from 'react-router-dom';
import '../App.css';
import { Card } from 'primereact/card';
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function CardDetails() {
    const params = useParams();
    const header = <img alt="Card" src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'/>;
    const footer = <span>Hier gibt es einen Footer</span>
    useEffect(()=> {
        fetchData();
    }, [])

   const [pokemon, setPokemon] = useState({});


   const fetchData = async() => {
    const id = params.id;
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await rawData.json();
    console.log(data)
   }


    return (
        <div className='CardDetails'>
            <Home />
            <div className='DialogCont'>
            <Card 
                className='DialogCard'
                title="Advanced Card"
                subTitle="Subtitle"
                footer={footer}
                header={header}
            >
                Content
            </Card>
            </div>

        </div>
    )
}

export default CardDetails;