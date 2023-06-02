import { motion, Variants } from "framer-motion"
import { useRef } from "react";
import styled from "styled-components";
const Wrapper = styled.div`

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255,255, 255, 0.4);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

// framer-motion 을 styled component 에 적용
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 각 컬럼의 비율을 1fr 1fr 비율로 맞춤
  background-color: whitesmoke;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
    hover: { 
        scale: 1.5,
        rotateZ: 90,
    },
    click: {
        scale: 1,
        borderRadius: "100px",
    },
    drag: {
        backgroundColor: "rgb(46,204,113)",
        transition: {
            duration: 3,
        }
    }
}


function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return(
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box 
                drag
                dragConstraints={biggerBoxRef}
                dragElastic={0.5}
                variants={boxVariants}
                whileHover="hover"
                whileTap="click"
                whileDrag="drag"
                >
                </Box>
            </BiggerBox>

        </Wrapper>
    )
}

export default App;