import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const convertText = async () => {
    try {
      const response = await fetch('https://port-0-polite-converter-server-3prof2lll3g7izj.sel3.cloudtype.app/api/convert', {
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
        <h2>공손하게 말해요</h2>
          <p style={{fontSize:"1.2rem"}}>❤이쁘게❣💝꾸민다고💗💜이쁜말이✨🎀아니에요🎉</p>
        <input
            className="Input"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button className="Btn" onClick={convertText}>변환하기</button>
        <p style={{fontSize:"1.5rem"}}>결과: {result}</p>
      </div>
  );
}

export default App;
