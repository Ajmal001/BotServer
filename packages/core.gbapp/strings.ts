
export const Messages = {
  'en-US': {
    show_video: 'I will show you a video, please wait...',
    good_morning: 'good morning',
    good_evening: 'good evening',
    good_night: 'good night',
    hi: (msg) => `Hello, ${msg}.`,
    very_sorry_about_error: `I'm sorry to inform that there was an error which was recorded to be solved.`,
    global_quit: /^(quit|Quit)/i,
    canceled: 'Canceled. If I can be useful, let me know how',
    whats_email: "What's your E-mail address?",
    validation_enter_valid_email: "Please enter a valid e-mail."   
  },
  'pt-BR': {
    show_video: 'Vou te mostrar um vídeo. Por favor, aguarde...',
    good_morning: 'bom dia',
    good_evening: 'boa tarde',
    good_night: 'boa noite',
    hi: (msg) => `Oi, ${msg}.`,
    very_sorry_about_error: `Lamento, ocorreu um erro que já foi registrado para ser tratado.`,
    global_quit: /^(sair|Sair)/i,
    canceled: 'Cancelado, avise como posso ser útil novamente.',
    whats_email: "Qual seu e-mail?",
    validation_enter_valid_email: "Por favor digite um email válido."
  }
};
