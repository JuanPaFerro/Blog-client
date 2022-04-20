import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`);
      setProjects(res.data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};
