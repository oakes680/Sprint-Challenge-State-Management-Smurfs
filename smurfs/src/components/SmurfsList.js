import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSmurf } from '../actions'
import axios from 'axios'


const SmurfsList = () => {
    const state = useSelector(state => state)
    console.log('this is state', state)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSmurf())
    }, [dispatch])

    const handleSubmit = (e) => {
       
        axios.post('http://localhost:3333/smurfs/', { name: name, age: age, height: height })
            .then(res => {
                console.log('posssst', res)
            })
            .catch(err => console.log(err.res))
            setName('')
            setAge('')
            setHeight('')
            
            dispatch(fetchSmurf())
    }



    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='name'
                    onChange={handleNameChange}
                    required
                    value={name}
                />
                <input
                    type="number"
                    name='age'
                    placeholder='age'
                    onChange={handleAgeChange}
                    required
                    value={age}
                />
                <input
                    type="number"
                    name='height'
                    placeholder='height'
                    onChange={handleHeightChange}
                    required
                    value={height}
                />
                <button type='submit'>Add a new Smurf</button>

            </form>
        </div>
    )
}

export default SmurfsList
