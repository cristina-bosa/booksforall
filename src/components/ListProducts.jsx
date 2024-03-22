import { useState, useEffect } from "react";
import data from "../data/libros.json";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import cartIcon from "../assets/svg/cart.svg";
const ListProducts = () => {
  const [products] = useState(data);
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    const initialValue = JSON.parse(stored);
    return initialValue || [];
  });
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddCart = (product) => {
    console.log(product);
    const isOnCart = cart.find((item) => item.product.id === product.id);
    if (isOnCart) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, count: 1 }]);
    }
    setIsCartVisible(true);
  };

  const addOne = (product) => {
    console.log(product);
    const isOnCart = cart.find((item) => item.product.id === product.id);
    if (isOnCart) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, count: 1 }]);
    }
    setIsCartVisible(true);
  };

  const removeOne = (product) => {
    console.log(product);
    const updatedCart = cart.map((item) =>
      item.product.id === product.id ? { ...item, count: item.count - 1 } : item
    );
    const filtered = updatedCart.filter((item) => item.count > 0);
    setCart(filtered);
    setIsCartVisible(true);
  };
  const isMenuOpen = () => {
    setIsCartVisible(false);
  };
  return (
    <>
      <div className="products__cart">
        <button
          className="btn btn--primary"
          onClick={() => setIsCartVisible(true)}
        >
          <img src={cartIcon} />
          Mirar carrito
        </button>
      </div>
      <section className="products__container">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </section>
      <section className="cart__container">
        {cart.length > 0 && isCartVisible && (
          <Cart
            cart={cart}
            handleRemoveOne={removeOne}
            handleAddOne={addOne}
            handleMenu={isMenuOpen}
          />
        )}
      </section>
    </>
  );
};

export default ListProducts;

// {cart.map((product) => (
//   <div key={product.product.id} className="cart__container__product">
//     <img
//       src={product.product.thumbnail}
//       className="product__image"
//       alt={product.product.title}
//     />
//     <div className="cart__container__product__body">
//       <h5>{product.product.title}</h5>
//       <p>{product.product.price.toFixed(2)}€</p>
//       <p>{product.product.author}</p>

//       <div className="cart__container__product__footer">
//         <button
//           className="btn btn--outline"
//           onClick={() => removeOne(product.product)}
//         >
//           -
//         </button>
//         <button className="btn btn--outline">{product.count}</button>
//         <button
//           className="btn btn--outline"
//           onClick={() => addOne(product.product)}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   </div>
// ))}
