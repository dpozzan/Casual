import React, {useState, useEffect} from 'react';
import Pokemon from './Cards/Pokemon';
import Overlay from './Overlay';
import classes from './Home.module.css';

function Home() {

    useEffect(() => {
        fetchData();
    }, []);

    const [allPokemons, setPokemons] = useState([]);
    const [isInvisible, setIsInvisible] = useState(true);
    const [colorCard, setColorCard] = useState('');

    const fetchData = async () => {
        const pokemonsArray = [];
        for(let i = 1; i < 152; i++){
            const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await rawData.json();
            pokemonsArray.push(data);
           
        }
        setPokemons(pokemonsArray);
    }

    const setVisible = (colorCard) => {
        setColorCard(colorCard);
        setIsInvisible(false);
    }

    const setInvisible = (e) => {
        setIsInvisible(true);
        e.stopPropagation();
    }

    

    return(
        <div className={classes.Home}>
            <div className={classes.bg} />

            <Overlay colorPokemon={colorCard}  className={isInvisible && classes.invisible} onClick={setInvisible}/>
            {allPokemons.map((pokemon) => (
                <Pokemon key={pokemon.name.toString()} pokemon={pokemon} onClick={setVisible}/>
              
            ))}

        </div>
    )
}

export default Home;