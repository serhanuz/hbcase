import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import links from './links'
import paging from './paging'

// Tüm reducer'lar reducers/index.js'in içerisinde toplanıyor. Apples dışında reducer olsaydı buraya eklenecekti.
export default combineReducers({
	links,
	paging,
	loadingBar: loadingBarReducer,
});