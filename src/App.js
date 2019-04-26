import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Cards from "./cards.json";

class App extends Component {
  


  render() {
    return (
      <Wrapper>
        <Title>Greys Anatomy</Title>
        {Cards.map(card => (
          <ImageCard
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
