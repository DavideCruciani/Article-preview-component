import React from 'react'
import { useState } from 'react'
import './Article.css'
import ArticleIMG from '../images/drawers.jpg'
import userPFP from '../images/avatar-michelle.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import Share from './Share'

function Article() {

  const [openShare, setOpenShare] = useState(false);

  return (
    <article className='article'>
      <div className='article-image-container'>
        <img src={ArticleIMG} alt="some drawers" className='article-image'/>
      </div>

      <div className='article-info-container'>

        <div>
          <h1>Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home</h1>
        </div>
        <div>
          <p className='description'>Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.</p>
        </div>

        <div className='user-section'>

          <div className='flex-group'>
            <img src={userPFP} alt="user" className='pfp'/>
            <div className='name-and-date'>
              <p>Michelle Appleton</p>
              <p>28 Jun 2020</p>
            </div>
          </div>

          <div className='media-container'>
            {openShare && <Share />}
            <div className={openShare ? 'icon-container icon-container-active' : 'icon-container'} onClick={() => {
              setOpenShare(!openShare)
            }}>
              <FontAwesomeIcon icon={faShare} color={openShare ? 'white' : 'var(--Desaturated-Dark-Blue)'} />
            </div>
          </div>
        </div>

      </div>

    </article>
  )
}

export default Article