"use client";

import Image from "next/image";
import "./BankCard.css";

export default function BankCard({ bank }) {
  function handleURL(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <>
      <div className="card">
        <Image
          src={bank.url}
          loading="lazy"
          className="img__card"
          fill
          alt={bank.bankName}
        />

        <div className="card-body">
          <h4 className="card-title">{bank.bankName}</h4>
          <p className="card-text">{bank.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small>
              <b>{bank.age}</b> años en el mercado
            </small>
            <span className="btn btn-danger">Elminar</span>
          </div>
        </div>
      </div>
    </>
  );
}
