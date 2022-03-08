import { useState, useEffect } from "react";
import axios from "axios";

export function useAboutInfo() {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAbout = async () => {
      const res = await axios.get("http://localhost:5000/api/about");
      setAbout(res.data[0]);
      setLoading(false);
    };
    fetchAbout();
  }, []);

  return { about, loading };
}
