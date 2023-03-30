import React from 'react'
import { useEffect, useState, } from 'react';
import { useNavigate } from "react-router-dom"
import Header from '../header'


function Home() {
  const [mousePos, setMousePos] = useState({});
  const navigate = useNavigate();
  const [y_1, setY1] = useState(0);
  const [y_2, setY2] = useState(0);
  const [y_3, setY3] = useState(0);
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [check4, setCheck4] = useState(true);
  const [hover, setHover] = useState(1);
  const [hover2, setHover2] = useState(1);
  const [hover3, setHover3] = useState(1);

  useEffect(() => {
    if(check){
      setY1(y_1 => y_1 + 10)
    }else{
      setY1(y_1 => y_1 - 10)
    }
  },[check])

  useEffect(() => {
    if(check2){
      setY2(y_2 => y_2 + 10)
    }else{
      setY2(y_2 => y_2 - 10)
    }
  },[check2])

  useEffect(() => {
    if(check3){
      setY3(y_3 => y_3 + 10)
    }else{
      setY3(y_3 => y_3 - 10)
    }
  },[check3])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCheck(check => !check)
    }, 600)
    const timer2 = window.setInterval(() => {
      setCheck2(check2 => !check2)
    }, 800)
    const timer3 = window.setInterval(() => {
      setCheck3(check3 => !check3)
    }, 1000)
    const timer4 = window.setInterval(() => {
      setCheck4(check4 => !check4)
    }, 900)
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
      window.clearInterval(timer)
      window.clearInterval(timer2)
      window.clearInterval(timer3)
      window.clearInterval(timer4)
    };
  }, []);

  return (
    <div style={{
      flex: 1, 
      width: "100vw", 
      height: "100vh", 
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: "column",
    }}>
      <Header />
      <div style={{
        flex: 2,
        justifyContent: 'space-around', 
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
      }}>
        <a href='/about_me'>
          <img 
          onMouseOut={()=> setHover(1)}
          onMouseOver={()=>setHover(1.3)}
          style={{
            marginBottom: "-10%",
            width: '20%', 
            minWidth: 260, 
            maxWidth: 350,
            position: 'absolute',
            left: "10%",
            top: "50%",
            transform: `translate(${mousePos.x * 0.02}px,${y_1 + mousePos.y* 0.02}px) scale(${hover},${hover})`, 
          }} src={require('../../images/who.png')}/>
        </a>
        <a href='/works'>
          <img 
          onMouseOut={()=> setHover2(1)}
          onMouseOver={()=>setHover2(1.3)}
          style={{
            width: '25%', 
            minWidth: 300, 
            maxWidth: 350,
            position: 'absolute',
            left: "35%",
            top: "20%",
            transform: `translate(${mousePos.x * 0.01}px,${y_2 + mousePos.y* 0.01}px) scale(${hover2},${hover2})`
          }} src={require('../../images/work.png')}/>
        </a>
        <a href='/contact'>
          <img 
          onMouseOut={()=> setHover3(1)}
          onMouseOver={()=>setHover3(1.3)}
          style={{
            marginBottom: "-10%",
            width: '30%', 
            minWidth: 300, 
            maxWidth: 350,
            position: 'absolute',
            left: "70%",
            top: "40%",
            transform: `translate(${mousePos.x * 0.03}px,${y_3 + mousePos.y* 0.03}px) scale(${hover3},${hover3})`
          }} src={require('../../images/contact.png')}/>
        </a>
      </div>
      <div style={{flex: 1, alignSelf: 'center', width: '20%', }}>
        {
          check4 ? 
          <img style={{
             width: '70%',
             minWidth: 300
          }} src={require('../../images/jiwoong.png')} />
          :
          <img style={{
            width: '70%',
            minWidth: 300,
            
         }} src={require('../../images/jiwoong2.png')} />
        }
      </div>
      
      {/* <div style={{
        backgroundImage: `url(${Third})`,
        flex: 1,
        backgroundColor: `rgba(255,255,255,0.1)`
      }}>Hello</div> */}
    </div>
  );
}

export default Home;
