import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  }, [refreshTrigger]); // runs on mount & when refreshTrigger changes

  const refreshJoke = () => {
    setRefreshTrigger(prev => prev + 1); // triggers useEffect
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Random Joke</h2>
      {joke ? (
        <>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </>
      ) : (
        <p>Loading joke...</p>
      )}
      <button onClick={refreshJoke} style={{ marginTop: '10px' }}>
        Get Another Joke
      </button>
    </div>
  );
}

export default JokeFetcher;
