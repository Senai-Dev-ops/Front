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

  async generalData(page = 0, size = 4) {
    const response = await API.get(`?page=${page}&size=${size}&sort,dec`);
    const data = response.data;

    const res = {
      content: data.content,
      pageNumber: data.pageable.pageNumber,
      totalPages: data.totalPages,
    };

    return res;
  }
}
