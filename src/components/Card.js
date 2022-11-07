import React, {useState, useEffect} from 'react';
import '../App.css';




function Card(props) {
    const matches = [
        {name: 'grass', color: '#49CDAE'},
        {name: 'fire', color: '#FC6C6D'},
        {name: 'water', color: '#76BEFE'},
        {name: 'bug', color: '#8C9EE1'},
        {name: 'normal', color: '#FB9CAE'},
        {name: 'poison', color: '#C1B4E8'},
        {name: 'electric', color: '#FFC310'},
        {name: 'ground', color: '#916538'},
        {name: 'fairy', color: '#E39BE5'},
        {name: 'psychic', color: '#4D3467'},
        {name: 'fighting', color: '#D6923D'},
        {name: 'ice', color: '#00B2EC'},
        {name: 'rock', color: '#B7B4AD'},
        {name: 'dragon', color: '#4D82A1'},
        
    ]

    const urlImg = props.pokemon.sprites.other.dream_world.front_default;
    const typsPok = props.pokemon.types;
    useEffect(() => {
        getType();
    }, [])
    const [colorCard, setColor] = useState('#49CDAE');
    const getType = () => {
        const typeImp = typsPok[0].type.name;
        matches.map(match => {
            if(match.name == typeImp){
                setColor(match.color)
            }
    })
    }

    const waffala = () => {
        alert('du hast waffala gewacht!')
    }

    return(
        <div onClick={waffala} style={{backgroundColor: colorCard}}  className='Card'>
            <div className='DescPok'>
                <h2>{props.pokemon.name}</h2>
                {typsPok.map((typ, index) => (
                    <p className='fakeBtn' key={index}>{typ.type.name}</p>
                ))}

            </div>
            <img className='PokemonImg' src={urlImg} alt="image of pokemon" />
           
            

        </div>
    )
}

export default Card;