import axios from "axios";

export const instance = axios.create({
  baseURL: "https://staging-countries-open-api.exosys.com.py/api/",
  timeout: undefined,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const Countrys = async (data) => {
  const response = await instance.get(`countries`, data);
  return response.data.data.rows;
};
