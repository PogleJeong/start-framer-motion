import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: antiquewhite;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute; // box variants 에서 x, y 값을 사용하므로 해당 속성부여
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
    entry: (back: boolean) => ({
        x: back ? -500 : 500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
        }
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: (back:boolean) => ({
        x: back ? 500: -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
        }
    })
}

// AnimatePresence 컴포넌트 비활성화시 애니메이션 추가가능
// 삼중연산자를 감싸는 형태로 사용
// initial, animate, exit 속성사용
function App() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false);
        setVisible(prev => (prev === 10 ? 10 : prev + 1));
    }
    const prevPlease = () => {
        setBack(true);
        setVisible(prev => (prev === 1 ? 1 : prev - 1));
    }
    return(
        <Wrapper>
            <AnimatePresence mode="wait" custom={back}>
                {/* REACT : component의 key가 변하면 re-render 발생
                    mode="wait" : 애니메이션이 순차적을 진행(종료 이후 다음실행)
                    custom : variants 에 데이터를 보낼 수 있음.
                */}
                <Box 
                    variants={box}
                    custom={back} // 보내고자하는 데이터
                    initial="entry"
                    animate="center"
                    exit="exit"    
                    key={visible}
                >
                {visible}
                </Box> 
            
            </AnimatePresence>
            <div>
                <button onClick={prevPlease}>prev</button>
                <button onClick={nextPlease}>next</button>
            </div>
        </Wrapper>
    );
}

export default App;