import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SmurfCard from './SmurfCard'

const Smurf = () => {

    const state = useSelector(state => state)
    // console.log('smurftastic',state.smurfs)
    
    return (
        <div className='border2'>
            {state.smurfs.map(item => {
                return <SmurfCard className='border2' age={item.age} name={item.name} height={item.height} ids={item.id}/>
            })}
        </div>
    )
}

export default Smurf
