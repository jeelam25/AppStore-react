import React from 'react'
import './styles.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className='app-item'>
      <img src = {imageUrl} alt = {appName} className='app-image'/>
      <p className='app-name'>{appName}</p>
    </li>
  )
} 

export default AppItem
