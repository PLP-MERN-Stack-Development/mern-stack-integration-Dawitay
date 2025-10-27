import { useState } from "react";
import API from "../services/api";

export default function useApi(endpoint, method = "get") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (payload = null, id = "") => {
    setLoading(true);
    try {
      const url = id ? `${endpoint}/${id}` : endpoint;
      const res = await API[method](url, payload);
      setData(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callApi, setData };
}
