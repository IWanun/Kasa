import React from 'react'
import"./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src="LogoBlack.png" alt="logo" width="100px" />
        </div>
        <div className='footer_text'>© 2020 Kasa. All right reserved</div>
    </div>
  )
}

export default Footer