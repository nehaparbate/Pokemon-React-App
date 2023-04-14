import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonPage.css'

export default function PokemonPage({match}) {

    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
       //console.log(details.data)
        setLoading(false);
     }

  
    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, []);

  return (
    <>
      {
        loading ? (<h1>Loading...</h1>):
        (
            <>
            <div className='container_page'>

            <div>
            <h2>{pokemonDetails.name}</h2>
            </div>

            <div className='row'>
                <div >
                <img  src={pokemonDetails.sprites.front_default} alt='Pokemon' ></img>
                </div>

                <div class>

              <h3 >Moves</h3>
              <div className="abilities-moves">
                        {
                           pokemonDetails.moves.slice(0, 3).map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.move.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>

             <h3 >Abilities</h3>
             <div className="abilities-moves">
                        {
                            pokemonDetails.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>

           <h3 >Weight: {pokemonDetails.weight} </h3>
           </div>

            </div>
            </div>               
            </>
           
        )
     }
     </>
  )
}
