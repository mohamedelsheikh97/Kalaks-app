// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import React, { useState } from "react";
// import "../../css/payment_page/payment.css";
// const stripPromise=loadStripe(process.env.REACT_APP_STRIPE_KEY);

// export default function Payment() {
//   const stripe=useStripe();
//   const element=useElements();
//   const [error, seterror] = useState("")
//   const [isProcessing, setisProcessing] = useState(false)
//   const [paymentDetails, setpaymentDetails] = useState({
//     userName:"",
//     email:"",
//     address:"",
//     phone:""
//   })
//   const  handelChange=(e)=>{
//     const {value,name}=e.target;
//     setpaymentDetails({
//       ...paymentDetails,
//       [name]:value
//     })
//   }

//   const handelCardChanges=(e)=>{
//     if(e.error) return seterror(e.error.message)
//     seterror('');
//   }

//   const cost=20;
//  const handelPayment=async(e)=>{
//     e.preventDefault();
//     setisProcessing(true);
//     console.log(paymentDetails);

//     const cardElement=element.getElement('card');
//     const {name,phone,email,address}=paymentDetails;
//     const billingInfo={
//       name,
//       phone,
//       email,
//       address:{
//         line1:address
//       }
//     };

//     try{
//       const paymentIntent=await axios.post(`http://localhost:5000/payment`,{
//         amount:cost * 100
//       })

//       const paymentMethodObj=await stripe.createPaymentMethod({
//         type:'card',
//         card:cardElement,
//         billing_details:billingInfo
//       })

//       if(paymentMethodObj.error){
//         seterror(paymentMethodObj.error.message)
//         setisProcessing(false)
//         return ;
//       }
//       const confiremdPayment= await stripe.confirmCardPayment(
//         paymentIntent.data,{payment_method:paymentMethodObj.paymentMethod.id}
//       )
//       if(confiremdPayment.error){
//         seterror(paymentMethodObj.error.message)
//         setisProcessing(false)
//         return ;
//       }

//       seterror("success")

//     }catch(err){
//       console.log(err);
//       seterror(err);
//       setisProcessing(false);
//     }

//   }

import "../../css/payment_page/payment.css";
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Payment() {
  let navag = useNavigate();
  let baseURL = "http://localhost:5000/cart";
  let [mycart, setmycart] = useState([]);
  const stripe = useStripe();
  const element = useElements();
  const [isProcessing, setProcessing] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

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

  let total =
    (mycart.reduce((partialSum, a) => partialSum + a.price, 0) + 5 + 2) * 100;
  console.log(total);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("Pay");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleCardChange = (e) => {
    if (e.error) return setError(e.error.message);
    setError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccess("Processing...");

    const cardElement = element.getElement("card");
    const { name, phone, email, address } = credentials;
    const billingInfo = {
      name,
      phone,
      email,
      address: {
        line1: address,
      },
    };

    try {
      const paymentIntent = await axios.post("http://localhost:5000/payments", {
        amount: total,
      });

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        setError(paymentMethodObj.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      const confirmedPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        }
      );
      if (confirmedPayment.error) {
        setError(confirmedPayment.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      setSuccess("Success! Payment is Complete");

      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        cardElement.clear();
        navag("/accessories");
      }, 2000);
    } catch (error) {
      setError(error.message);
      setProcessing(false);
      setSuccess("Pay");
    }
  };

  return (
    <div>
      <div className="container payment">
        <form action="" onSubmit={handlePayment}>
          <div className="row">
            <div className="col">
              <h3 className="title">Payment</h3>
              <div className="inputBox">
                <span>Full Name :</span>
                <input
                  name="userName"
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="enter your name"
                />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input
                  name="email"
                  required
                  onChange={handleChange}
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
              <div className="inputBox">
                <span>Address :</span>
                <input
                  name="address"
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="room - street - locality"
                />
              </div>
              <div className="inputBox">
                <span>Phone :</span>
                <input
                  name="phone"
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="your number"
                />
              </div>
              <div className="inputBox">
                <span>Credit Card :</span>
                <CardElement
                  options={{
                    hidePostalCode: true,
                    style: {
                      base: {
                        fontSize: "20px",
                      },
                      invalid: {
                        color: "red",
                      },
                    },
                  }}
                  onChange={handleCardChange}
                />
              </div>
            </div>
          </div>
          <h4 className="title text-center text-danger">{error}</h4>

          <input
            type="submit"
            value={success}
            className="submit-btn"
            disabled={isProcessing}
          />
        </form>
      </div>
    </div>
  );
}
