import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/container'
import Button from '../components/button'
import '../styles/show.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data.data);
        } else {
          console.error('Error fetching posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const reversedPosts = [...posts].reverse();

  return (
    <div className="show-page">
      <h1>Available RV's</h1>
      {/* <Button to={`/`} label="Home" /> */}
      <Button to={`/rvs/new`} label="Add" className='button' />
      
      {Array.isArray(reversedPosts) &&
        reversedPosts.map((post) => (
          <div key={post._id} className='container'>
            <Container post={post}/>
            {/* <Button to={`/rvs/${post._id}`} label="Delete" className='button' /> */}
          </div>
        ))}
    </div>
  );
};

export default ShowPosts;