import { ChangeEvent, MouseEvent, useState } from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import axios from './utils/axios';
import ChatInput from './components/ChatInput';

type ChatInputType = {
  id: string;
  text: string;
  image?: string;
  role: 'user' | 'assistant';
};

const App = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatInputType[]>([]);

  const resetChat = () => {
    setError('');
    setText('');
    // setLanguage('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setError('');
  };

  const handleLanguageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
    setError('');
  };

  const generateId = () => `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const handleTranslation = async () => {
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post<{ image: string, translation: string }>('/translate', { text, language });

      addChatMessage(data.translation, 'assistant', data.image);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addChatMessage = (message: string, role: 'user' | 'assistant', image = '',) => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { id: generateId(), text: message, image, role },
    ]);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!text) {
      setError('Text required!');
      return;
    }

    if (!language) {
      setError('Language required!');
      return;
    }

    addChatMessage(text, 'user');
    handleTranslation();
    resetChat();
  };

  return (
    <div className="flex space-x-10">
      <div className="chatbox-container">
        <Header />
        <div className="chatbox-content-wrapper">
          <div className="chat-language-response-wrapper">
            {/* Initial message */}
            <div className="flex items-start space-x-3">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-lg text-xs">
                <p>
                  Select the <span className="text-blue-600 font-bold">language</span> you want me to translate into, type your{' '}
                  <span className="text-blue-600 font-bold">text</span>, and hit{' '}
                  <span className="text-blue-600 font-bold">send</span>.
                </p>
              </div>
            </div>

            {/* Chat history */}
            {chatHistory.map(({ id, text, image, role }) => (
              <div
                key={id}
                className={`flex items-start space-x-3 ${role === 'user' ? 'flex-row-reverse' : ''
                  }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-lg text-xs ${role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                    }`}
                >
                  {role === 'assistant' && <img src={`data:image/png;base64,${image}`} />}
                  <p className={role === 'assistant' ? 'font-bold' : ''}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Components */}
          <ChatInput
            value={text}
            onChange={handleChange}
            onClick={handleClick}
            loading={loading}
            error={error}
          />
          <LanguageSelector onChange={handleLanguageSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
