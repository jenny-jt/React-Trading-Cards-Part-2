var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skills: {props.skills} </p>
    </div>
  );
}

function TradingCardContainer() {

  const floatCard = {
    name: 'Float',
    skills: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  };
  
  const [cards, updateCards] = React.useState([floatCard]);

  React.useEffect(() => {
    fetch('/cards.json')
      .then((response) => response.json())
      .then((data) => updateCards(data));
  })
  

  const tradingCards = [];

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skills={currentCard.skills}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
