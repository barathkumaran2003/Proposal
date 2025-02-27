import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [showCard, setShowCard] = useState(false);
  
    const showProposalCard = () => setShowCard(true);
    const hideProposalCard = () => setShowCard(false);

  return (
    <>
      <div className='head'><h1><span>Do you LOVE ME💗!?</span></h1></div>
      <div className='main'>
      <div class="light-button">
  <button class="bt" onClick={showProposalCard}>
    <div class="light-holder">
      <div class="dot"></div>
      <div class="light"></div>
    </div>
    <div class="button-holder">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
        ></path>
      </svg>
      <p>Yes, I love you</p>
    </div>
  </button>

  {showCard && (
        <div className="proposal-card show">
          <div className="card-content">
            <span className="close-btn" onClick={hideProposalCard}>
              &times;
            </span>
            <h2>My Love 💖</h2>
            <p>You are the reason for my happiness and joy. Will you be mine forever? 💍</p>
            <button className="accept-btn" onClick={hideProposalCard}>
              Forever Yours 💕
            </button>
          </div>
        </div>
      )}
</div>

      <div class="click">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <button class="button up">
   No
    <p></p>
    <p></p>
    <p></p>
  </button>
  <button disabled="" class="button shadow"></button>
</div>

      </div>
    </>
  )
}

export default App;
