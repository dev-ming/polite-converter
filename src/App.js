import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const convertText = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      setResult(data.politeText);
    } catch (error) {
      console.error('Error converting text:', error);
    }
  };

  return (
      <div className="App">
        <h2>문장을 공손하게 변환하세요</h2>
        <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button onClick={convertText}>변환하기</button>
        <p>결과: {result}</p>
      </div>
  );
}

export default App;
