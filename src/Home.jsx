import React from 'react'
import ahmcImage from './Images/AHMC (1).png'
import backgroundImage from './Images/Backgrond.png'

function Home() {
  return (
    <nav
      style={{
        position: 'relative',
        left: '50%',
        width: '100vw',
        transform: 'translateX(-50%)',
        minHeight: '20svh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <img
        src={ahmcImage}
        alt="Alva's Homoeopathic Medical College"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '1126px',
          margin: '0 auto',
          height: 'auto',
          backgroundColor: '#fff',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          backgroundColor: 'lightblue',
          boxSizing: 'border-box',
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
  )
}

export default Home
