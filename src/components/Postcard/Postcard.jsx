import React from "react";

import "./Postcard.css";

const PostCard = ({ author, content, image, date }) => {
  return (
    <div className="postcard">
      <div className="author">
        <div className='author__avatar"'>
          <img className="author__avatar-img" src={author.photo} alt="avatar" />
        </div>
        <div className="author-info">
          <a className="author-info__name" href="#">
            {author.name}
          </a>
          <a className="author-info__nickname" href="#">
            {author.nickname}
          </a>
          <a className="author-info__date" href="#">
            {date}
          </a>
        </div>
      </div>
      <div className="post">
        <p className="post__content">{content}</p>
        <img className="post__img" src={image} alt="post-image" />
      </div>
    </div>
  );
};

export { PostCard };
