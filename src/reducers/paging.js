import { CHANGE_PAGE } from '../actions/types'

// InitialState olarak 1. sayfa set edilir
const initialState = {
    activePage: 1,
}

export default function links (state=initialState, action) {
    
	switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            }
        default :
       	    return state
    }
}