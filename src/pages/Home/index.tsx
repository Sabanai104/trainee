import './styles.css';

const Home = () => (
  <div className='homePage'>
    <div className='homeScoreContainer'>
      <div className='scoreContainer'>
        <input type="tel" maxLength={3} placeholder='0' className='scoreInput' />
        <div className='scoreButtonContainer'>
          <button className='scoreButton' >-</button>
          <button className='scoreButton'>+</button>
        </div>
        <text className='scoreTeam'>Liverpool</text>
      </div>

      <text className='homeVersusText'>X</text>

      <div className='scoreContainer'>
        <input type="tel" maxLength={3} placeholder='1' className='scoreInput' />
        <div className='scoreButtonContainer'>
          <button className='scoreButton' >-</button>
          <button className='scoreButton'>+</button>
        </div>
        <text className='scoreTeam'>Real Madrid</text>
      </div>
    </div>
  </div>
);

export default Home;
