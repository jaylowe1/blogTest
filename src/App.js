import React from 'react';

// my componets
import Trio from './Grid';
import Duo from './Duo.js';
import Header from './Header';
import Demo_ani from'./Demo_ani';
import CardR from './CardR';
import Card2 from './Card2.js';
import Demo from './Demo.js';
import About from './About.js';

// blog articles
import BlogOne from './blog_posts/BlogOne.js';
import BlogTwo from './blog_posts/BlogTwo.js';
import BlogThree from './blog_posts/BlogThree.js';

// navigational routing components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// media query components
import { Breakpoint, BreakpointProvider } from 'react-socks';

// styling rules
import './App.css';




// javascript data object using react components as a value, components
// then use props.children to pass in unique information in the form of
// another jsx component.
var articles = [
  {title:'BlogOne', 
  link:'/blog_posts/BlogOne.js',
  article: <BlogOne />,
  card: 
    <CardR cardName="one"/> },

  {title:'BlogTne', 
  link:'/blog_posts/BlogTwo.js',
  article: <BlogTwo />,
  card:
    <CardR cardName="two"/> },

  {title:'BlogThree', 
  link:'/blog_posts/BlogThree.js',
  article: <BlogThree />,
  card:
    <CardR cardName="three" />},
    
  {title:'About', 
  link:'/About.js',
  article: <About />,
  card:
    <CardR cardName="about"/> },

  {title:'cap', 
  link:'',
  article:"",
  card:
    ""},
  
]

function App() {
  return (    
    <div className="App">

      <Header />
    
      <BreakpointProvider>

        <Breakpoint small down>
          <div>
            <Router>
              <div>
                <nav>
                  <Link to="/">Home</Link>
                  {articles.map(article => (
                    <Link to={article.link}>{article.card}</Link>
                  ))}
                </nav>

                <Switch>
                    {articles.map(article => (
                      <Route path={article.link}>
                        {article.article}
                      </Route>
                    ))}
                  </Switch>
              </div>
            </Router>
          </div>  


        </Breakpoint>

        <Breakpoint medium>
          <Duo />
          <Duo />
          <Duo />
        </Breakpoint>

        <Breakpoint large up>
          <Trio />
          <Demo_ani></Demo_ani>
          <Trio />
          <Trio />
        </Breakpoint>

      </BreakpointProvider>

    </div>
  );
}

export default App;


////lessons learned!

//className = "App" must in app div
//react components must start with a capital
//the 'from' stuff always uses lower case
//put the css import references in index.js
//react defaults to the public directory for images so just use /imageName.png
//problem solve in new apps with less complexity before integration
//typically things will be installed, imported, used.import React from 'react';
//react router uses links to generate clickable thing but the switch does the changin
//using links properly renders populating cards via prop.child obsolete
//