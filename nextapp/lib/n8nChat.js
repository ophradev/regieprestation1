// Définition pour TypeScript
if (typeof window !== 'undefined') {
  window.n8nChat = window.n8nChat || null;
  window.createChat = window.createChat || null;
}

export function initializeN8NChat() {
  // Vérifier si le chat existe déjà
  if (typeof window !== 'undefined' && window.n8nChat) {
    return;
  }

  // Si le script est déjà chargé et createChat est disponible
  if (typeof window !== 'undefined' && window.createChat) {
    initChat();
    return;
  }

  // Charger la feuille de style n8n chat si elle n'est pas déjà chargée
  if (typeof window !== 'undefined' && !document.querySelector('link[href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"]')) {
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(styleLink);
  }

  // Charger le script n8n chat
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      initChat();
    };
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    document.head.appendChild(script);
  }
}

function initChat() {
  try {
    if (typeof window !== 'undefined' && typeof window.createChat === 'function') {
      window.n8nChat = window.createChat({
        webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL', // Remplacez par votre URL webhook
        chatOptions: {
          theme: {
            primaryColor: '#006B3F',
            secondaryColor: '#FFCE00',
            fontFamily: 'Poppins, sans-serif'
          },
          messages: {
            welcomeMessage: 'Bonjour ! Je suis votre assistant virtuel pour les prestations des ministères togolais. Comment puis-je vous aider aujourd\'hui ?'
          },
          chatPosition: 'right',
          chatWindow: {
            title: 'Assistant Virtuel des Services Ministériels',
            showCloseButton: true
          }
        }
      });
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation du chat n8n:', error);
  }
}