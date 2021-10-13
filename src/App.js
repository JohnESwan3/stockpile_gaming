import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import SingleReview from './components/SingleReview.js';
import Review from './components/Review.js';
import SingleArticle from './components/SingleArticle.js';
import Article from './components/Article.js';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleReview} path="/review/:slug" />
        <Route component={Review} path="/review" />
        <Route component={SingleArticle} path="/article/:slug" />
        <Route component={Article} path="/article" />
        <Route component={SignUp} path="/signup" />
        <Route component={LogIn} path="/login" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
