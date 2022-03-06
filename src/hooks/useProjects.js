import { useEffect, useState } from "react";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        image: "",
        title: "Title 1",
        content: "lorem ipsum dolor sit amet",
        link: "",
      },
      {
        id: 2,
        image: "",
        title: "Title 2",
        content: "lorem ipsum dolor sit amet",
        link: "",
      },
      {
        id: 3,
        image: "",
        title: "Title 3",
        content: "lorem ipsum dolor sit amet",
        link: "",
      },
      {
        id: 4,
        image: "",
        title: "Title 4",
        content: "lorem ipsum dolor sit amet",
        link: "",
      },
    ]);
  }, []);

  return { projects, setProjects };
};
