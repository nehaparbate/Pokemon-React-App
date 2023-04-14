import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokemon from '../Components/Pokemon';
import './HomePage.css';

export default function Homepage() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 20; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        //console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, [])
  return (
    <>

     <div class="header">
     <h1>The Poke-Web</h1>
     <p>Gotta Catch 'em All</p>
</div>
     {

        loading ? (<h1>Loading...</h1>):
        (
            pokemon.map(p => (
                <Pokemon key={p.data.name} pokemon = {p.data}/>
            ))

        )
     }
    </>
   
  )
}
