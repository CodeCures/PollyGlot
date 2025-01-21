import { ChangeEvent, MouseEvent, useState } from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import ErrorDisplay from './components/ErrorDisplay';
import TextInput from './components/TextInput';
import Spinner from './components/Spinner';
import axios from './utils/axios';

function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('');
  const [translation, setTranslation] = useState('');

  const resetChat = () => {
    setError('');
    setLoading(false);
    setText('');
    setLanguage('');
    setTranslation('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
    setError('');
  };

  const handleTranslation = async () => {
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('/translate', { text, language });
      setTranslation(data.translation);
    } catch (error: any) {
      setError(
        error.response?.data?.error || error.message || 'An unknown error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (translation) {
      resetChat();
    } else {
      handleTranslation();
    }
  };

  return (
    <div className="chatbox-container">
      <Header />
      <div className="chatbox-content-wrapper">
        <TextInput
          onChange={(e) => setText(e.target.value)}
          id="response"
          label="Original text 👇"
          value={text}
        />

        <div className="chat-language-response-wrapper">
          <Spinner loading={loading} />

          {!loading && (
            <div className="w-full flex flex-col">
              {error && <ErrorDisplay message={error} />}
              {translation ? (
                <TextInput
                  id="response"
                  label="Your Translation 👇"
                  value={translation}
                  readOnly
                />
              ) : (
                <LanguageSelector onChange={handleChange} />
              )}
            </div>
          )}
        </div>

        <button className="group chatbox-button" onClick={handleClick}>
          <div className="chatbox-button-overlay"></div>
          <span className="chatbox-button-text">
            {translation || error ? 'Start Over' : 'Translate'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
