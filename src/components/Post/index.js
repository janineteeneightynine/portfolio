import React from 'react';
import { NavLink } from 'react-router-dom';
import { decodeHTMLEntities } from '../helpers';
import './Post.css';

function Post(props) {
  let paragraph;
  if (props.paragraph) paragraph = decodeHTMLEntities(props.paragraph)
  return (
    <NavLink to={`/articles/${props.type}/${props.title}`} className='post' >
      <div className='postImage' style={{backgroundImage: `url(${props.img})`}}>
        <span class="background-image" role="img" aria-label={`thumbnail for article with the title ${props.title}`}> </span>
      </div>
      <div className='postTitle'> <b> {props.title} </b>  </div>
      <div className='postParagraph'> 
        {paragraph} . . . 
      </div>
      <div className='readMore'> {'Continue Reading >'} </div>
    </NavLink>
  )
}

export default Post;