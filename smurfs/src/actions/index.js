import axios from 'axios'

export const FETCH_SMURF = 'FETCH_SMURF'
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS'
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE'

export const fetchSmurf = () => dispatch => {

    dispatch({ type: FETCH_SMURF })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log('55555555', res.data)

            dispatch({
                type: FETCHING_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('errorrr', err.response)
            dispatch({
                type: FETCHING_SMURF_FAILURE,
                payload: err.response
            })

        })
}