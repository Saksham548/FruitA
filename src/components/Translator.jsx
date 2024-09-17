import React, { useState } from 'react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('fr');

  const handleTranslate = async () => {
    try {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: {inputText},
          source: "auto",
          target: "hi",
          format: "text",
          alternatives: 3,
          api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
      });
      
      console.log(await res.json());
      setOutputText(inputText.translations[0].text);
    } catch (error) {
      console.error('Translation failed:', error);
      setOutputText('Translation failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="p-6">
          <div className="mb-4">
            <label htmlFor="input-text" className="block mb-2 text-sm font-medium text-gray-600">
              Input Text
            </label>
            <textarea
              id="input-text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="4"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text here"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <select
              value={inputLanguage}
              onChange={(e) => setInputLanguage(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              {/* Add more languages as needed */}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setInputLanguage(outputLanguage)} className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors duration-300">
              <path d="M16.88 1.4l-3.82 8.7L9.29 20.9l1.45-7 7-1.07-1.44-6.8z"></path>
            </svg>
            <select
              value={outputLanguage}
              onChange={(e) => setOutputLanguage(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              {/* Add more languages as needed */}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setOutputLanguage(inputLanguage)} className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors duration-300">
              <path d="M4 18v1h16v-1H4zm3.5-7.5V7.443c0-.63-.41-1.25-.89-1.67C4.608 5.822 3.196 5 1.893 5c-.26 0-.503.098-.707.282-.203 0 0 .138 0 .21 0 .204.14.39.283.707.282.32.49.98.707 1.893zm9.3 0c-.63.42-1.25.763-2.067 1.02-1.023.33-2.233.51-3.57.51-1.327 0-2.547-.178-3.57-0.51-1.022-.259-1.67-.763-2.067-1.02-.402-.33-.763-.51-1.025-.51-1.326 0-2.547.178-3.57.51-1.023.259-1.67.763-2.067 1.02-.402.33-.51.51-.51-1.023 0-1.67-.178-2.548-.51-3.57z"/>
            </svg>
          </div>
          <button
            onClick={handleTranslate}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Translate
          </button>
        </div>
        <div className="p-6 mt-auto">
          <label htmlFor="output-text" className="block mb-2 text-sm font-medium text-gray-600">
            Output Text
          </label>
          <textarea
            id="output-text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="4"
            value={outputText}
            readOnly
            placeholder="Translated text will appear here"
          />
        </div>
      </div>
    </div>
  );
};

export default Translator;
