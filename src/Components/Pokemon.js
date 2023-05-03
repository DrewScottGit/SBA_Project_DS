import React from 'react'
import Cards from './Cards';
import PokeInfo from './PokeInfo';
import {useState, useEffect} from 'react';


const Pokemon = () => {
    
        const [pokeData, setPokeData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
        const [nextUral, setNextUrl] = useState();
        const [prevUrl, setPrevUrl] = useState();
        const [pokeDex, setPokeDex] = useState()


        const handleData = ()=>{
            const pokemonDataPoints = async()=> {
                setLoading(true);
                const res= await fetch(url);
                const data = await res.json();
                getPokemon(data.results)
                setLoading(false)
            }

            const getPokemon = async(res) => {
                res.map(async(item)=>{
                    const result = await fetch(item.url)
                    const data2 = await result.json();
                    setPokeData(state=>{
                        state=[...state,data2]
                        state.sort((a,b)=>a.id>b.id?1:-1)
                        return state;
                    })
                    
                })}
                pokemonDataPoints()
        }
        

        useEffect(()=>{
            handleData()
           
            console.log('')
        },[])
       
        return (

        <div className='pokeContainer'>
           {pokeData.length > 0?
           <div>
            <div className='left-side'>
        
                <Cards pokemon={pokeData} loading={loading} infoPokemon={poke =>setPokeDex(poke)}/>
            
            <div className='pageBtn'>
                <button className='pageBtn' src=''>Next</button>
                <button className='pageBtn' src=''>Previous</button>
            </div>
                 
            </div>
           
             <div className='right-side'>
                <PokeInfo data={pokeDex}/>
                
            </div>
            </div>:<div>No Data</div>
            }
        </div>
        )
}


export default Pokemon;