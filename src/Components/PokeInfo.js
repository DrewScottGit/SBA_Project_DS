import React from 'react'

const PokeInfo = ({data}) => {
  // fetch('https://pokeapi.co/api/v2/pokemon/geodude')

// console.log(data)
  return (
    <>
      {
        (!data)?"":(
          <>
          <h1>{data.name}</h1>
      <img className="smallImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
      {/* <div className='abilites'>
        <div className = "group" >
          <h2>Rock-head</h2>
        </div>
        <div className = "group" >
          <h2>studry</h2>
        </div>
        <div className = "group" >
          <h2>Sand-veil</h2>
        </div>
      </div>
      <div className='base-stat'>
        <h3>Hp: 80</h3>
        <h3>attack: 80</h3>
        <h3>defense: 100</h3>
        <h3>special-attack: 30</h3>
        <h3>special-defense: 30</h3>
        <h3>speed:: 20</h3>
      </div> */}
      </>
        )
      }
    </>
  )
}

export default PokeInfo