import React from 'react'
import IMG1 from "../../assests/portfolio1.jpg"
import IMG2 from "../../assests/portfolio2.jpg"
import IMG3 from "../../assests/portfolio3.jpg"
import IMG4 from "../../assests/portfolio4.jpg"
import IMG5 from "../../assests/portfolio5.png"
import IMG6 from "../../assests/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio_container">
   <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
    <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
    <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
    <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
    <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
    <article className='portfolio-item'>
 <div className="portfolio_item-image">
  <img src={IMG1} alt='IMG1' />
 </div>

  <h3>This is a portfolio item title</h3>

  <a href="https://github.com/shabbiryahya/Anthropologie-Project-fork-" className='btn'rel="noreferrer" >Github</a>
  <a href="https://github.com/shabbiryahya" rel="noreferrer" className='btn btn-primary' >Live Demo</a>
  

    </article> 
  </div>

    </section>
  )
}

export default Portfolio