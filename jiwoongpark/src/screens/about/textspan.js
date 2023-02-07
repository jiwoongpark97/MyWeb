import {motion, useAnimationControls} from "framer-motion"

const Textspan = ({children}) => {
    const controls = useAnimationControls();

    const rubberBand = () =>{
        return {
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ]
        }
    }

    return (
        <motion.span 
        style={{display: 'inline-block', fontSize: '5rem'}} 
        whileHover={() => rubberBand()}
        >
            {children}
        </motion.span>
    )
}
export default Textspan;