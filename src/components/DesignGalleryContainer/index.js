import React, { useEffect } from 'react';
import DesignGallery from '../DesignGallery';
import { setDesignArticles } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import { parseXML } from '../helpers';

function DesignGalleryContainer() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.currentArticles.designArticles)
  const RSS_URL = `https://historytheorymethodology.wordpress.com/category/design-gallery/feed`;
  
  useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`)
    .then(response => response.text())
    .then(text => JSON.parse(text).contents)
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => parseXML(data))
    .then(parsed => {
      console.log(parsed.channel.item, ' this is the item')
      dispatch(setDesignArticles(parsed.channel.item))
    })
    .catch(function(e) {
      console.error(e.message)
    })
  }, [])
  
  return <DesignGallery articles={articles} />
}

export default DesignGalleryContainer;