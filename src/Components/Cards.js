import React from 'react'

function Cards ({pokemon,loading, infoPokemon}) {
  console.log(pokemon)
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
       
        </>
      )
}

export default Cards