import { ADD_LINK, FETCH_LINKS, UP_VOTE, DOWN_VOTE, SORT_LINKS, REMOVE_LINK } from '../actions/types'

export default function links (state=[], action) {
	switch (action.type) {
        case FETCH_LINKS:
            return {
                ...action.links,
            }
        case ADD_LINK:
            return {
                ...state,
                ...action.links,
            }
        case UP_VOTE:
            return {
                ...action.links,
            }
        case DOWN_VOTE:
            return {
                ...action.links,
            }
        case SORT_LINKS:
            return {
                ...action.links,
            }
        case REMOVE_LINK:
            return {
                ...action.links,
            }
        default :
       	    return state
    }
}