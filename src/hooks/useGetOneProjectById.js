import { useState, useEffect } from "react";
import axios from "axios";

const useGetOneProjectById = (id) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
      setProject(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  return { project, loading };
};

export { useGetOneProjectById };
