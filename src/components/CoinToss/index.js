// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, isEven: 'heads'}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isEven: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isEven: 'tails',
      }))
    }
  }

  render() {
    const {total, heads, tails, isEven} = this.state
    return (
      <div className="app-container">
        <div className="head-toss-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="sub-heading"> Heads (or) Tails </p>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/${isEven}-img.png`}
            alt="toss result"
            className="image"
          />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result"> Total: {total}</p>
            <p className="result"> Heads: {heads}</p>
            <p className="result"> Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
