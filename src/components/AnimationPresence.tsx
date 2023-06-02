import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
`;

const Box = styled(motion.div)`
    width: 600px;
    height: 200px;
    background-color: whitesmoke;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360,
    },
    leaving: {
        opacity: 0,
        scale: 0,
        y: 50,
    }
}

// AnimatePresence 컴포넌트 비활성화시 애니메이션 추가가능
// 삼중연산자를 감싸는 형태로 사용
// initial, animate, exit 속성사용
function App() {
    const [ showing, setShowing ] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);

    return(
        <Wrapper>
           
            <AnimatePresence>{
                showing ?
                <Box 
                  variants={boxVariants} 
                  initial="initial" 
                  animate="visible" 
                  exit="leaving" 
                /> :
                null
            }</AnimatePresence>
            <button onClick={toggleShowing}>click me!</button>
        </Wrapper>
    );
}

export default App;