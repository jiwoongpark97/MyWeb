import background from "../../images/background.jpg"
import about_me from '../../images/36709/ios-icons/png-192/files.png'
import contact from '../../images/36709/ios-icons/png-192/contact.png'
import music from '../../images/36709/ios-icons/png-192/music.png'
import work from '../../images/36709/ios-icons/png-192/work.png'
import photo from '../../images/36709/ios-icons/png-192/photo.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import insta from '../../images/insta.png'
import fb from '../../images/fb.png'
import React from 'react'
import cur from '../../cursor50.png'
import { NavLink } from "react-router-dom"
import ParticleBackground from "../components/particle"


function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      cursor: `url(${cur}), auto`
    }}>
      <ParticleBackground />
      <div style={{
        flex:14,
        }}>
        <div style={{
          flexDirection: 'row', 
          display: 'flex', 
          justifyContent: 'space-evenly',
          marginTop: 30
        }}>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
          <NavLink to="/about_me">
            <a href="">
              <img src={about_me} style={{width: '50%', height: '50%'}}></img>
            </a>
          </NavLink>
            <div>About me</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
            <a href = "https://github.com/EricPark1/Works" target="_blank">
              <img src={github} style={{width: '50%', height: '50%'}}></img>
            </a>
            <div>Github</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
            <a href = "https://www.linkedin.com/in/ji-woong-park/" target="_blank">
              <img src={linkedin} style={{width: '50%', height: '50%'}}></img>
            </a>
            <div>Linkedin</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
            <a href = "https://www.instagram.com/j1__w00ng/" target="_blank">
              <img src={insta} style={{width: '50%', height: '50%'}}></img>
            </a>
            <div>Instagram</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
            <a href = "https://www.facebook.com/jiwoongpark11/" target="_blank">
              <img src={fb} style={{width: '50%', height: '50%', borderRadius: 28}}></img>
            </a>
            <div>Facebook</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%',
          height: '10%'
        }}>
          <NavLink to="/works">
            <a href="">
            <img src={work} style={{width: '50%', height: '50%', borderRadius: 20}}></img>
            </a>
          </NavLink>
            <div>Works</div>
        </div>
        </div>
      </div>
      <div style={{flex:2, 
        backgroundColor: 'rgba(47, 79, 79, 0.6)',
        display: 'flex', 
        justifyContent: 'space-evenly',
        borderRadius: 50,
        marginBottom: '1%',
        marginLeft: '3%',
        marginRight: '3%'
        }}>
        <div style={{
            textAlign: 'center',
            width: '10%', 
            height: '10%',
            marginTop: '1%'
          }}>
          <NavLink to="/photos">
            <a href="">
              <img src={photo} style={{width: '5vw', height: '500%', marginTop: 10}}></img>
            </a>
          </NavLink>
          <div>Photos</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%', 
          height: '10%',
          marginTop: '1%'
        }}>
          <NavLink to="/contact">
            <a href="">
              <img src={contact} style={{width: '5vw', height: '500%', marginTop: 10}}></img>
            </a>
          </NavLink>
            <div>Contact</div>
        </div>
        <div style={{
          textAlign: 'center',
          width: '10%', 
          height: '10%',
          marginTop: '1%'
        }}>
          <NavLink to="/music">
            <a href="">
            <img src={music} style={{width: '5vw', height: '500%', marginTop: 10}}></img>
            </a>
          </NavLink>
            <div>Music</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
