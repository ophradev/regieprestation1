import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scrolling to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize chat with welcome message
  useEffect(() => {
    setMessages([
      {
        text: "Bonjour ! Je suis votre assistant virtuel pour les prestations des ministères togolais. Comment puis-je vous aider aujourd'hui ?",
        isUser: false,
      },
    ]);

    // Add event listeners to open chat via buttons
    const handleChatButtonClick = () => {
      setIsOpen(true);
    };
    
    const chatButtons = document.querySelectorAll('#hero-chat-button');
    chatButtons.forEach(button => {
      button.addEventListener('click', handleChatButtonClick);
    });
    
    return () => {
      // Cleanup event listeners
      chatButtons.forEach(button => {
        button.removeEventListener('click', handleChatButtonClick);
      });
    };
  }, []);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [
      ...prev,
      { text: inputValue, isUser: true },
    ]);

    // Clear input
    setInputValue('');

    // Generate bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [
        ...prev,
        { text: botResponse, isUser: false },
      ]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      return "Bonjour ! Comment puis-je vous aider avec les services ministériels togolais ?";
    }
    
    if (lowerMessage.includes('carte') || lowerMessage.includes('identité') || lowerMessage.includes('passeport')) {
      return "Pour obtenir une carte d'identité ou un passeport, vous devez vous rendre au service d'état civil avec votre certificat de nationalité, un extrait de naissance et des photos d'identité. Le délai est généralement de 2 à 4 semaines.";
    }
    
    if (lowerMessage.includes('entreprise') || lowerMessage.includes('commerce')) {
      return "Pour créer une entreprise au Togo, adressez-vous au Centre de Formalités des Entreprises (CFE). La procédure prend environ 3 jours ouvrables et nécessite vos documents d'identité et les statuts de votre entreprise.";
    }
    
    if (lowerMessage.includes('permis') || lowerMessage.includes('conduire')) {
      return "Pour le permis de conduire, inscrivez-vous dans une auto-école agréée, passez l'examen théorique puis pratique, et déposez votre dossier à la Direction des Transports Routiers.";
    }
    
    if (lowerMessage.includes('santé') || lowerMessage.includes('ministère de la santé')) {
      return "Le Ministère de la Santé du Togo est responsable de la politique sanitaire nationale, des hôpitaux publics, des campagnes de vaccination et de l'accès aux soins de santé pour tous les citoyens.";
    }
    
    // Default response
    return "Je n'ai pas toutes les informations sur ce sujet spécifique. Pour en savoir plus, contactez directement le ministère concerné ou visitez le portail e-Services du gouvernement togolais.";
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white rounded-full w-16 h-16 shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center animate-pulse"
            aria-label="Ouvrir le chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-80 sm:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-robot text-primary"></i>
              </div>
              <div>
                <h3 className="font-bold text-white">Assistant e-Services</h3>
                <p className="text-xs text-white/80">Services Ministériels Togolais</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.isUser ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-blue-50 rounded-tr-none'
                      : 'bg-white border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {!msg.isUser && (
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-robot text-white text-xs"></i>
                      </div>
                      <span className="text-xs font-medium text-gray-700">Assistant</span>
                    </div>
                  )}
                  <p className="text-gray-800 whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tapez votre question..."
                className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-r-md hover:bg-primary/90"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}