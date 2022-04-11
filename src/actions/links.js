import { ADD_LINK, FETCH_LINKS, UP_VOTE, DOWN_VOTE, SORT_LINKS, REMOVE_LINK } from './types'

export function fetchLinks (links) {
	return {
    	type: FETCH_LINKS,
        links,
    }
}

export function addLink (links) {
	return {
    	type: ADD_LINK,
        links,
    }
}

export function upVote (links) {
    return {
     	type: UP_VOTE,
         links,
     }
}

export function downVote (links) {
	return {
    	type: DOWN_VOTE,
        links,
    }
}

export function sortLinks (links) {
	return {
        type: SORT_LINKS,
        links,
    }
}

export function removeLink (links) {
	return {
        type: REMOVE_LINK,
        links,
    }
}