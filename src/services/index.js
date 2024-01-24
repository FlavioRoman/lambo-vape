import axios from "axios";
// import Cookies from "js-cookie";

const createAxiosInstance = () => {
  // const token = Cookies.get("token-authentication");
  return axios.create({
    baseURL: "https://staging-countries-open-api.exosys.com.py",
    // headers: { Authorization: `Bearer ${token}` },
  });
};

// ::::: GET :::::
export const get = async () => {
  const instance = createAxiosInstance();
  const res = await instance.get(``);
  return res.data;
};

// ::::: POST :::::
export const post = async () => {
  const instance = createAxiosInstance();
  const res = await instance.post(``);
  return res.data;
};

// ::::: DELETE :::::
export const delete_ = async () => {
  const instance = createAxiosInstance();
  const res = await instance.delete(``);
  return res.data;
};

// ::::: UPDATE :::::
export const patch = async () => {
  const instance = createAxiosInstance();
  const res = await instance.patch(``);
  return res.data;
};
