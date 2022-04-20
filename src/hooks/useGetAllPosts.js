import { useState, useEffect } from "react";
import axios from "axios";

export function useGetAllPosts() {
  const [posts, setPosts] = useState([]);
  const [firstPost, setFirstPost] = useState({});
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingPosts(true);
    const fetchPosts = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
      const data = res.data;
      const firstPostHolder = data.shift();
      setPosts(data);
      setFirstPost(firstPostHolder);
      setLoadingPosts(false);
      
    };
    fetchPosts();
  }, []);

  return { firstPost, posts, loadingPosts };
}
