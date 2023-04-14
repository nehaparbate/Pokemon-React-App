import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

export default function Pokemon( {pokemon} ) {
    //console.log(pokemon);
  return (
    <>
<div class="container">
    <Link to={`/pokemon/${pokemon.id}`}>
    <button>View Details</button>
    </Link>
  <p><span>{pokemon.name}</span></p>
  <p>{`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}</p>
</div>
    </>
  )
}
