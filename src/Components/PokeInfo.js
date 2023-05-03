import React from 'react'

const PokeInfo = ({data}) => {
  return (
    <>
      {
        (!data)?"":(
          <>
          <h1>{data.name}</h1>
      <img className="smallImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
      
      </>
        )
      }
    </>
  )
}

export default PokeInfo