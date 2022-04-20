import { useState, useEffect } from "react";
import axios from "axios";

const useGetOneUserById = (id) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${id}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  return { user, loading };
};

export { useGetOneUserById };
