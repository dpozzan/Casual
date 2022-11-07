import React, {useState, useEffect} from 'react';
import Card from './Card'
import '../App.css';
import {Link} from 'react-router-dom';

function Home() {

    useEffect(() => {
        fetchData();
    }, []);

    const [allPokemons, setPokemons] = useState([]);

    const fetchData = async () => {
        const pokemonsArray = [];
        for(let i = 1; i < 152; i++){
            const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await rawData.json();
            pokemonsArray.push(data);
           
        }
        setPokemons(pokemonsArray);
    }

    

    return(
        <div className='Home'>
            {allPokemons.map((pokemon, index) => (
                <Link to={{link:`/${pokemon.name}`}}>
                    <Card key={index} pokemon={pokemon}  />
                </Link>
            ))}

        </div>
    )
}

export default Home;