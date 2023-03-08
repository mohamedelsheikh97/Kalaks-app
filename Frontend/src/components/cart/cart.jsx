import React, { useEffect, useState } from "react";
import "../../css/home_page/cards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../css/cart/cart.css";

export function Cart() {
  let baseURL = "http://localhost:5000/cart";

  let [mycart, setmycart] = useState([]);
  let [usedcars, setUsedcars] = useState([]);
  let navigate = useNavigate();
  let total =
    (mycart.reduce((partialSum, a) => partialSum + a.price, 0) + 5 + 2) * 1000;
  console.log(total);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setmycart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeFromCart = (cartId) => {
    axios
      .delete(`${baseURL}/${cartId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    const restCarts = mycart.filter((cart) => {
      return cart._id !== cartId;
    });

    setmycart(restCarts);
    window.location.reload();
  };

  const checkout = () => {
    navigate("/payment");
  };

  const goshop = () => {
    navigate("/accessories");
  };
  return (
    <div className="myCart">
      <h1 class="text-uppercase text-center text-dark mt-5 mb-5 cart-title">
        YOUR PRODUCTS
      </h1>
      {mycart.length === 0 && (
        <div className="text-center empty">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"
            alt=""
          />
          <div className="text-center">
            <h5>
              YOUR CARD IS <span>EMPTY</span>
            </h5>
            <p>YOU SHOULD ADD PRODUCTS YO YOUR CARD TO COMPLETE CHECKOUT!</p>
            <button className="mb-4 text-light" onClick={() => goshop()}>
              GO SHOPPING
            </button>
          </div>
        </div>
      )}
      <div className="d-flex">
        <div>
          {mycart.map((mycart) => {
            return (
              <Card className="productCard">
                <Card.Header className="text-uppercase ">
                  {mycart.name}
                </Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div className="mx-3 ">
                      <img
                        src={`http://localhost:5000/${mycart.image}`}
                        alt=""
                      />
                    </div>
                    <div className="cartDetails d-flex flex-column mb-3 mx-3 justify-content-around">
                      <Card.Title className="text-uppercase">
                        {mycart.name}
                      </Card.Title>
                      <Card.Text className="text-uppercase">
                        {mycart.desc}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="primary"
                          onClick={() => removeFromCart(mycart._id)}
                        >
                          Remove
                        </Button>
                        <h4 className="text-danger">PRICE: {mycart.price}</h4>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        {mycart.length !== 0 && (
          <div className="Total">
            <h4 className="text-center">YOUR CART ( {mycart.length} )</h4>
            <div>
              <div className="details">
                {mycart.map((mycart) => {
                  return (
                    <div className="d-flex align-items-center justify-content-between mb-2 ">
                      <div className="d-flex align-items-center  ">
                        <img
                          src={`http://localhost:5000/${mycart.image}`}
                          alt=""
                          className="mr-3"
                        />
                        <p className="text-uppercase">{mycart.name}</p>
                      </div>
                      <p className="price">
                        ${parseFloat(mycart.price).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <p>DELIVERY:</p>
                </div>
                <p className="price">${parseFloat("5").toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2 Taxes">
                <div>
                  <p>TAXES:</p>
                </div>
                <p className="price">${parseFloat("2").toFixed(2)}</p>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <p>TOTAL:</p>
                </div>
                <p className="price">
                  $
                  {parseFloat(
                    mycart.reduce((partialSum, a) => partialSum + a.price, 0) +
                      5 +
                      2
                  ).toFixed(2)}
                </p>
              </div>
              <div className="text-center">
                <button onClick={() => checkout()}>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
