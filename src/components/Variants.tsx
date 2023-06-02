import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;

// framer-motion 을 styled component 에 적용
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 각 컬럼의 비율을 1fr 1fr 비율로 맞춤
  background-color: rgba(255,255,255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center; // aling-self + content-self 로 grid cell 안에 있는 item 을 중앙정렬한다.
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const boxVariants : Variants= {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2, // 자식들에 대해서 stagger 진행
    }
  },
}

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
}
// 컴포넌트가 가질 수 있는 미리 정의된 시각적 state입니다.
// initial, animate 속성에 적용할 값을 명사
// css 설정을 오브젝트화 시키고 컴포넌트에 적용한 것
/* const myVarians = {
  start : { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", }}
} */

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end" >
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box>
    </Wrapper>
  );
}

export default App;
