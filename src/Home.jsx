import React from 'react'
import ahmcImage from './Images/Logo.jpg'
import backgroundImage from './Images/Backgrond.png'

function Home() {
  return (
    <div
      style={{
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        boxSizing: 'border-box',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '16px',
          padding: '0',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={ahmcImage}
          alt="Alva's Homoeopathic Medical College"
          style={{
            display: 'block',
            width: 'auto',
            maxWidth: '220px',
            height: 'auto',
            backgroundColor: 'transparent',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 12px',
            backgroundColor: 'lightblue',
            boxSizing: 'border-box',
            borderRadius: '6px',
          }}
        >
          <span
            style={{
              display: 'grid',
              gap: '5px',
              padding: '8px',
              backgroundColor: '#fff',
              borderRadius: '4px',
            }}
          >
            <span style={{ width: '26px', height: '3px', backgroundColor: '#075b9a' }} />
            <span style={{ width: '26px', height: '3px', backgroundColor: '#075b9a' }} />
            <span style={{ width: '26px', height: '3px', backgroundColor: '#075b9a' }} />
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Home
