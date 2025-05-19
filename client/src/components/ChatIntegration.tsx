import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function ChatIntegration() {
  useEffect(() => {
    // Créer l'instance du chat lors du chargement du composant
    const chatInstance = createChat({
      webhookUrl: '', // À remplacer par votre URL webhook
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'fr',
      initialMessages: [
        'Bonjour ! 👋',
        'Je suis votre assistant virtuel pour les services ministériels togolais. Comment puis-je vous aider aujourd\'hui ?'
      ],
      i18n: {
        fr: {
          title: 'Services Ministériels Togolais',
          subtitle: "Posez vos questions sur les démarches administratives au Togo",
          footer: '',
          getStarted: 'Nouvelle conversation',
          inputPlaceholder: 'Tapez votre question...',
        },
      },
    });

    // Nettoyer lors du démontage du composant
    return () => {
      if (chatInstance && typeof chatInstance.destroy === 'function') {
        chatInstance.destroy();
      }
    };
  }, []);

  return (
    <div id="n8n-chat" className="hidden"></div>
  );
}

// Exporter une fonction d'initialisation pour ouvrir le chat manuellement
export function openChat() {
  const chatButton = document.querySelector('.n8n-chat-window-button');
  if (chatButton && chatButton instanceof HTMLElement) {
    chatButton.click();
  }
}