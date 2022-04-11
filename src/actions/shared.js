import { _setLinkList, _getLinkList } from '../utils/api'
import { addLink, fetchLinks, upVote, downVote, sortLinks, removeLink } from './links'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
	return (dispatch) => {

        // Uygulamada react-redux-loading package'i kullanildi, her istekten once loading bar gosterilip, response geldiginde loading bar gizlenir
        dispatch(showLoading())

        // Promise ile api'dan yani Local Storage'dan datalar fetch edilir
      	return _getLinkList()
      		.then((links) => {
            // Fetch edilen data store'a set edilir
        		dispatch(fetchLinks(links));
          })
          .then(() => dispatch(hideLoading()))
    }
}

export function handleAddLink (linkName, linkURL) {
    return (dispatch) => {

        // Yeni link objeci yaratilir
        const newLink = {
            id: new Date().getTime(),
            name: linkName,
            url: linkURL,
            points: 0,
            modifiedDate: new Date().getTime()
        }

        dispatch(showLoading())

        return _getLinkList()
          .then((linkList) => { 

            // Mevcut state'e yeni link objesi push edilir
            linkList.push(newLink)
            
            _setLinkList(linkList)
              .then((linkList) => { dispatch(addLink(linkList)) })
          })
          .then(() => dispatch(hideLoading()))
  }
}

export function handleUpVote (id) {
  return (dispatch) => {

      dispatch(showLoading())

      return _getLinkList()
          .then((linkList) => { 
            
            // State'teki link icerisinde ilgili id'ye ait link bulunur
            const foundIndex = linkList.findIndex(link => link.id === id)

            // Linke ait puan 1 arttilir ve degistirilme tarihi guncellenir
            linkList[foundIndex].points++
            linkList[foundIndex].modifiedDate = new Date().getTime()

            _setLinkList(linkList)
              .then((linkList) => { dispatch(upVote(linkList)) })
          })
          .then(() => dispatch(hideLoading()))
  }
}

export function handleDownVote (id) {
  return (dispatch) => {

      dispatch(showLoading())

      return _getLinkList()
          .then((linkList) => { 

            // State'teki link icerisinde ilgili id'ye ait link bulunur
            const foundIndex = linkList.findIndex(link => link.id === id)

            // Linke ait puan 1 arttilir ve degistirilme tarihi guncellenir
            linkList[foundIndex].points--
            linkList[foundIndex].modifiedDate = new Date().getTime()

            _setLinkList(linkList)
              .then((linkList) => { dispatch(downVote(linkList)) })
          })
          .then(() => dispatch(hideLoading()))
  }
}

export function handleOrderBy (orderByType) {
  return (dispatch) => {

      dispatch(showLoading())

      return _getLinkList()
          .then((linkList) => { 

            linkList.sort((a, b) => {

              // Eklendigi anki saat generate edilerek ID olarak eklendigi icin son eklenenden itibaren sort icin ID kullanildi
              if (orderByType === 'lastAdded') {
                return b.id - a.id
              } 
              // En cok puani olandan itibaren siralanan liste
              else if (orderByType === 'mostVoted') {
                return b.points - a.points
              } 
              // En az puani olandan itibaren siralanan liste
              else if (orderByType === 'lessVoted') {
                return a.points - b.points
              }
              else {
                return true
              }
            })

            // Siralanan liste ayni puana sahip olanlarin da, en son oylanan once olacak sekilde tekrar siralandi
            linkList.sort((a, b) => {
              // Puani ayni ise tekrar sirala
              if (a.points === b.points) {
                return b.modifiedDate - a.modifiedDate
              }
              else {
                return true
              }
            })

            _setLinkList(linkList)
              .then((linkList) => { dispatch(sortLinks(linkList)) })
          })
          .then(() => dispatch(hideLoading()))
  }
}

export function handleRemove (id) {
  return (dispatch) => {

      dispatch(showLoading())

      return _getLinkList()
          .then((linkList) => { 

            // Gelen ID'ye ait link haricindeki tum linkler cekilir
            linkList = linkList.filter(link => link.id !== id)

            _setLinkList(linkList)
              .then((linkList) => { dispatch(removeLink(linkList)) })
          }) 
          .then(() => dispatch(hideLoading()))
  }
}