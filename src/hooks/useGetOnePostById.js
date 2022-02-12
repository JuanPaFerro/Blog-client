import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetOnePostById = (id) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return { post, loading };
};

export { useGetOnePostById };
