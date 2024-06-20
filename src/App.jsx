import Form from "./components/Form";
import Card from "./components/Card";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const getPosts = async (url) => {
    const allPosts  = await axios.get(url);
    setPosts(allPosts.data);
  }

  const getCategories = async (url) => {
    const allCategory = await axios.get(url);
    setCategories(allCategory.data);
  }

  const getTags = async (url) => {
    const allTags = await axios.get(url);
    setTags(allTags.data);
  }

  useEffect(() =>{
    getPosts(`${apiBaseUrl}/posts`);
    getCategories(`${apiBaseUrl}/categories`);
    getTags(`${apiBaseUrl}/tags`);
  },[])

  return (<>
    <Card
      posts={posts}
    />
    <Form 
      categories={categories}
      tags={tags}
    />
  </>)
}

export default App
