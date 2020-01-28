//////  REDUCER

import { FETCH_SMURF,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    smurfs: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }


        default: return state;
    }
}