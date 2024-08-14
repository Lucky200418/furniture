/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);

  function sendToWhatsApp(message) {
    // Encode the message to be URL-friendly
    const encodedMessage = encodeURIComponent(message);

    // Client's WhatsApp number (replace with actual number)
    const whatsappNumber = "14039660991"; // Use the full international format without '+' or '00'

    // WhatsApp URL scheme to open chat with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappUrl, "_blank");
  }

  const HandleWhatsappMsg = () => {
    let msgArr = [
      `Hello there, I  want to buy ${cartList.length} Items, Total amount:₦${totalPrice}:\n\n`,
    ];

    cartList.forEach((item, i) => {
      let template = `Item ${i + 1}\nName: ${item.productName}\nPrice: ₦${
        item.discount > 0 ? (item.discount / 100) * item.price : item.price
      }\nImage: ${item.imgUrl}\n\n`;
      msgArr.push(template);
    });

    let message = msgArr.join("");

    sendToWhatsApp(message);
  };

  const dispatch = useDispatch();
  // middlware to localStorage
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    // if(CartItem.length ===0) {
    //   const storedCart = localStorage.getItem("cartItem");
    //   setCartItem(JSON.parse(storedCart));
    // }
  }, []);
  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
              </div>
              <button onClick={HandleWhatsappMsg}>Order Message</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;

