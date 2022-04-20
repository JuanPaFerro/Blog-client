import { useState, useEffect } from "react";
import axios from "axios";

export function useAboutInfo() {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAbout = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/about`);
      setAbout(res.data[0]);
      setLoading(false);
    };
    fetchAbout();
  }, []);

  return { about, loading };
}
