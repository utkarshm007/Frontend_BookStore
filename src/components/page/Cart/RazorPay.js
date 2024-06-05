import React from 'react'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";

const RazorPay = () => {
    const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(() => {
    const order = await createOrder(params);

    const options: RazorpayOptions = {
      key: "rzp_test_naqbPaCVZeqJjM",
      amount: totlAmount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "BookStore India Pvt. Ltd.",
        email: "service@bookstore.com",
        contact: "0000000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment])
  return (
    <div>
      
    </div>
  )
}

export default RazorPay
