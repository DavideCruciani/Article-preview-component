import React from 'react'
import './Share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

function Share() {
  return (
    <div className='share-container'>
      <p>S H A R E</p>
      <FontAwesomeIcon icon={faFacebook} size='xl' color='white' className='media-icon'/>
      <FontAwesomeIcon icon={faTwitter}  size='xl' color='white' className='media-icon'/>
      <FontAwesomeIcon icon={faPinterest}  size='xl' color='white' className='media-icon'/>
    </div>
  )
}

export default Share