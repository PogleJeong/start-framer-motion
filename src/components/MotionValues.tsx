import styled from 'styled-components';
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
width: 200px;
height: 200px;
background-color: whitesmoke;
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;



function App() {
    // motion value 는 react state 가 아니기에 업데이트 되어도 랜더링 되지 않음.
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-800,800], [-360, 360]); // motion value 변화감지 hook (motionvalue, inputrange, outputrange)
    const gradient = useTransform(x, 
        [-800,0,800], 
        ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
        "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
        "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ])
    useMotionValueEvent(x, "change", (lastest) => {
        console.log(lastest);
    });
    return(
        <Wrapper style={{background: gradient}}>
            <button onClick={()=>{x.set(200)}}>Click me</button>
            <Box style={{x, rotateZ }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
};

export default App;