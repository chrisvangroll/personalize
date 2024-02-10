"use client";
import styled from "styled-components";

export default function CartPage() {
  const PaymentContainer = styled.div`
    height: 100vh;

    h1 {
      font-size: 3rem;
      margin-top: 50px;
      text-align: center;
    }
  `;

  return (
    <PaymentContainer>
      <h1>Payment....</h1>
    </PaymentContainer>
  );
}
