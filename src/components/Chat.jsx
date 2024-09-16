import React, { useEffect } from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-white">
    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25 m-2 -m-2 p-2 border-4 border-gray-700" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8h4"></path>
    </svg>
    Initializing ChatLing...
  </div>
);

const ChatPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    let script;
    
    script = document.createElement('script');
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.onload = () => {
      window.chtlConfig = { chatbotId: "7823827825", display: "fullscreen" };
      setIsLoading(false);
    };
    script.onerror = () => {
      console.error("Error loading ChatLing script");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && !window.ChatLingInitialized) {
      window.addEventListener('ChatLingInitialized', () => {
        setIsLoading(false);
      });
      window.dispatchEvent(new Event('ChatLingInitialized'));
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="w-full max-w-md">
          <div className="text-center py-8">
            Initializing...
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
