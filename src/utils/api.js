const STORAGE_KEY = 'LINK_VOTE_APP'

export function _getLinkList () {

    // LocalStorage'dan datalari ceken bir Promise yaratiliyor
    return new Promise((res,rej) => {
      let linkList = localStorage.getItem(STORAGE_KEY)

      if (linkList === null || linkList === 'undefined') {
        linkList = []
      } 
      else {
        linkList = JSON.parse(linkList)
      }

      res(linkList)
    })
}

// LocalStorage'a datalari set eden bir Promise yaratiliyor
export function _setLinkList (linkList) {

  return new Promise((res, rej) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(linkList))
    res(linkList)
  })
}