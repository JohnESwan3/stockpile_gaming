import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import AllReviews from './components/AllReviews.js';
import ReviewPage from './components/ReviewPage.js';
import AllArticles from './components/AllArticles.js';
import ArticlePage from './components/ArticlePage.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={AllReviews} path="/reviews" />
        <Route component={ReviewPage} path="/reviews/:slug" />
        <Route component={AllArticles} path="/articles" />
        <Route component={ArticlePage} path="/articles/:slug" />
        <Route component={About} path="/about" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
