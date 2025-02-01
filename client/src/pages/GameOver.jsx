import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import {
  GameOverContainer,
  Confetti,
  ResultCard,
  Title,
  Trophy,
  ScoreContainer,
  Score,
  ButtonContainer,
  Button
} from './GameOverStyles';

const GameOver = () => {
  const navigate = useNavigate();
  const [finalScore, setFinalScore] = useState(0);
  const { resetGame } = useGame(); 

  const confettiColors = ['#FF6F61', '#FFD700', '#4CAF50', '#2196F3', '#9C27B0'];
  const confettiElements = Array.from({ length: 50 }).map((_, i) => (
    <Confetti
      key={i}
      color={confettiColors[i % confettiColors.length]}
      duration={Math.random() * 3 + 2}
      top={Math.random() * 100}
      left={Math.random() * 100}
      shape={Math.random() > 0.5 ? 'circle' : 'square'}
    />
  ));

  useEffect(() => {
    const score = localStorage.getItem('gameScore') || 0;
    setFinalScore(parseInt(score));
  }, []);

  const handlePlayAgain = () => {
    resetGame();
    navigate('/juego');
  };

  const handleMainMenu = () => {
    resetGame();
    navigate('/menu');
  };

  return (
    <GameOverContainer>
      {confettiElements}
      <ResultCard>
        <Trophy>🏆</Trophy>
        <Title>¡Fin del Juego!</Title>
        <ScoreContainer>
          <Score>
            {finalScore} <span style={{ fontSize: '2.5rem' }}>✨</span>
          </Score>
        </ScoreContainer>
        <ButtonContainer>
          <Button primary onClick={handlePlayAgain}>
            🎮 ¡Jugar de Nuevo!
          </Button>
          <Button onClick={handleMainMenu}>
            🏠 Menú Principal
          </Button>
        </ButtonContainer>
      </ResultCard>
    </GameOverContainer>
  );
};

export default GameOver;
