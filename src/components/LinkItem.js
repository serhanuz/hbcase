import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpVote, handleDownVote, handleOrderBy } from '../actions/shared'
import MessageBox from '../components/MessageBox'
import { Toast } from '../components/Toast'

class LinkItem extends Component {
    // Sil tusuna basildiginde MessageBox modalinin acilip acilmayacagini belirtmek icin onModal state'i kullanildi
    state= {
        onModal: false,
    }

    handleChangeUpVote = (e) => {
        e.preventDefault()

        const { dispatch, link, orderBy } = this.props

        try {
            // Linke Up Vote verilir, ardindan liste tekrar sort edilir
            dispatch(handleUpVote(link.id))
                .then(() => { dispatch(handleOrderBy(orderBy)) })
        } catch (e) {
            // Api'dan gelen hata toast ile error olarak ekranda gosterilir
            Toast('Oops, An error occured', 'error')
        }
    }

    handleChangeDownVote = (e) => {
        e.preventDefault()

        const { dispatch, link, orderBy } = this.props
        
        try {
            // Linke Down Vote verilir, ardindan liste tekrar sort edilir
            dispatch(handleDownVote(link.id))
                .then(() => { dispatch(handleOrderBy(orderBy)) })
        } catch (e) {
            // Api'dan gelen hata toast ile error olarak ekranda gosterilir
            Toast('Oops, An error occured', 'error')
        }
    }

    handleRemoveItem = (e) => {
        e.preventDefault()

        // Sil tusuna basildiginde Message Box modal'i acilir
        this.setState({
            onModal: true,
        })
    }

    handleCancel = (e) => {
        e.preventDefault()

        // Message Box componenti icinde, modal kapatilmak istenildiginde bu function cagilir ve onModal false olarak set edilir
        this.setState({
            onModal: false,
        })
    }

    render() {        
        const { link } = this.props
        const { onModal } = this.state

        return (
            <div className='row link-item-box'>

                {/* onModal state'i aktif ise ilgili linke ait Uyarı Modal'i acilir */}
                { onModal ? 
                    <MessageBox id={link.id} onCancel={this.handleCancel} />
                    : <div></div> 
                }
                
                <div className='submit-box points-box'>
                    <span className='row points-number-text'>{link.points}</span>
                    <span className='row point-text'>POINTS</span>
                </div>
                <div className='ft-left'>
                    <div className='circle'>
                        <div className='circle-child'
                            onClick={this.handleRemoveItem} >
                            <i className="fa fa-minus-circle remove-icon" />
                        </div>
                    </div>
                    <span className='row link-name'>{link.name}</span>
                    <span className='row link-url'>({link.url})</span>
                    <div className='row'>
                        <div className='btn-vote btn-up-vote'
                            onClick={this.handleChangeUpVote} >
                            <i className='fa fa-arrow-up mr-6' />
                            Up Vote
                        </div>
                        <div className='btn-vote btn-down-vote'
                            onClick={this.handleChangeDownVote} >
                            <i className='fa fa-arrow-down mr-6' />
                            Down Vote
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ links }, { id, orderBy }) {
    // Componente gelen id ile state'teki link listesinden ilgili link cekilir
    const link = Object.values(links).filter(link => link.id === id)[0]

    return {
        link: link ? link : null,
        orderBy,
    }
}

export default connect(mapStateToProps)(LinkItem)