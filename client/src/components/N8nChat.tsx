import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function N8nChat() {
  useEffect(() => {
    // Utiliser le code que vous avez fourni
    createChat({
      webhookUrl: '',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Bonjour ! 👋',
        'Je suis votre assistant virtuel pour les services ministériels togolais. Comment puis-je vous aider aujourd\'hui ?'
      ],
      i18n: {
        en: {
          title: 'Services Ministériels Togolais',
          subtitle: "Posez vos questions sur les démarches administratives au Togo",
          footer: '',
          getStarted: 'Nouvelle Conversation',
          inputPlaceholder: 'Tapez votre question...',
        },
      },
    });
  }, []);

  return (
    <div id="n8n-chat"></div>
  );
}