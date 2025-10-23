import React from 'react'
import './DescriptionBox.css'

export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quasi beatae pariatur voluptatem similique qui soluta quisquam labore reiciendis animi! Repudiandae at eaque deserunt quas a qui veniam quia sed!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure doloremque odio corrupti aut error quidem labore, quod voluptatem adipisci eligendi minus illum velit in nam provident autem voluptate excepturi iste?</p>
        </div>
    </div>
  )
}
