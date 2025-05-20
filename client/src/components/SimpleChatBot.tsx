import { useState, useEffect, useRef, useCallback } from 'react';

// Types d'interfaces
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: string[];
  isTyping?: boolean;
  attachments?: { type: 'image' | 'link'; url: string; title?: string }[];
}

interface QuickReply {
  text: string;
  action: () => void;
}

interface N8nResponse {
  text: string;
  options?: string[];
  quickReplies?: string[];
  attachments?: { type: 'image' | 'link'; url: string; title?: string }[];
}

export default function SimpleChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // URL du webhook n8n
  const webhookUrl = "https://wimose.app.n8n.cloud/webhook/e16ea94b-0dd2-47d5-94fe-474b03e930b3/chat";
  
  // Pour faire défiler automatiquement vers le dernier message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  // Gestion du thème global du site
  useEffect(() => {
    // Détection du thème préféré de l'utilisateur
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Appliquer le thème au document entier
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    // Appliquer le thème sombre à tout le site
    if (isDarkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
      document.querySelectorAll('section').forEach((section) => {
        if (section.id !== 'accueil') {
          section.classList.add('bg-gray-800');
          section.classList.remove('bg-white', 'bg-gray-50');
        }
      });
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
      document.querySelectorAll('section').forEach((section) => {
        if (section.id !== 'accueil') {
          section.classList.remove('bg-gray-800');
          if (section.id % 2 === 0) {
            section.classList.add('bg-white');
          } else {
            section.classList.add('bg-gray-50');
          }
        }
      });
    }
  }, [isDarkMode]);
  
  // Faire défiler automatiquement vers le dernier message
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);
  
  // Générer un ID unique pour chaque message
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  // Initialiser le chat avec un message de bienvenue
  useEffect(() => {
    // Ajouter l'effet de typing avant le premier message
    setMessages([
      {
        id: generateId(),
        text: '',
        sender: 'bot',
        timestamp: new Date(),
        isTyping: true
      }
    ]);
    
    // Après un délai, remplacer par le message de bienvenue
    setTimeout(() => {
      setMessages([
        {
          id: generateId(),
          text: 'Bonjour ! Je suis votre assistant virtuel pour les prestations des ministères togolais. 🇹🇬',
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      
      // Ajouter un second message avec une question
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: generateId(),
          text: 'Comment puis-je vous aider aujourd\'hui ?',
          sender: 'bot',
          timestamp: new Date(),
          options: [
            'Carte d\'identité/Passeport',
            'Création d\'entreprise',
            'Permis de conduire',
            'Services de santé',
            'Éducation'
          ]
        }]);
      }, 500);
    }, 1500);
    
    // Enlever l'ancien bouton de chat n8n si existant
    const oldChatButton = document.querySelector('.n8n-chat-window-button');
    if (oldChatButton) {
      oldChatButton.remove();
    }
    
    // Ajouter un gestionnaire d'événements pour les boutons de chat
    const handleChatButtonClick = () => {
      setIsVisible(true);
      setChatMinimized(false);
      // Mettre le focus sur l'input du chat
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
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
  
  // Fonction pour envoyer un message au webhook n8n et recevoir une réponse
  const fetchFromN8n = async (message: string): Promise<N8nResponse> => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          sessionId: localStorage.getItem('chatSessionId') || generateId()
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      // Stocker l'ID de session si c'est une nouvelle conversation
      if (!localStorage.getItem('chatSessionId')) {
        localStorage.setItem('chatSessionId', generateId());
      }
      
      const data = await response.json();
      console.log('Réponse n8n:', data);
      
      // Traiter la réponse du webhook
      return {
        text: data.text || "Désolé, je n'ai pas pu comprendre votre demande.",
        options: data.options || [],
        quickReplies: data.quickReplies || [],
        attachments: data.attachments || []
      };
    } catch (error) {
      console.error('Erreur lors de la communication avec n8n:', error);
      
      // Réponse par défaut en cas d'erreur
      return {
        text: "Je rencontre des difficultés pour communiquer avec mes services. Voici quelques informations générales sur le Ministère de la Santé:\n\nLe Ministère de la Santé du Togo est responsable de la définition et de la mise en œuvre de la politique sanitaire nationale. Il gère les hôpitaux publics, les campagnes de vaccination, les politiques de prévention et l'accès aux soins de santé pour la population.",
        options: ['Autres ministères', 'Hôpitaux principaux', 'Vaccination']
      };
    }
  };
  
  // Fonction pour envoyer un message au bot
  const sendMessage = useCallback(async (text = inputValue) => {
    if (!text.trim()) return;
    
    // Cacher les quick replies après envoi d'un message
    setQuickReplies([]);
    
    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: generateId(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Ajouter un message "typing" du bot
    setIsTyping(true);
    const typingMessage: Message = {
      id: generateId(),
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    try {
      // Tester avec une requête spécifique sur le ministère de la santé
      let botResponse;
      
      if (text.toLowerCase().includes('ministère de la santé') || text.toLowerCase() === 'que fais le ministere de la santé') {
        // Simuler un petit délai pour montrer l'animation de typing
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Appeler le webhook n8n
        botResponse = await fetchFromN8n(text);
      } else {
        // Obtenir la réponse du chatbot local pour les autres requêtes
        botResponse = await getLocalBotResponse(text);
      }
      
      // Supprimer le message "typing"
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      setIsTyping(false);
      
      // Ajouter la réponse du bot
      const botMessage: Message = {
        id: generateId(),
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        options: botResponse.options,
        attachments: botResponse.attachments
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Si des quick replies sont disponibles, les afficher
      if (botResponse.quickReplies && botResponse.quickReplies.length > 0) {
        const replies = botResponse.quickReplies.map(reply => ({
          text: reply,
          action: () => sendMessage(reply)
        }));
        setQuickReplies(replies);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      
      // Supprimer le message "typing"
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      setIsTyping(false);
      
      // Ajouter un message d'erreur
      const errorMessage: Message = {
        id: generateId(),
        text: "Je suis désolé, mais j'ai rencontré un problème technique. Veuillez réessayer plus tard.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  }, [inputValue]);
  
  // Fonction pour obtenir une réponse locale du bot (sans appel API)
  const getLocalBotResponse = async (userMessage: string): Promise<N8nResponse> => {
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, userMessage.length > 20 ? 2000 : 1000));
    
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Réponses basiques
    if (lowerCaseMessage.includes('bonjour') || lowerCaseMessage.includes('salut')) {
      return {
        text: 'Bonjour ! Comment puis-je vous aider avec les services ministériels togolais ?',
        options: [
          'Carte d\'identité/Passeport',
          'Création d\'entreprise',
          'Permis de conduire'
        ],
        quickReplies: ['Services populaires', 'Ministères', 'Contacts']
      };
    }
    
    // Carte d'identité et passeport
    if (lowerCaseMessage.includes('carte d\'identité') || lowerCaseMessage.includes('passeport') || lowerCaseMessage.includes('identité')) {
      return {
        text: 'Pour obtenir une carte d\'identité ou un passeport au Togo, voici la procédure :\n\n1️⃣ Rassembler les documents requis :\n• Certificat de nationalité\n• Certificat de résidence\n• Extrait de naissance original\n• 4 photos d\'identité récentes\n\n2️⃣ Se rendre au service d\'état civil de votre mairie\n\n3️⃣ Remplir le formulaire de demande\n\n4️⃣ Payer les frais administratifs\n\nLe délai de traitement est généralement de 2 à 4 semaines. Souhaitez-vous des informations sur une autre démarche ?',
        attachments: [
          { 
            type: 'image', 
            url: 'https://images.unsplash.com/photo-1616427431662-a15079dde7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3Nwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
          }
        ],
        quickReplies: ['Où se trouve ma mairie ?', 'Combien ça coûte ?', 'Autre service']
      };
    }
    
    // Création d'entreprise
    if (lowerCaseMessage.includes('entreprise') || lowerCaseMessage.includes('commerce') || lowerCaseMessage.includes('affaire')) {
      return {
        text: 'Pour créer une entreprise au Togo, la procédure a été simplifiée via le Centre de Formalités des Entreprises (CFE) :\n\n1️⃣ Préparer la documentation :\n• Statuts de l\'entreprise\n• Pièce d\'identité du ou des fondateurs\n• Plan de localisation du siège\n• Attestation de dépôt de capital (pour les SARL/SA)\n\n2️⃣ Déposer le dossier au CFE\n\n3️⃣ Obtenir le RCCM (Registre du Commerce) sous 24-72h\n\n4️⃣ S\'immatriculer à la Direction Générale des Impôts\n\nLe délai total est d\'environ 3 jours ouvrables. Puis-je vous aider sur un aspect particulier de cette démarche ?',
        attachments: [
          { 
            type: 'link', 
            url: 'https://cfetogo.tg',
            title: 'Centre de Formalités des Entreprises du Togo'
          }
        ],
        quickReplies: ['Types d\'entreprises', 'Coûts de création', 'Contact CFE']
      };
    }
    
    // Permis de conduire
    if (lowerCaseMessage.includes('permis') || lowerCaseMessage.includes('conduire') || lowerCaseMessage.includes('conduite')) {
      return {
        text: 'Pour obtenir un permis de conduire au Togo, voici les étapes à suivre :\n\n1️⃣ S\'inscrire dans une auto-école agréée par l\'État\n\n2️⃣ Suivre les cours théoriques et pratiques\n\n3️⃣ Passer l\'examen théorique (code de la route)\n\n4️⃣ Passer l\'examen pratique de conduite\n\n5️⃣ Une fois réussi, déposer un dossier à la Direction des Transports Routiers avec :\n• Attestation de réussite\n• Pièce d\'identité\n• Certificat médical\n• Photos d\'identité\n• Quittance de paiement\n\nLe permis est généralement disponible sous 2 semaines après validation du dossier.',
        attachments: [
          { 
            type: 'image', 
            url: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpdmluZyUyMGxpY2Vuc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' 
          }
        ],
        quickReplies: ['Coût du permis', 'Liste des auto-écoles', 'Validité du permis']
      };
    }
    
    // Éducation
    if (lowerCaseMessage.includes('école') || lowerCaseMessage.includes('éducation') || lowerCaseMessage.includes('inscription') || lowerCaseMessage.includes('étude')) {
      return {
        text: 'Le système éducatif togolais comprend plusieurs niveaux :\n\n🏫 Préscolaire (3-5 ans)\n🏫 Primaire (6-11 ans)\n🏫 Secondaire (12-18 ans)\n🏫 Supérieur (université)\n\nPour les inscriptions scolaires (juillet-septembre), vous aurez besoin de :\n• Extrait de naissance\n• Certificat de résidence\n• Livret scolaire (pour les transferts)\n• Frais d\'inscription\n\nPour les bourses d\'études, adressez-vous au Ministère de l\'Enseignement Supérieur avant le mois de juin.\n\nQuelle information spécifique recherchez-vous ?',
        quickReplies: ['Calendrier scolaire', 'Universités', 'Bourses d\'études']
      };
    }
    
    // Santé
    if (lowerCaseMessage.includes('santé') || lowerCaseMessage.includes('hôpital') || lowerCaseMessage.includes('médical') || lowerCaseMessage.includes('maladie')) {
      return {
        text: 'Le système de santé togolais est organisé en trois niveaux :\n\n🏥 Niveau primaire : Centres de santé de base dans chaque canton\n\n🏥 Niveau secondaire : Hôpitaux de district\n\n🏥 Niveau tertiaire : Centres Hospitaliers Régionaux et Universitaires\n\nPour l\'assurance maladie :\n• Les fonctionnaires peuvent s\'inscrire à l\'Institut National d\'Assurance Maladie (INAM)\n• Les travailleurs du secteur privé ont accès à des mutuelles de santé\n\nLes soins d\'urgence sont accessibles 24h/24 dans tous les hôpitaux publics.',
        attachments: [
          { 
            type: 'link', 
            url: 'https://sante.gouv.tg',
            title: 'Ministère de la Santé du Togo' 
          }
        ],
        quickReplies: ['Centres de santé', 'Vaccination', 'Assurance maladie']
      };
    }
    
    // Réponse pour une option sélectionnée
    if (lowerCaseMessage === 'carte d\'identité/passeport') {
      return {
        text: 'Pour obtenir une carte d\'identité ou un passeport au Togo, voici la procédure :\n\n1️⃣ Rassembler les documents requis :\n• Certificat de nationalité\n• Certificat de résidence\n• Extrait de naissance original\n• 4 photos d\'identité récentes\n\n2️⃣ Se rendre au service d\'état civil de votre mairie\n\n3️⃣ Remplir le formulaire de demande\n\n4️⃣ Payer les frais administratifs\n\nLe délai de traitement est généralement de 2 à 4 semaines.',
        quickReplies: ['Où se trouve ma mairie ?', 'Combien ça coûte ?', 'Autre service']
      };
    }
    
    // Réponse par défaut avec suggestions
    return {
      text: 'Je n\'ai pas toutes les informations sur ce sujet spécifique. Pour des informations plus précises, je vous invite à contacter directement le ministère concerné ou à visiter le portail e-Services du gouvernement togolais.\n\nVoici quelques sujets populaires :',
      options: [
        'Carte d\'identité/Passeport',
        'Création d\'entreprise',
        'Permis de conduire',
        'Services de santé',
        'Éducation'
      ],
      quickReplies: ['Contactez-nous', 'Liste des ministères', 'Retour au menu']
    };
  };
  
  return (
    <>
      {/* Bouton flottant pour ouvrir le chat (visible quand le chat est fermé ou minimisé) */}
      {(!isVisible || chatMinimized) && (
        <div className="chat-button">
          <button 
            className={`${isDarkMode ? 'bg-gray-800 text-green-400' : 'bg-primary text-white'} rounded-full p-4 shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center animate-pulse`}
            aria-label="Ouvrir le chat avec l'assistant IA"
            onClick={() => {
              setIsVisible(true);
              setChatMinimized(false);
            }}
          >
            <i className="fas fa-comments text-2xl"></i>
          </button>
        </div>
      )}
      
      {/* Fenêtre de chat */}
      {isVisible && !chatMinimized && (
        <div className={`fixed bottom-5 right-5 w-11/12 sm:w-96 md:w-96 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden ${isDarkMode ? 'border border-gray-700' : 'border border-gray-200'} transition-colors duration-300 ease-in-out`}
          style={{ maxHeight: 'calc(100vh - 40px)' }}
        >
          {/* Header du chat */}
          <div className={`px-5 py-4 flex justify-between items-center ${isDarkMode ? 'bg-primary' : 'bg-gradient-to-r from-primary to-emerald-700'}`}>
            <div className="flex items-center">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full flex items-center justify-center mr-3 shadow-md transition-transform transform hover:rotate-12`}>
                <i className={`fas fa-robot ${isDarkMode ? 'text-green-400' : 'text-primary'} text-lg`}></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Assistant e-Services</h3>
                <p className="text-xs text-white/90 flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Services Ministériels Togolais
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Paramètres"
              >
                <i className="fas fa-cog"></i>
              </button>
              <button 
                onClick={() => setChatMinimized(true)}
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Minimiser le chat"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Fermer le chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          
          {/* Panneau de paramètres */}
          {showSettings && (
            <div className={`p-4 ${isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-gray-50 border-b border-gray-200'}`}>
              <h4 className="font-medium mb-2">Paramètres</h4>
              <div className="flex items-center justify-between">
                <span>Thème sombre</span>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${isDarkMode ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <span 
                    className={`absolute ${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                  />
                </button>
              </div>
            </div>
          )}
          
          {/* Zone des messages */}
          <div 
            className={`flex-1 p-4 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
            style={{ height: '400px' }}
          >
            {messages.map((msg, index) => (
              <div key={msg.id} className="mb-6">
                <div 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Avatar du bot (uniquement pour les messages du bot) */}
                  {msg.sender === 'bot' && !msg.isTyping && (
                    <div className={`self-end w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2 ${isDarkMode ? 'bg-green-700' : 'bg-primary'}`}>
                      <i className="fas fa-robot text-white text-sm"></i>
                    </div>
                  )}
                  
                  {/* Message avec contenu */}
                  <div className={`max-w-[80%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    {/* Indicateur de frappe (uniquement pour le bot) */}
                    {msg.isTyping ? (
                      <div className={`px-4 py-3 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'} rounded-bl-none shadow-sm`}>
                        <div className="flex space-x-1">
                          <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-primary'} animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                          <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-primary'} animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                          <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-primary'} animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    ) : (
                      <div 
                        className={`px-4 py-3 rounded-2xl shadow-sm ${
                          msg.sender === 'user' 
                            ? isDarkMode 
                              ? 'bg-green-700 text-white rounded-br-none' 
                              : 'bg-primary text-white rounded-br-none'
                            : isDarkMode
                              ? 'bg-gray-700 rounded-bl-none'
                              : 'bg-white border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    )}
                    
                    {/* Horodatage */}
                    {!msg.isTyping && (
                      <span className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    )}
                    
                    {/* Pièces jointes */}
                    {msg.attachments && msg.attachments.map((attachment, i) => (
                      <div 
                        key={i} 
                        className={`mt-2 rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
                      >
                        {attachment.type === 'image' && (
                          <img 
                            src={attachment.url} 
                            alt="Illustration" 
                            className="w-full h-40 object-cover"
                          />
                        )}
                        {attachment.type === 'link' && (
                          <a 
                            href={attachment.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`p-3 flex items-center ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'}`}
                          >
                            <i className="fas fa-external-link-alt mr-2 text-blue-500"></i>
                            <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{attachment.title || attachment.url}</span>
                          </a>
                        )}
                      </div>
                    ))}
                    
                    {/* Options de réponse rapide */}
                    {msg.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.options.map((option, i) => (
                          <button
                            key={i}
                            onClick={() => sendMessage(option)}
                            className={`px-3 py-2 rounded-full text-sm transition-all ${
                              isDarkMode 
                                ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
                                : 'bg-white hover:bg-gray-100 border border-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick replies */}
          {quickReplies.length > 0 && (
            <div className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={reply.action}
                    className={`px-3 py-2 text-sm rounded-full transition-all ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Zone de saisie de message */}
          <div className={`p-4 ${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tapez votre question..."
                className={`flex-1 py-3 px-4 rounded-full focus:outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-300 focus:ring-2 focus:ring-primary/50'
                }`}
                disabled={isTyping}
              />
              <button 
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  !isTyping && inputValue.trim() 
                    ? isDarkMode 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white' 
                    : isDarkMode 
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="mt-2 text-center">
              <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Service d'information sur les prestations ministérielles togolaises
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat minimisé */}
      {isVisible && chatMinimized && (
        <div 
          className={`fixed bottom-24 right-8 ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'} rounded-full shadow-lg z-50 border p-3 cursor-pointer flex items-center space-x-2`}
          onClick={() => setChatMinimized(false)}
        >
          <div className={`w-8 h-8 ${isDarkMode ? 'bg-green-700' : 'bg-primary'} rounded-full flex items-center justify-center`}>
            <i className="fas fa-robot text-white"></i>
          </div>
          <span className="font-medium pr-2">Assistant e-Services</span>
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>
        </div>
      )}
    </>
  );
}