import axios from "axios";

// Configura a URL base a partir das variáveis de ambiente
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // Define o Content-Type padrão
  },
});

export default api;
