import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSmurf } from '../actions'
import axios from 'axios'

// const SmurfCard = ({age, name, height, ids}) => {
//     // console.log('what the hell is this', name)
//     return (
//         <div className='border'>
//             <p>{name}</p>
//             <p>{age}</p>
//             <p>{height}</p>
//             <p>{ids}</p>
//         </div>
//     )
// }

// export default SmurfCard




const SmurfCard = ({age, name, height, ids}) => {
    // console.log('what the hell is this', name)

    const state = useSelector(state => state)
    //  console.log('this is state', state)
    const [names, setNames] = useState('')
    console.log(names)
    const [ages, setAges] = useState('')
    const [heights, setHeights] = useState('')
    const [id, setID] = useState('')

    const dispatch = useDispatch()

   

    const handleSubmits = (e) => {
       
        
        console.log('this is id',id)
       
        axios.put(`http://localhost:3333/smurfs/${id}`, { name: names, age: ages, height: heights })
            .then(res => {
                console.log('puttttttttt', res)
            })
            .catch(err => console.log(err.res))
            setNames('')
            setAges('')
            setHeights('')
            
            
            dispatch(fetchSmurf())
    }



    const handleNameChanges = (e) => {
        setNames(e.target.value)
    }

    const handleAgeChanges = (e) => {
        setAges(e.target.value)
    }

    const handleHeightChanges = (e) => {
        setHeights(e.target.value)
    }


    return (
        <div className='border'>
            <p>{name}</p>
            <p>{age}</p>
            <p>{height}</p>

            <form className='form' onSubmit={handleSubmits}>
                <input
                    type="text"
                    name='names'
                    placeholder='names'
                    onChange={handleNameChanges}
                    required
                    value={names}
                />
                <input
                    type="number"
                    name='ages'
                    placeholder='ages'
                    onChange={handleAgeChanges}
                    required
                    value={ages}
                />
                <input
                    type="number"
                    name='heights'
                    placeholder='heights'
                    onChange={handleHeightChanges}
                    required
                    value={heights}
                />
                <button type='submit' onClick={()=>setID(ids)}>Change a Smurf</button>
                

            </form>
        </div>
    )
}

export default SmurfCard
