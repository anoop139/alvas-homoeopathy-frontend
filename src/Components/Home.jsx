import React, { useState } from 'react'
import ahmcImage from '../Images/Logo.jpg'
import foundationLogo from '../Images/AlvasEducation.jpg'
import backgroundImage from '../Images/Backgrond.png'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <div
      id="home"
      style={{
        width: '100vw',
        // height: '4px',
        marginLeft: '50%',
        // marginBottom: '40%',
        transform: 'translateX(-50%)',
        boxSizing: 'border-box',
        backgroundColor: 'lightblue',
      }}
    >

      <div
        className="navigation-menu"
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
            alignItems: 'stretch',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 16px',
            boxSizing: 'border-box',
            gap: '16px',
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
            }}
          />

          <div
            style={{
              width: '310px',
              maxWidth: '50vw',
              marginLeft: 'auto',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={foundationLogo}
              alt="Alva's Education Foundation"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </nav>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0',
          //backgroundColor: 'AccentColor',
          boxSizing: 'border-box',
          width: '100%',
          height:'50%'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 1,
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
              background: 'none',
              boxSizing: 'border-box',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'relative',
                display: 'block',
                width: '42px',
                height: '42px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#000',
                  left: '8px',
                  top: '20px',
                  transform: isMenuOpen ? 'rotate(-45deg)' : 'translateY(-8px)',
                  transformOrigin: 'center',
                  transition: 'transform 200ms ease',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#000',
                  left: '8px',
                  top: '20px',
                  opacity: isMenuOpen ? 0 : 1,
                  transition: 'opacity 150ms ease',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#000',
                  left: '8px',
                  top: '20px',
                  transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(8px)',
                  transformOrigin: 'center',
                  transition: 'transform 200ms ease',
                }}
              />
            </span>
          </button>
          <div
            className={`hamburger-menu-panel${isMenuOpen ? ' is-open' : ''}`}
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              zIndex: 2,
              display: isMenuOpen ? 'flex' : 'none',
              flexDirection: 'row',
              alignItems: 'center',
              color: 'blue',
              backgroundColor: '#f3f8fc',
              flexWrap: 'wrap',
              gap: '16px',
              width: '100vw',
              boxSizing: 'border-box',
            }}
          >
            <div>
             <a className="menu-link menu-link--home" href="#home" style={{ display: 'block', color: '#0d47a1', border: '1px solid black', padding: '8px', textDecoration: 'none' }}>
                Home
              </a>
            </div>

              <details
                className="about-menu"
                open={isAboutOpen}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <summary
                  className="menu-link menu-link--about"
                  onClick={(event) => {
                    event.preventDefault()
                    setIsAboutOpen((open) => !open)
                  }}
                  style={{ display: 'block', width: '120px', boxSizing: 'border-box', color: '#0d47a1', border: '1px solid #0d47a1', padding: '8px', cursor: 'pointer' }}
                >
                  About us
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
                <a className="about-submenu menu-link menu-link--about-college" href="#about-college" style={{ display: 'block', width: '128px', minWidth: 0, boxSizing: 'border-box', left: 'auto', right: '-4px', whiteSpace: 'nowrap', backgroundColor: '#d6f0f5', color: '#0d47a1', border: '1px solid #0d47a1', padding: '8px', textDecoration: 'none' }}>
                  About College
                </a>
              </details>
              {/* <span>hello</span>/ */}
              <a className="menu-link menu-link--course" href="#course" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0d47a1', border: '1px solid #0d47a1', padding: '8px', textDecoration: 'none' }}>
                Course
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
              </a>
              <a className="menu-link menu-link--facilities" href="#facilities" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0d47a1', border: '1px solid #0d47a1', padding: '8px', textDecoration: 'none' }}>
                Facilities
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
              </a>
              <a className="menu-link menu-link--hospital" href="#hospital" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0d47a1', border: '1px solid #0d47a1', padding: '8px', textDecoration: 'none' }}>
                Hospital
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
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
