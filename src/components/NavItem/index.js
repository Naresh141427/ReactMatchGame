import './index.css'

const NavItem = props => {
  const {score, time} = props
  return (
    <li className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="website-logo"
        alt="website logo"
      />
      <div className="score-card-container">
        <h1 className="score">Score: {score} </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          className="timer"
          alt="timer"
        />
        <p className="timer-section">{time} sec</p>
      </div>
    </li>
  )
}

export default NavItem
