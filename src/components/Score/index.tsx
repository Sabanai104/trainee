import ScoreButton from '../Buttons/ScoreButton';
import { BaseSyntheticEvent, FC } from 'react';
import './styles.css';

interface ScoreInterface {
  textScoreTeam: string;
  teamScore: number;
  handleTeamScore: Function;
}

const Score: FC<ScoreInterface> = ({ textScoreTeam, teamScore, handleTeamScore }) => {
  const onChange = (e: BaseSyntheticEvent) => {
      handleTeamScore(Number(e.target.value));
  }

  const handlePlusButton = () => {
    if(teamScore >= 100) {
      handleTeamScore(100)
    } else {
      handleTeamScore(teamScore + 1);
    }
  }

  const handleMinusButton = () => {
    if(teamScore <= 0) {
      handleTeamScore(0)
    } else {
      handleTeamScore(teamScore - 1);
    }
  }

  return (
    <div className='scoreContainer'>
      <input type="number" value={teamScore} className='scoreInput' onChange={onChange} />
      <div className='scoreButtonContainer'>
        <ScoreButton textScoreButton='-' handleScoreButton={handleMinusButton} />
        <ScoreButton textScoreButton='+' handleScoreButton={handlePlusButton} />
      </div>
      <text className='scoreTeam'>{textScoreTeam}</text>
    </div>
  )
}

export default Score;
