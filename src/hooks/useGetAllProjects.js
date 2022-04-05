import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      const res = await axios.get("http://192.168.1.103:5000/api/projects");
      setProjects(res.data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};
