import React, { useState, useEffect } from 'react';
import { makeArticleCards } from '../helpers';
import './ArticlesList.css';

function ArticlesList(props) {
  const [cards, setCards] = useState([])

  function hideDropdown() {
    let dropdown = document.getElementById('dropdown')
    let compStyles = window.getComputedStyle(dropdown);
    let px = compStyles.getPropertyValue('top')
    if (px === '0px') document.getElementById('dropdown').style.top = '-200px'
  }
  
  useEffect(() => {
    let cards = makeArticleCards(props.articles, props.type)
    setCards(cards)
  }, [props])
  
  return (
    <div id='articlesList' onClick={() => hideDropdown()}>
      {cards}
    </div>
  )
}

export default ArticlesList;