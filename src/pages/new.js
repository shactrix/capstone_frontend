import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/new.css'

// import { useContext } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function NewPost({ createPost, setPosts }) {
  const navigate = useNavigate();
//   const { post } = useContext(PostsContext)
  const [isClicked, setIsClicked] = useState(false);

  

  const [postData, setPostData] = useState({
    text: '',
    image: '', 
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(postData);
      setPostData({
        text: '',
        image: '',
      });
      navigate('/posts');
    } catch (error) {
      console.error(error);
    }
  };
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };
  const formClassName = isClicked ? 'white' : '';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [setPosts]);

  return (
    <div className='new-page'>
      <section className='new'>
      <div className='new-container'>
      <form className={formClassName} onSubmit={handleSubmit}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
            <div className="toggle-handle"></div>
          </div>
      <h1>Create a Post</h1>
        <textarea
          className='textarea third-input'
          name="text"
          value={postData.text}
          placeholder="text"
          onChange={handleChange}
        /><br></br>
        <input
          className='fourth-input'
          type="text"
          name="image"
          value={postData.image}
          placeholder="Image URL"
          onChange={handleChange}
        /><br></br>
        <button type="submit" className="button add" style={{width:'20vw', color:'black', marginTop:'3rem'}} role="button">Post</button>
      </form>
      </div>
      </section>
    </div>
  );
}

export default NewPost;