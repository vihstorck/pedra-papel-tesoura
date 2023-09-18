'use client';
import { useState } from 'react';

const choices = ['Pedra', 'Papel', 'Tesoura'];

const App = () => {
  const [myChance, setMyChance] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  const [result, setResult] = useState(null);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'empatou';
    if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      return 'venceu';
    } else {
      return 'perdeu';
    }
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);

    setMyChance(choice);
    setRandomChoice(computerChoice);
    setResult(result);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full text-center">
      <div className="flex flex-col space-y-6">
        <h1 className="text-2xl font-bold">Pedra, Papel, Tesoura</h1>
        <div className="flex space-x-4">
          {choices.map((choice, index) => (
            <button
              className={`btn btn-primary ${
                index == 1 ? 'btn-secondary' : 'btn-primary'
              } ${index == 2 ? 'btn-accent' : 'btn-primary'} btn-outline`}
              key={choice}
              onClick={() => handleUserChoice(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        {myChance && randomChoice && (
          <div className="text-left flex flex-col space-y-4">
            <p>Você escolheu: {myChance}</p>
            <p>CPU escolheu: {randomChoice}</p>
            <p>{result === 'draw' ? 'draw!' : `Você ${result}!`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
