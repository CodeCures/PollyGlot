import { ChangeEvent, MouseEvent, useState } from 'react'
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import ErrorDisplay from './components/ErrorDisplay';
import TextInput from './components/TextInput';
import Spinner from './components/Spinner';


function App() {

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setError('');
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setLoading(true)
    setTimeout(() => setLoading(false), 3000)

  }

  return (
    <div className='chatbox-container'>
      <Header />
      <div className="chatbox-content-wrapper">
        <TextInput
          onChange={(e) => setMessage(e.target.value)}
          id='response'
          label='Original text 👇' />


        <div className='chat-language-response-wrapper'>

          <Spinner loading={loading} />

          {!loading && (
            <div className='w-full flex flex-col'>
              {error && <ErrorDisplay message={error} />}

              {response && <TextInput
                id='response'
                label='Your Translation 👇'
                readOnly
              />}

              {!response && <LanguageSelector onChange={handleChange} />}
            </div>
          )}

        </div>

        <button className="group chatbox-button" onClick={handleClick}>
          <div className="chatbox-button-overlay"></div>
          <span className="chatbox-button-text">Translate</span>
        </button>
      </div>
    </div>
  )
}

export default App
