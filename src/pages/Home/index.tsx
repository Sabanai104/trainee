import { useState } from 'react';
import Score from '../../components/Score';
import './styles.css';

const Home = () => {
  const [firstTeamScore, setFirstTeamScore] = useState<number>(0);
  const [secondTeamScore, setSecondTeamScore] = useState<number>(0);

  const handleFirstTeamScore = (firstTeamScore: number) => {
    setFirstTeamScore(firstTeamScore);
  };

  const handleSecondTeamScore = (secondTeamScore: number) => {
    setSecondTeamScore(secondTeamScore);
  }

  return (
    <div className='homePage'>
      <div className='homeScoreContainer'>
        <Score textScoreTeam="Liverpool" teamScore={firstTeamScore} handleTeamScore={handleFirstTeamScore} />

        <text className='homeVersusText'>X</text>

        <Score textScoreTeam="Real Madrid" teamScore={secondTeamScore} handleTeamScore={handleSecondTeamScore} />
      </div>
    </div>
  )
};

export default Home;
