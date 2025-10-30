import axios from "axios";

// O servidor backend está rodando localmente na porta 3000
const api = axios.create({
    baseURL: "https://localhost:3000",
    timeout: 5000, // URL BASE DA API (HTTP para desenvolvimento local)
});

export default api;