import propsTypes from 'prop-types'
import cartIcon from '../assets/svg/cart.svg'
const ProductItem = ({ product, handleAddCart}) => {

  const addCart = () =>{
    handleAddCart(product)
  }
  return(
    <div key={product.id} className="product">
    <img
      src={product.thumbnail}
      className="product__image"
      alt={product.title}
    />
    <div className="product__body">
      <div className="product__body__header">
        <h5>{product.title}</h5>
        <p>{product.price.toFixed(2)}€</p>
      </div>
      <div className="product__body__description">
        <p>{product.author}</p>
      </div>
      <div className="product__body__footer">
        <button className="btn btn--primary" onClick={addCart} ><img src={cartIcon}/>AÑADIR AL CARRITO</button>
      </div>
    </div>
  </div>
  )
}
ProductItem.propTypes = {
  handleAddCart: propsTypes.func.isRequired,
  product: propsTypes.shape(
    {
      id: propsTypes.number,
      title: propsTypes.string,
      thumbnail: propsTypes.string,
      price: propsTypes.number,
      author: propsTypes.string
    }
  ).isRequired
}

export default ProductItem
