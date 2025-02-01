import styled, { keyframes } from 'styled-components';

const pop = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const confetti = keyframes`
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`;

export const GameOverContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #FFDEE9, #B5FFFC);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  perspective: 1000px;
  overflow: hidden;
  position: relative;
`;

export const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${props => props.color};
  animation: ${confetti} ${props => props.duration}s linear infinite;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform-origin: center;
  border-radius: ${props => (props.shape === 'circle' ? '50%' : '0')};
`;

export const ResultCard = styled.div`
  background: linear-gradient(135deg, #FFDEE9, #B5FFFC);
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${pop} 0.6s ease-out;
  backdrop-filter: blur(8px);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 10px 0;
  color: #FF6F61;
  text-shadow: 0 2px 4px rgba(255, 111, 97, 0.5);
  text-align: center;
`;

export const Trophy = styled.div`
  font-size: 6rem;
  margin: 20px 0;
  animation: ${pop} 1s ease-in-out infinite;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  background: linear-gradient(45deg, #FFE8A1, #FFABAB);
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const Score = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  perspective: 1000px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  background: ${props => (props.primary ? '#FFB6C1' : '#89CFF0')};
  color: white;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
