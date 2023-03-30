import React, { useEffect, useState } from "react";

import {
  Animation,
  FadeOut,
  ZoomOut,
  MoveIn,
  Move,
  StickyIn,
  FadeIn,
  ZoomIn,
  MoveOut,
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  Fade,
  batch,
} from "react-scroll-motion";
import "../../App.css";
import Textspan from "./textspan";
import Header from "../header";
import background from "../../images/cloud.svg";
import pdf from '../../resume/Resume.pdf'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());
const Spin = (cycle) => ({
  in: {
    style: {
      // `p` is number (0~1)
      // When just before this page appear, `p` will be 0
      // When this page filled your screen, `p` will be 1
      transform: (p) => `rotate(${p * 360 * cycle}deg)`,
    },
  },
  out: {
    style: {
      // `p` is number (0~1)
      // When this page filled your screen, `p` will be 0
      // When just after this page disappear, `p` will be 1
      transform: (p) => `rotate(${p * 360 * cycle}deg)`,
    },
  },
});

const About = () => {
    const [hover, setHover] = useState('none')
  return (
    <div
      style={{
        flex: 1,
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        zIndex: 2,
      }}
    >
      <Header />
      <ScrollContainer>
        <ScrollPage>
          <div>
            <div
              style={{
                flex: 1,
                fontSize: 30,
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "skyblue",
              }}
            >
              <Animator animation={batch(MoveOut(-1000, 0), Sticky(50, 33))}>
                <text
                  style={{ fontSize: 40, color: "black", fontFamily: "Lucky" }}
                >
                  Hey, I'm {"\t"}
                </text>
                {"Ji Woong Park".split("").map((letter, index) => {
                  return (
                    <Textspan key={index}>
                      {letter === " " ? (
                        "\u00A0"
                      ) : (
                        <text
                          style={{
                            fontSize: 50,
                            color: "orange",
                            fontFamily: "Lucky",
                            fontWeight: "bolder",
                          }}
                        >
                          {letter}
                        </text>
                      )}
                    </Textspan>
                  );
                })}
              </Animator>
            </div>
            <div style={{ flex: 1, fontSize: 30, textAlign: "center" }}>
              <Animator animation={batch(MoveOut(1000, 0), Sticky(50, 45))}>
                <text
                  style={{ fontSize: 40, color: "black", fontFamily: "Lucky" }}
                >
                  But you can call me {"\t"}
                </text>
                {"Eric".split("").map((letter, index) => {
                  return (
                    <Textspan key={index}>
                      {letter === " " ? (
                        "\u00A0"
                      ) : (
                        <text
                          style={{
                            fontSize: 50,
                            color: "orange",
                            fontFamily: "Lucky",
                            fontWeight: "bolder",
                          }}
                        >
                          {letter}
                        </text>
                      )}
                    </Textspan>
                  );
                })}
              </Animator>
            </div>
            <div style={{ flex: 1, fontSize: 30, textAlign: "center" }}>
              <Animator animation={batch(MoveOut(300, -1000), Sticky(50, 58))}>
                <text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Sparky",
                  }}
                >
                  I'm a software engineer & Full-stack developer for web and app
                </text>
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage></ScrollPage>
        <ScrollPage
          style={{
            width: "100vw",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100vh",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: 'row'
              }}
            >
              <div>
                <img
                  style={{
                    width: "50vw",
                    height: "66.66666vw",
                    maxWidth: 500,
                    maxHeight: 666.6666,
                  }}
                  src={require("../../images/me.jpg")}
                />
              </div>
              <span
                style={{
                  width: "50vw",
                  fontFamily: "Lucky",
                  fontSize: 40,
                  marginLeft: 20,
                }}
              >
                <Textspan>
                  <text style={{ fontSize: 50 }}>ABOUT</text>
                </Textspan>
                <hr
                  style={{
                    background: "black",
                    color: "balck",
                    borderColor: "black",
                    height: "2px",
                    width: "50vw",
                  }}
                />
                <text style={{ fontSize: 20, fontFamily: "Sparky" }}>
                  Hey, my name is{" "}
                  {"Ji Woong Park".split("").map((letter, index) => {
                    return (
                      <Textspan key={index}>
                        {letter === " " ? (
                          "\u00A0"
                        ) : (
                          <text
                            style={{
                              fontSize: 25,
                              color: "black",
                              fontFamily: "Lucky",
                              fontWeight: "bolder",
                            }}
                          >
                            {letter}
                          </text>
                        )}
                      </Textspan>
                    );
                  })}{" "}
                  and I use{" "}
                  {"Eric".split("").map((letter, index) => {
                    return (
                      <Textspan key={index}>
                        {letter === " " ? (
                          "\u00A0"
                        ) : (
                          <text
                            style={{
                              fontSize: 25,
                              color: "black",
                              fontFamily: "Lucky",
                              fontWeight: "bolder",
                            }}
                          >
                            {letter}
                          </text>
                        )}
                      </Textspan>
                    );
                  })}{" "}
                  as my nickname. I have graduated{" "}
                  {"Purdue University".split("").map((letter, index) => {
                    return (
                      <Textspan key={index}>
                        {letter === " " ? (
                          "\u00A0"
                        ) : (
                          <text
                            style={{
                              fontSize: 25,
                              color: "black",
                              fontFamily: "Lucky",
                              fontWeight: "bolder",
                            }}
                          >
                            {letter}
                          </text>
                        )}
                      </Textspan>
                    );
                  })}{" "}
                  on May, 2023. I am{" "}
                  {"Software engineer".split("").map((letter, index) => {
                    return (
                      <Textspan key={index}>
                        {letter === " " ? (
                          "\u00A0"
                        ) : (
                          <text
                            style={{
                              fontSize: 25,
                              color: "black",
                              fontFamily: "Lucky",
                              fontWeight: "bolder",
                            }}
                          >
                            {letter}
                          </text>
                        )}
                      </Textspan>
                    );
                  })}{" "}
                  and{" "}
                  {
                    <Textspan>
                      <text
                        style={{
                          fontSize: 25,
                          color: "black",
                          fontFamily: "Lucky",
                          fontWeight: "bolder",
                        }}
                      >
                        Full-stack developer
                      </text>
                    </Textspan>
                  }{" "}
                  for web and app. I am always ready to learn and absorb new
                  things. {'\u000A'}
                </text>
              </span>
              <div style={{bottom: '10%', position: 'absolute', right: '50%', left: '50%'}}>
                <a href={pdf} target="_blank" onMouseOver={() => setHover('underline')} onMouseOut={() => setHover('none')}>
                    <Textspan>
                        <text style={{fontFamily: 'Lucky', fontSize: 20, textDecoration: hover, color: 'black' }}>
                            Resume↓
                        </text>
                    </Textspan>
                </a>
              </div>
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default About;
