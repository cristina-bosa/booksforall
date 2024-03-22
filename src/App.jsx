import ListProducts from "./components/ListProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="container">  
        <ListProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
