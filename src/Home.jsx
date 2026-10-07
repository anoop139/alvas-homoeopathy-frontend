import React, { useState } from 'react'
import ahmcImage from './Images/Logo.jpg'
import backgroundImage from './Images/Backgrond.png'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <div
      id="home"
      style={{
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
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
            width: '100%',
            padding: '0 16px',
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
        </nav>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0',
          backgroundColor: 'blue',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            style={{
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
              backgroundColor: 'blue',
              boxSizing: 'border-box',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'grid',
                gap: '5px',
                padding: '8px',
              }}
            >
              <span style={{ width: '26px', height: '3px', backgroundColor: '#fff' }} />
              <span style={{ width: '26px', height: '3px', backgroundColor: '#fff' }} />
              <span style={{ width: '26px', height: '3px', backgroundColor: '#fff' }} />
            </span>
          </button>
          {isMenuOpen && (
            <div
              style={{
                display: 'flex',
                color: 'blue',
                backgroundColor: '#fff',
              }}
            >
              <a className="menu-link" href="#home">
                Home
              </a>
              <details
                className="about-menu"
                open={isAboutOpen}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <summary
                  className="menu-link"
                  onClick={(event) => {
                    event.preventDefault()
                    setIsAboutOpen((open) => !open)
                  }}
                >
                  About
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      marginLeft: '6px',
                      marginBottom: '3px',
                      borderRight: '1.5px solid currentColor',
                      borderBottom: '1.5px solid currentColor',
                      transform: 'rotate(45deg)',
                    }}
                  />
                </summary>
                <div className="about-submenu">
                  <a className="menu-link" href="#about-college">
                    About College
                  </a>
                </div>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
