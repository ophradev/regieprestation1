/**
 * N8N Chat Integration
 * This file manages the integration with n8n chat widget
 */

// This function will dynamically load the N8N Chat library and initialize it
export function initializeN8NChat() {
  // Add the N8N Chat stylesheet
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/style.css';
  document.head.appendChild(styleLink);

  // Load the N8N Chat script
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/chat.umd.js';
  script.async = true;
  script.onload = () => {
    // Once the script is loaded, initialize the chat
    if ((window as any).n8nChat && (window as any).n8nChat.createChat) {
      (window as any).n8nChat.createChat({
        webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || 'YOUR_PRODUCTION_WEBHOOK_URL',
        // Add any additional customization options here
      });

      // Add click event to the chat button to open the chat
      const chatButton = document.getElementById('open-n8n-chat');
      if (chatButton) {
        chatButton.addEventListener('click', () => {
          try {
            const chatToggleButton = document.querySelector('.n8n-chat--toggle-button');
            if (chatToggleButton) {
              (chatToggleButton as HTMLElement).click();
            }
          } catch (error) {
            console.error('Error opening N8N chat:', error);
          }
        });
      }
    }
  };
  
  document.body.appendChild(script);
}