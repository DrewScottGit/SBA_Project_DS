import React from 'react'

function Cards ({pokemon,loading, infoPokemon}) {
  
    return (
      <>
        {
        loading ? <h1>Loading...</h1>:
        pokemon.map((item) => {
          return (
            <div className='pokeCard' key={item.id} onClick={()=>infoPokemon(item)}>
              <h1 className='cardText'>{item.id}</h1>
              <img className ='pokeIMG' src={item.sprites.front_default} alt='' />
              <h2 className='cardText'>{item.name}</h2>
            </div>
          )
        })
      }
        {/* <div className='pokeCard' >
        //    <h1 className='cardText'>1.</h1>
        //    <img className ='pokeIMG' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg' alt='' />
        //    <h2 className='cardText'>Geodude</h2>
        // </div>
        // </button> */}
        </>
      )
}

export default Cards