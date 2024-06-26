import { useState } from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/svg/close.svg";
const Cart = ({ cart, handleRemoveOne, handleAddOne, handleMenu }) => {
  const [total, setTotal] = useState(0);
  const [validateDiscount, setValidateDiscount] = useState("");


  const removeOne = (product) => {
    handleRemoveOne(product);
  };

  const addOne = (product) => {
    handleAddOne(product);
  };
  const closeMenu = () => {
    handleMenu(false);
  };

  const applicateDiscount = (e) => {
    e.preventDefault();
    const discountValue = e.target.discount.value;
    const CODE = "SAVE10";
    if (discountValue === CODE) {
      let total = cart.reduce(
        (acc, item) => acc + item.product.price * item.count,
        0
      );
      total = total * (1 - 0.1);
      setTotal(total.toFixed(2));
      setValidateDiscount("Código aplicado correctamente");
    } else {
      setValidateDiscount("Error en el código promocional");
    }
  };

  return (
    <>
      <div className="menu__lateral">
        <div className="menu__lateral__header">
          <h2>Carrito</h2>
          <img src={closeIcon} onClick={closeMenu} alt="Cerrar" />
        </div>
        <p>Tienes 
          <span className="text--primary text--bold"> &nbsp; 
            {cart.reduce((acc, item) => acc + item.count, 0)}
          </span> 
          &nbsp; productos en el carrito</p>
        {cart.map((product) => (
          <div key={product.product.id} className="cart__container__product">
            <img
              src={product.product.thumbnail}
              className="product__image"
              alt={product.product.title}
            />
            <div className="cart__container__product__body">
              <h5 className="product__title">{product.product.title}</h5>
              <p className="product__price">{product.product.price.toFixed(2)}€</p>
              <p className="product__author">{product.product.author}</p>

              <div className="cart__container__product__footer">
                <button
                  className="btn btn--outline"
                  onClick={() => removeOne(product.product)}
                >
                  -
                </button>
                <button className="btn btn--outline">{product.count}</button>
                <button
                  className="btn btn--outline"
                  onClick={() => addOne(product.product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="discount">
          <form onSubmit={applicateDiscount} className="discount__form">
            <input
              className="input input--primary"
              type="text"
              name="discount"
              placeholder="Código promocional"
            />
            <button className="btn btn--outline" type="submit">
              Aplicar
            </button>
          </form>
          <div >
            <p className={`${validateDiscount ? 'discount__message' : ''}`}>{validateDiscount}</p>
          </div>
        </div>
        <div className="total">
          <div>
          <p>
            {cart.reduce((acc, item) => acc + item.count, 0)} productos
          </p>
          <p>
            {total === 0
              ? cart
                  .reduce(
                    (acc, item) => acc + item.product.price * item.count,
                    0
                  )
                  .toFixed(2)
              : total}
            €{" "}
          </p>          

          </div>
          <button className="btn btn--primary">Comprar</button>
        </div>
      </div>
    </>
  );
};
Cart.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  handleAddOne: PropTypes.func.isRequired,
  handleRemoveOne: PropTypes.func.isRequired,
};

export default Cart;
