import axios from "axios";
import { BASE_URL } from "./BaseURL";

const API = axios.create({
  baseURL: BASE_URL,
});

export default class ConnectionAPI {
  async cardsValues() {
    const response = await API.get("/somas-totais");
    const data = response.data[0];
    return data;
  }

  async successTax() {
    const response = await API.get("/success-by-seller");
    const data = response.data;
    return data;
  }

  async sellsValues() {
    const response = await API.get("/amount-by-seller");
    const data = response.data;
    return data;
  }

  async generalData() {
    const response = await API.get(`?page=0&size=171&sort,dec`);
    const data = response.data;

    return data.content;
  }
}
