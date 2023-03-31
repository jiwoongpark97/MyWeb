import Background from "../../images/background.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../header";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { useRef, useState } from "react";
import "../../App.css";
import Modal from "react-modal";

function Works() {
  const [choice, setChoice] = useState(null);
  const [modal, setModal] = useState(false);

  const render = (data) => {
    var name = null;
    var category = null;
    var year = null;
    var team = null;
    var description = null;
    var language = null;
    var image = null;
    var position = null;
    var rows = null;

    if(data === "safe"){
      image = require("../../images/P1-1.jpeg")
      rows = (
        <div>
          <div>CATEGORY</div>
          <div>YEAR</div>
          <div>TEAM{'\u000A'}</div>
          <div>LANGUAGE</div>
          <div>POSITION</div>
        </div>
      )
      name = "Safe First Route (COVID-19)"
      category = "Contest"
      year = "\n2020"
      team = 'Eric Park \n Jisung Jang'
      language = "Kotlin \n Python"
      description = 
      "In 2020, I participated in the \"Big Contest\" held in Korea, which required contestants to develop creative software based on various data sets provided before and after the COVID-19 pandemic. My contribution to this competition involved analyzing the given data sets and assessing the vulnerability of COVID-19 in different regions. Subsequently, I developed an application that could track a user's current location and provide the safest route to their destination based on the vulnerability of the regions. The app's algorithm considers various modes of transportation, including buses and subways. Additionally, the application allows the user to balance their preference for time and cost with the vulnerability of their selected route."
      position = "Data analyst \n App developer"
    }else if(data === "dictionary"){
      image = require("../../images/dict.jpg")
      name = "Advanced Dictionary"
      category = "Self project"
      year = "2021"
      team = 'Eric Park'
      language = "React Native\nMongo DB"
      description = "During my time in the military, I created a mobile application to help my comrades who were struggling to read English books. Initially, the app was designed to function as a pdf viewer with a dictionary feature. However, I later expanded the functionality by making all the words in the pdf clickable. When a user clicks on a word, a pop-up box appears with its definition and example sentences. Furthermore, I added a database feature that tracks the words that users have searched and added those words to the app's test library. The app randomly tests users with words from the test library until they have passed the same word three times. To make the app accessible to more users, I used React Native to make it cross-platform. Finally, I utilized MySQL to manage all the app\'s data."
      position = "Full stack developer"
    }else if(data === "argus"){
      image = require("../../images/argus.gif")
      name = "Argus (Environmental activity monitoring app)"
      category = "Group project"
      year = "2022"
      team = 'Eric Park\nSahithi Tummala\nAdam Rutledge\nEugene Poh\nBhavik Sardar'
      language = "ReactJS\nPython\nMySQL"
      description = "It has become increasingly important to raise awareness regarding environmental issues. With the recent increase of climate change and global warming having an immense impact on our world today, many historical data, trends and research on environmental activities have become archaic, outdated and hard to use. Environmental trends are becoming more irregular and hard to understand and anticipate. Existing solutions, such as the global climate monitor and monitors from NOAA and Weather.com, have certain limitations that may make it hard for users to utilize their applications. Many environmental monitors existing today often only focus on only one environmental issue or activity. And these monitors have a user interface and front end that is not intuitive or user-friendly and have responsiveness issues.Because of this, we have decided to create Argus, an accurate all-in-one environmental monitoring app which is designed to be minimal, intuitive, and fast to use. With Argus, users will be informed of the climate activity and other environmental activities such as current and future value of temperatures, rising sea levels, and greenhouse gas emissions all in one place."
      position = "Full stack developer"
    }else{
      image = require("../../images/campus.png")
      name = "Campus Buddy (Scheduling app)"
      category = "Group project"
      year = "2023"
      team = 'Eric Park\nJoey Yu\nJuha Jeon\nChai Hyun Park\nLucy Cheng\nSpencer Shephard'
      language = "React Native\nFirebase"
      description = "Time management and teamwork are two of the fundamental skills that all college students must become proficient with, but they can often come into conflict. Packed course loads, study time, and group meetings can be difficult to manage on the fly, and that’s why our personal calendar application will allow easy schedule comparison between students, clubs, and the university. Our app will make time management a breeze and include gamifying features that will encourage users to make time for personal enrichment and share that progress with their friends. Campus Buddy is an app that allows users to easily customize and share their own calendars. These customizations are not only helpful visually for organization, but also gives users more control on who can see their calendars or events. While other calendar applications exist, Campus Buddy is unique in our gamification design which motivates users and further provides incentive for users to choose our app over others. Additionally, Campus Buddy contains other functionalities which are greatly useful for scheduling, as we can compare multiple schedules to find the best time slot that works for everyone."
      position = "Full stack developer"
    }

    return (
      <div style={{flex: 1, marginTop: '8%', marginBottom: '5%', textAlign: 'center'}}>
        <div style={{flex: 1,textAlign: 'start', display: 'flex', flexDirection: 'column',}}>
          <img src={image} style={{width: '40vw', height: '60vh', minWidth: 600, minHeight: 500, alignSelf: 'center', borderRadius: 30}}/>
          <div>
            <div style={{marginLeft: 20,marginTop: 10, fontFamily: 'Kanit-eb', fontSize: 30, }}>{name}</div>
            <hr style={{color: 'black', backgroundColor: 'black', height: 1, borderColor: 'black', marginLeft: 20, marginRight: 20}} />
            <div style={{flex: 1, marginLeft: 20, flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
              <div style={{flex: 1, textAlign: 'end',}}>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{alignSelf: 'start'}}>CATEGORY</div>
                  <div>{category}</div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{alignSelf: 'start'}}>YEAR</div>
                  <div>{year}</div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{alignSelf: 'start'}}>TEAM</div>
                  <text style={{whiteSpace: "pre-line"}}>{team}</text>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{alignSelf: 'start'}}>LANGUAGE</div>
                  <text style={{whiteSpace: "pre-line"}}>{language}</text>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{alignSelf: 'start'}}>POSITION</div>
                  <text style={{whiteSpace: "pre-line"}}>{position}</text>
                </div>
                
              </div>
              
              <div style={{marginLeft: 30, flex: 1}}>
                <div>{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const customStyles = {
    content: {
      width: 810,
      height: 500,
      top: '57%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',     
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: "#ffffff00"
    }
  };

  return (
    <div
      style={{
        flex: 1,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img style={{position: 'absolute', bottom: '8%', right: '50%', zIndex: 2}} src={require('../../images/tap.gif')} />
      <Modal closeTimeoutMS={500} isOpen={modal} contentLabel={choice} style={customStyles} onRequestClose={() => {
        setModal(false)
        setChoice(null)
      }}>
        <div>
          <a onClick={() => {
            setModal(false)
            setChoice(null)
          }}>
            <img style={{position: 'absolute', right: 10, top: 10}} width={60} height={60} src={require('../../images/x.png')}/>
          </a>
          {
            render(choice)
          }
        </div>
      </Modal>
      <Header />
      <img style={{
        position: 'absolute',
        width: 900,
        height: 600,
        transform: 'translate(-50%, -50%)',
        top: '58%',
        left: '50%',
      }}
        src={require('../../images/tv.png')}></img>
      <div
        style={{
          flex: 2,
          justifyContent: "space-around",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          width: 850,
        }}
      >
        <AwesomeSlider organicArrows={false} animation="cubeAnimation">
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <text style={{ fontFamily: "Lucky", fontSize: 60 }}>
                Safe first route
              </text>
              <text style={{ fontFamily: "Sparky", fontSize: 30 }}>
                (Mobile application)
              </text>
            </div>
            <a
              onClick={() => {
                setModal(true);
                setChoice("safe");
              }}
            >
              <img
                style={{
                  width: "20vw",
                  maxWidth: 200,
                  position: "absolute",
                  right: "5%",
                  bottom: "5%",
                }}
                src={require("../../images/view.png")}
              />
            </a>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <text style={{ fontFamily: "Lucky", fontSize: 60 }}>
                Advanced dictionary
              </text>
              <text style={{ fontFamily: "Sparky", fontSize: 30 }}>
                (Mobile application)
              </text>
            </div>
            <a
              onClick={() => {
                setModal(true);
                setChoice("dictionary");
              }}
            >
              <img
                style={{
                  width: "20vw",
                  maxWidth: 200,
                  position: "absolute",
                  right: "5%",
                  bottom: "5%",
                }}
                src={require("../../images/view.png")}
              />
            </a>
          </div>
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <text style={{ fontFamily: "Lucky", fontSize: 60 }}>
                Argus - all-in-one environment activity monitoring app
              </text>
              <text style={{ fontFamily: "Sparky", fontSize: 30 }}>
                (Website)
              </text>
            </div>
            <a
              onClick={() => {
                setModal(true);
                setChoice("argus");
              }}
            >
              <img
                style={{
                  width: "20vw",
                  maxWidth: 200,
                  position: "absolute",
                  right: "5%",
                  bottom: "5%",
                }}
                src={require("../../images/view.png")}
              />
            </a>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <text style={{ fontFamily: "Lucky", fontSize: 60 }}>
                Campus Buddy
              </text>
              <text style={{ fontFamily: "Sparky", fontSize: 30 }}>
                (Mobile application)
              </text>
            </div>
            <a
              onClick={() => {
                setModal(true);
                setChoice("campus");
              }}
            >
              <img
                style={{
                  width: "20vw",
                  maxWidth: 200,
                  position: "absolute",
                  right: "5%",
                  bottom: "5%",
                }}
                src={require("../../images/view.png")}
              />
            </a>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
}

export default Works;
