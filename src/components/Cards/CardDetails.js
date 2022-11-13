import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import classes from './CardDetails.module.css';
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function CardDetails(props) {
    const params = useParams();
    const header = <div style={{backgroundColor: props.colorPokemon}} className={classes.header}></div>;
    const main = <div className={classes.main}>Hier gibt es einen Footer</div>
    useEffect(()=> {
        fetchData();
    }, [])

//    const [pokemon, setPokemon] = useState({});


   const fetchData = () => {
    // const id = params.id;
    // const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // const data = await rawData.json();
    // console.log(data)
   }


    return (
        <div  className={classes.CardDetails}>
            {/* <div className={classes.DialogCont}> */}
                <Card
                    style={{backgroundColor: props.colorPokemon}}
                    className={classes.DialogCard}
                    title="Advanced Card"
                    subTitle="Subtitle"
                    footer={main}
                    header={header}
                    key={params}
                >
                    
                </Card>
            {/* </div> */}

        </div>
    )
}

export default CardDetails;