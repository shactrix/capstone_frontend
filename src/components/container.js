import React from "react";
import { Link } from "react-router-dom";
import Button from './button';
import '../styles/container.css'

const Container = (props) => {
  const { post } = props;

  return (
    <div className="container">
      <div className="row g-4">
        <div key={post._id} className="col-12 col-lg-4 col-xxl-3">
          <div className="post">
            <div className="post-body">
              <div className="container-content">
                <p className="post-text">{post.text}</p>
                <p className="post-image">{post.image}</p>
              </div>
              <div className="postButtons">
                <Button to={`/rvs/${post._id}/edit`} label="Edit" className='button' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;