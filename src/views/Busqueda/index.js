"use client";

import { useEffect, useState } from "react";
import BankCard from "@/components/BankCard";
import useStoreData from "@/hooks/storeData";
import useDataBanks from "@/hooks/useDataBanks";
import "../../components/BankCard/BankCard.css";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import './Busqueda.css';

export default function BusquedaPage({ termino }) {
  const { getBanksData } = useDataBanks();

  const { banks } = useStoreData((state) => ({ banks: state.banks }));

  const [banksFiltered, setBanksFiltered] = useState([]);

  useEffect(() => {
    getBanksData();
  }, [getBanksData]);

  useEffect(() => {
    const filteredBanks = banks.filter((bank) =>
      bank.bankName.toLowerCase().includes(termino.toLowerCase())
    );
    setBanksFiltered(filteredBanks);
  }, [termino, banks]);

  return (
    <section className="container">
      <Link href="/" className="back__btn">
        <IoMdArrowRoundBack />
        <p>Regresar</p>
      </Link>
      <div className="d-flex align-items-center justify-content-center home__title mt-3">
        <h1>Busqueda: {termino}</h1>
        <span className="home__title-background">{termino}</span>
      </div>
      {banksFiltered.length > 0 ? (
        <div className="row">
          {banksFiltered?.map((bank, index) => (
            <div
              className="col col-xl-3 col-lg-3 col-md-4 col-12 mb-4"
              key={"search-" + index + "-" + bank.bankName}
            >
              <BankCard bank={bank} deleteBtn={false} />
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          <h4>No se han encontrado bancos</h4>
          <p>Intenta con un termino diferente</p>
        </div>
      )}
    </section>
  );
}
