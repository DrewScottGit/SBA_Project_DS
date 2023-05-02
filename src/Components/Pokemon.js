import React from 'react'
import Cards from './Cards';
import PokeInfo from './PokeInfo';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {
    
        const [pokeData, setPokeData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
        const [nextUral, setNextUrl] = useState();
        const [prevUrl, setPrevUrl] = useState();


        const pokemonDataPoints = async()=> {
            setLoading(true);
            const res= await fetch(url);
            const data = await res.json();
            // console.log(data.results)

            setNextUrl(data.next)
            setPrevUrl(data.previous)
            getPokemon(data.results)
            setLoading(false)
            // this is logging twice and compounding on every refresh
            // console.log(pokeData)
        }
        // const getPokemon = async(res) => {
            const getPokemon = async(res) => {
            res.map(async(item)=>{
                const result = await fetch(item.url)
                const data2 = await result.json();
                // console.log(data2)
                setPokeData(state=>{
                    state=[...state,data2]
                    state.sort((a,b)=>a.id>b.id?1:-1)
                    return state;
                })
                
            })}
                 

                // setPokeData(state=>{
                //     state=[...state,data2.results]
                //     return state;
                // })
        //     })
        // }

        useEffect(()=>{
            pokemonDataPoints();
        },[url])
       
        return (

        <div className='pokeContainer'>
           
            <div className='left-side'>
                <Cards pokemon={pokeData} loading={loading}/>
               

                <div className='pageBtn'>
                <button className='pageBtn' src=''>Next</button>
            <button className='pageBtn' src=''>Previous</button>
                 </div>
                 
            </div>
           
             <div className='right-side'>
                <PokeInfo />
                
            </div>

        </div>
        )
}


export default Pokemon;