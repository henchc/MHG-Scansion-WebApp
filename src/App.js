import React, { useState } from 'react';
import Button from './components/Button';
import TextBox from './components/TextBox';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';

function postProcessText(text) {
    const arr = text.split(/\n/);
    const resultArr = [];
    arr.forEach((item, i) => {
      if(i%1===0) resultArr.push(<br />);
      resultArr.push(item);      
    });
  return resultArr;
}

function App() {
  const [text, setText] = useState("");
  const [generatedText, postGenerateText] = postGenerateTextEndpoint();

  const generateText = () => {
    postGenerateText({ text, userId: 1 });
  }

  return (
    <div className='app-container'>
      <form noValidate autoComplete='off'>
        <h1>Middle High German Scansion</h1>
        <TextBox text={text} setText={setText} />
        <Button onClick={generateText} />
      </form>

      {generatedText.pending &&
        <div className='result pending'>Please wait</div>}

      {generatedText.complete &&
        (generatedText.error ?
          <div className='result error'>Bad Request</div> :
          <div className='result valid'>
            {postProcessText(generatedText.data.body)}
          </div>)}
    </div>
  );
}

export default App;
