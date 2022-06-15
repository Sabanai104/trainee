import { FC, MouseEventHandler } from 'react';
import './styles.css';

interface ScoreButtonInterface {
  textScoreButton: string;
  handleScoreButton: MouseEventHandler<HTMLButtonElement>;
}

const ScoreButton: FC<ScoreButtonInterface> = ({textScoreButton, handleScoreButton}) => {
  return (
    <button className='scoreButton' onClick={handleScoreButton} >{textScoreButton}</button>
  );
}

export default ScoreButton;
