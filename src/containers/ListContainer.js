import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { handleInitialData, handleOrderBy } from '../actions/shared'
import { changePage } from '../actions/paging'
import LinkItem from '../components/LinkItem'
import Paging from '../components/Paging'
import { Toast } from '../components/Toast'

class ListContainer extends Component {  
    state= {
        orderBy: 'lastAdded'
    }

    componentDidMount () {
        //localStorage.clear()
        const { dispatch } = this.props
        const { orderBy } = this.state

        try {
            // Sayfa ilk acildiginde lastAdded'a gore siralanir ve ilk sayfayi aktif edilir
            dispatch(handleInitialData())
                .then(() => { dispatch(handleOrderBy(orderBy)) })
                .then(() => { dispatch(changePage(1)) })
        } catch (e) {
            // Api'dan gelen hata toast ile error olarak ekranda gosterilir
            Toast('Oops, An error occured', 'error')
        }
    }

    handleChangeOrderBy = (e) => {
        const { dispatch } = this.props
        const orderByType = e.value

        try {
            // Dropdown'dan secilen siralama tipine gore link listesi tekrar siralanir
            dispatch(handleOrderBy(orderByType))

            this.setState({
                orderBy: orderByType
            })
        } catch (e) {
            // Api'dan gelen hata toast ile error olarak ekranda gosterilir
            Toast('Oops, An error occured', 'error')
        }
    }

    render () {
        const { links } = this.props
        const { orderBy } = this.state

        // Dropdown degerleri
        const options = [
            { value: 'mostVoted', label: 'Most Voted (Z→A)' },
            { value: 'lessVoted', label: 'Less Voted (A→Z)' },
        ]

        return (
            <div className='main-container'>
                <div>
                    <Link className="row submit-link" to="/add">
                        <div className='submit-box'>
                            <i className="fa fa-plus plus-text"></i>
                        </div>
                        <div className='submit-text'>
                            SUBMIT A LINK
                        </div>
                    </Link>
                </div>
                <hr className='hr-line' />
                <div className='row'>
                    <Select 
                        onChange={this.handleChangeOrderBy} 
                        options={options} 
                        placeholder='Order by'
                        className='order-by-select' 
                        theme={theme => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: '#999999',
                              primary: '#4d4d4d',
                            },
                          })}
                    />
                </div>
                <div className='row'>
                    <ul>
                        {/* Her link LinkItem componenti ile olusturulur */}
                        {Object.values(links).map(link => (
                            <li key={link.id}>
                                <LinkItem id={link.id} orderBy={orderBy} />
                            </li>
                        ))}
                    </ul>
                </div>
                
                {links.length > 0 ? 
                    <div className='row'>
                        <Paging />
                    </div> : 
                    <div className='no-items'>No Item(s) found here. Click "Submit a Link" to start.</div> 
                }
                
            </div>
        )
    }
}

function mapStateToProps ({ links, paging }) {
    // Mevcut sayfa icerisinde olmasi gereken liste elemanlari belirlenir
    const maxPageIndex = paging.activePage * 5

    return {
        links: Object.values(links).slice(maxPageIndex - 5, maxPageIndex)
    }
}

export default connect(mapStateToProps)(ListContainer)
