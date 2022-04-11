import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAddLink } from '../actions/shared'
import { Toast } from '../components/Toast'

class AddLinkContainer extends Component {  
    state = {
    	linkName: '',
        linkURL: '',
    }

    handleChangeLinkName = (e) => {
    	const linkName = e.target.value
      
      	this.setState({
        	linkName
        })
    }

	handleChangeLinkURL = (e) => {
    	const linkURL = e.target.value
      
      	this.setState({
        	linkURL
        })
    }

    handleAdd = (e) => {
    	e.preventDefault();
      
      	const { linkName, linkURL } = this.state
		const { dispatch, links } = this.props

		// Url validation
		const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(linkURL)
		
		// Duplicate validation
		const isDuplicate = Object.values(links).findIndex(link => link.url === linkURL)

		if (!valid) {
        	Toast('Name is not valid.', 'error');
		}
		else if (isDuplicate !== -1) {
			Toast('Given URL already exists', 'error');
		}
		else {
			try {
				dispatch(handleAddLink(linkName, linkURL))

				// Link basariyla eklenirse Toast ile basarili mesaji gosterilir
				Toast(`${linkName} added.`, 'success')
		
				this.setState({
					linkName: '',
					linkURL: ''
				})
		  
				setTimeout(() => {
				  // Yeni link eklendikten sonra kullanici anasayfaya yonlendirilir
				  this.props.history.push('/');
				}, 1000);

			} catch (e) {
				// Api'dan gelen hata toast ile error olarak ekranda gosterilir
				Toast(`Oops, ${linkName} could not add`, 'error')
			}
		}	
    }

    render () {
        const { linkName, linkURL } = this.state

        return (
            <div className='main-container'>
				<div className='row'>
					<Link to='/' className='ft-left'>
						<i className='fs-20 fa fa-long-arrow-left' />
						<span className='btn-back'>Return to List</span>
					</Link>
				</div>

				<div className='row'>
					<div className='ft-left add-new-header'>
					<h1>Add New Link</h1>
					</div>
				</div>
              
			  	<div className='row'>
					<span className='row add-new-label'>
						Link Name:
					</span>
					<input 
						placeholder='e.g. Alphabet'
						className='row btnInput'
						onChange={this.handleChangeLinkName}
						text={linkName}
					/>
					<span className='row add-new-label'>
						Link URL:
					</span>
					<input 
						placeholder='e.g. http://abc.xyz'
						className='row btnInput'
						onChange={this.handleChangeLinkURL}
						text={linkURL}
					/>
				</div>
				<div className='row'>
					<button
						type='submit'
						disabled={linkName === '' || linkURL === ''}
						onClick={this.handleAdd}
						className='btn-default'
					>
						ADD
					</button>
				</div>
            </div>
        )
    }
}

function mapStateToProps ({ links }) {
	return {
		links,
	}
}

export default connect(mapStateToProps)(AddLinkContainer)
