import{ useState, useEffect } from "react";
import axios from "axios";

const useGetOnePostById = (id) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get(`http://192.168.1.103:5000/api/posts/${id}`);
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  return { post, loading };
};

export { useGetOnePostById };
