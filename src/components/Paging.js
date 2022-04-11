import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/paging'

class Paging extends Component {

  handlePageChange (page) {
    const { dispatch, activePage } = this.props

    let selectedPage = activePage

    // Aktif sayfa numarasi state'den cekilir, Geri tusuna basilmissa azaltilir
    if (page === 'previous') {
        selectedPage--
    } 
    // Ileri tusuna basilmissa arttilir 
    else if (page === 'next') {
        selectedPage++
    } 
    // Veya direkt secili sayfa set edilir
    else {
        selectedPage = page
    }

    dispatch(changePage(selectedPage))
  }

  createPageItems (activePage, pageCount) {
    let pagingItems = []

    // Toplam sayfa sayisi kadar for doner ve ekrana sayfa numaralari bastirilir
    for (let i = 1; i <= pageCount; i++) {

        pagingItems.push(
        <li
            key={ `page-${i}` }
            className={ activePage === i ? 'paging-item paging-active' : 'paging-item mt-4' }
            onClick={() => this.handlePageChange(i)}>
          {i}
        </li>
      )
    }

    return pagingItems
  }

  render () {
    const { pageCount, activePage } = this.props

    return (
        <ul className='ul-paging'>
          <li
            // Sayfa aktif ile kare icerisinde gosterilir
            className={ activePage === 1 ? 'paging-item paging-prev mt-4 disabled' : 'paging-item paging-prev mt-4'}  
            onClick={() => this.handlePageChange('previous')}>
              <i className='fa fa-chevron-left' />
          </li>

          {/* Sayfa numaralari createPageItems methodu ile ekranda gosterilir */}
          { this.createPageItems(activePage, pageCount) }

          <li
            // Sayfa aktif ile kare icerisinde gosterilir
            className={ activePage === pageCount ? 'paging-item paging-next mt-4 disabled' : 'paging-item paging-next mt-4 mt-4'}  
            onClick={() => this.handlePageChange('next')}>
              <i className='fa fa-chevron-right' />
          </li>
        </ul>
    )
  }
}

function mapStateToProps ({ links, paging }) {
    // Toplam sayfa sayisi ile aktif sayfa numarasi props olarak componente eklenir

    return {
        pageCount: Math.ceil(Object.keys(links).length / 5),
        activePage: paging.activePage
    }
}

export default connect(mapStateToProps)(Paging)