import React, { Component } from 'react';
import GameCards from './components/Cards'
import NavBar from './components/navBar'
import card from "./components/Cards/info.json";
import Wrapper from './components/wrapper'




class App extends Component {

  constructor() {
    super();
    this.state = {
      card,
      message: "Click one of the logos to begin!",
      score: 0,
      topScore: 0
    }
  }

  handleClick = (id, clicked) => {
    const imageOrder = this.state.card;
    if (clicked) {
      imageOrder.forEach((card, index) => {
        imageOrder[index].clicked = false;

      });
      // s
      return this.setState({
        card: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Incorrectly!",
        score: 0
      })
    }

    else {
      imageOrder.forEach((card, index) => {
        if (id === card.id) {
          imageOrder[index].clicked = true;
        }
      });
      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Correctly!",
        score: newScore,
        topScore: newTopScore,
      })
    }
  };

  render() {
    return (
      <div >

        <NavBar />
        <div class="card-body text-center mb-3">
        <h3 class="card-title mt-2 pb-4"><strong>{this.state.message}</strong></h3>
        <p class="card-text">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
    </div>
        <br />
        <Wrapper>
          {card.map(card => (
            <GameCards
              image={card.image}
              id={card.id}
              clicked={card.clicked}
              handleClick={this.handleClick}
            />
          ))}

        </Wrapper >
      </div>
    )
  }
}





export default App;
