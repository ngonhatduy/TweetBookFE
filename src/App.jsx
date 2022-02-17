import logo from './logo.svg';
import './App.css';
import Info from './core/Info/views/info';
import HambergerMenu from './core/HumbergerMenu/views/HambergerMenu';
import BookCategories from './core/BookCategories/views/BookCategories';
import Search from './core/Search/views/Search';
import BigBanner from './core/BigBanner/views/BigBanner'
import Slider from './core/Slider/views/Slider';
import FeatureProducts from './core/FeatureProducts/views/FeatureProducts';
import Footer from './core/Footer/views/Footer'
function App() {
  return (
    <div className="MainDiv">
    <div class="humberger__menu__overlay"></div>
     
      <header class="header">
        <Info/>
        <HambergerMenu/>
      </header>
    
      <section class="hero">
          <div class="container">
              <div class="row">
                <BookCategories/>
                  <div class="col-lg-9">
                    <Search />
                    <BigBanner/>
                  </div>
              </div>
          </div>
      </section>
     
      <section class="categories">
        <Slider/>
      </section>
    
      <section class="featured spad">
          <FeatureProducts/>
      </section>
      <footer class="footer spad">
        <Footer/>
      </footer>
  </div>
  );
}

export default App;
