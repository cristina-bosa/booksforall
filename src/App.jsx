import ListProducts from "./components/ListProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import hero from "./assets/images/hero.png";
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="container__presentation">
          <div className="container__presentation__content">
            <h1 className="container__presentation__content__title">We believe words have the power to heal</h1>
            <p className="container__presentation__content__description">We have a wide variety of books for all tastes and ages. Find the book you are looking for and enjoy reading it.</p>
          </div>
          <div className="container__presentation__img">
            <img src={hero} alt="" />
          </div>
        </section>        
        <ListProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
