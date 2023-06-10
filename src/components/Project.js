import React from "react";
import { FaGithub } from 'react-icons/fa';

function Portfolio(props) {
    const images = [
      {
        alt: 'Weather Forecast',
        href: 'https://philrug.github.io/weather-app/',
        text: 'A weather app that can provide you with current and 5 day forecasts for any city in the world. Uses HTML, CSS and Javascript.',
        github: 'https://github.com/PhilRug/weather-app'
      },
      {
        alt: 'Password Generator',
        href: 'https://philrug.github.io/password-generator/',
        text: 'This is an app for generating random passwords. Uses HTML, CSS and Javascript.',
        github: 'https://github.com/PhilRug/password-generator'
      },
      {
        alt: 'Little Big Sales',
        href: 'https://project-faust.github.io/little-big-sales/',
        text: 'This app lets users search for video game sales (computer only) and converts the cost to any other major currency (currently 10 different ones). This app uses Bulma CSS and two external APIs: Cheapshark API and a currency converter API',
        github: 'https://github.com/Project-Faust/little-big-sales'
      },
      {
        alt: 'Hori-Hori',
        href: 'https://vast-reaches-42188.herokuapp.com/',
        text: 'This app lets users pin the location of invasive species of plants. This app uses the api Leaflet for map functionality',
        github: 'https://github.com/PhilRug/hori-hori'
      },
      {
        alt: 'Text-Editor',
        href: 'https://dry-tundra-55082.herokuapp.com/',
        text: 'This app uses PWA techniques to allow for offline access. The app lets the user create notes or code snippets without an internet connection so that they can retrieve them for later use.',
        github: 'https://github.com/PhilRug/text-editor'
      }
      ,
      {
        alt: '',
        href: '',
        text: '',
        github: ''
      }
    ]
  
    return (
      <section className="portfolio">
          <h2>Portfolio</h2>
           {images.map((image, i) => (
               <div className="span">
                  <img src={require(`../Images/${i}.png`)} alt={image.alt}/>
                  <div className="image_overlay">
                      <span className="image_title" onClick={() => window.open(`${image.href}`)}>{image.alt}</span>
                      <p className="image_description">{image.text}</p>
                      <span className="githubLink"><FaGithub onClick={() => window.open(`${image.github}`)}/></span>
                  </div>
               </div>
      ))}
      </section>
  )
  }
   
  export default Portfolio;