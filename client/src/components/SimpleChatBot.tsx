import { useState, useEffect, useRef } from 'react';

// Interface pour les messages
interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function SimpleChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Pour faire défiler automatiquement vers le dernier message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Initialiser le chat avec un message de bienvenue
  useEffect(() => {
    setMessages([
      {
        text: 'Bonjour ! Je suis votre assistant virtuel pour les prestations des ministères togolais. Comment puis-je vous aider aujourd\'hui ?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    
    // Ajouter un gestionnaire d'événements pour les boutons de chat
    const handleChatButtonClick = () => {
      setIsVisible(true);
    };
    
    const chatButtons = document.querySelectorAll('#open-n8n-chat, #hero-chat-button');
    chatButtons.forEach(button => {
      button.addEventListener('click', handleChatButtonClick);
    });
    
    return () => {
      chatButtons.forEach(button => {
        button.removeEventListener('click', handleChatButtonClick);
      });
    };
  }, []);
  
  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simuler une réponse du bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  // Fonction pour obtenir une réponse du bot basée sur le message de l'utilisateur
  const getBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('bonjour') || lowerCaseMessage.includes('salut')) {
      return 'Bonjour ! Comment puis-je vous aider avec les services ministériels togolais ?';
    }
    
    if (lowerCaseMessage.includes('carte d\'identité') || lowerCaseMessage.includes('passeport')) {
      return 'Pour obtenir une carte d\'identité ou un passeport, vous devez vous rendre au service d\'état civil de votre mairie avec les documents suivants : certificat de nationalité, certificat de résidence, extrait de naissance et 4 photos d\'identité. Le délai de traitement est généralement de 2 à 4 semaines.';
    }
    
    if (lowerCaseMessage.includes('entreprise') || lowerCaseMessage.includes('commerce')) {
      return 'Pour créer une entreprise au Togo, vous devez passer par le Centre de Formalités des Entreprises (CFE). Les démarches ont été simplifiées et peuvent être effectuées en 3 jours ouvrables. Vous aurez besoin de : statuts de l\'entreprise, pièce d\'identité, plan de localisation et formulaire de déclaration.';
    }
    
    if (lowerCaseMessage.includes('permis') || lowerCaseMessage.includes('conduire')) {
      return 'Pour obtenir un permis de conduire au Togo, vous devez : 1) Vous inscrire dans une auto-école agréée, 2) Passer l\'examen théorique, 3) Passer l\'examen pratique, 4) Déposer un dossier à la Direction des Transports Routiers avec votre attestation de réussite, pièce d\'identité et certificat médical, 5) Payer les frais d\'établissement.';
    }
    
    if (lowerCaseMessage.includes('école') || lowerCaseMessage.includes('éducation') || lowerCaseMessage.includes('inscription')) {
      return 'Les inscriptions scolaires au Togo se déroulent généralement entre juillet et septembre. Pour inscrire votre enfant, vous aurez besoin de : extrait de naissance, certificat de résidence, livret scolaire (pour les transferts), et paiement des frais d\'inscription. Pour les bourses d\'études, adressez-vous au Ministère de l\'Enseignement Supérieur.';
    }
    
    if (lowerCaseMessage.includes('santé') || lowerCaseMessage.includes('hôpital') || lowerCaseMessage.includes('médical')) {
      return 'Le système de santé togolais comprend des centres de santé primaires dans chaque canton, des hôpitaux de district, et des Centres Hospitaliers Régionaux. Pour bénéficier de l\'assurance maladie, vous pouvez vous inscrire à l\'Institut National d\'Assurance Maladie (INAM) si vous êtes fonctionnaire, ou à des assurances privées.';
    }
    
    // Réponse par défaut
    return 'Je n\'ai pas toutes les informations sur ce sujet spécifique. Pour des informations plus précises, je vous invite à contacter directement le ministère concerné ou à visiter le portail e-Services du gouvernement togolais.';
  };
  
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-24 right-8 w-80 sm:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
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
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 ${msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-blue-50 rounded-tr-none' 
                      : 'bg-white border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-robot text-white text-xs"></i>
                      </div>
                      <span className="text-xs font-medium text-gray-700">Assistant</span>
                    </div>
                  )}
                  <p className="text-gray-800 whitespace-pre-wrap">{msg.text}</p>
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-500">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-white">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center"
            >
              <input
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
      
      {/* Bouton flottant pour ouvrir le chat (pour mobile) */}
      {!isVisible && (
        <div className="chat-button md:hidden">
          <button 
            className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition duration-300 flex items-center justify-center animate-pulse"
            aria-label="Ouvrir le chat avec l'assistant IA"
            onClick={() => setIsVisible(true)}
          >
            <i className="fas fa-comments text-2xl"></i>
          </button>
        </div>
      )}
    </>
  );
}