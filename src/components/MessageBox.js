import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRemove } from '../actions/shared'
import { Toast } from './Toast'

class MessageBox extends Component {

    handleOK = (e) => {
        e.preventDefault()

        const { dispatch, link } = this.props

        try {
            // Gelen ID'ye ait link silinir
            dispatch(handleRemove(link.id))

            // Silme isleminde sonra toast ile basarili mesaji ekranda gosterilir
            Toast(`${link.name} removed.`, 'success')
        } catch (e) {
            // Api'dan gelen hata toast ile error olarak ekranda gosterilir
            Toast('Oops, An error occured', 'error')
        }
    }

    render () {
        const { link, onCancel } = this.props

        return (
            <div className='message-box'>
                <div className='message-box-header'>
                    Remove Link
                    <span className='message-box-X'
                        onClick={onCancel}>
                            X
                    </span>
                </div>
                <div className='row message-box-text'>
                    Do you want to remove: 
                </div>
                <div className='row message-box-value'>
                    {link.name}
                </div>
                <div className='message-box-buttons'>
                    <button
						type='submit'
						onClick={onCancel}
						className='btn-default btnCancel' >
						CANCEL
					</button>
                    <button
						type='submit'
						onClick={this.handleOK}
						className='btn-default btnOK' >
						OK
					</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ links }, { id }) {
    // Gelen ID'ye ait link cekilir
    const link = Object.values(links).filter(link => link.id === id)[0]

    return {
        link: link ? link : null
    }
}

export default connect(mapStateToProps)(MessageBox)