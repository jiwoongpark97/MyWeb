import cur from '../../cursor50.png'
import background from "../../images/background.jpg"
import Textspan from './textspan';
import ParticleBackground from '../components/particle';

function About() {
    const sentence = "This is Ji Woong Park".split("");
    return(
        <div >
            <ParticleBackground />
            {sentence.map((letter, index) =>{
                return (
                    <Textspan style={{fontSize: 20}} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </Textspan>
                )
            })}
        </div>
    )
}

export default About;