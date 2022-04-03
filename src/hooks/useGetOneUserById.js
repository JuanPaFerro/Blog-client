import { useState, useEffect } from "react";
import axios from "axios";

const useGetOneUserById = (id) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return { user, loading };
};

export { useGetOneUserById };
