"use client";
import BankCard from "@/components/BankCard";
import PlaceHolderCard from "@/components/PlaceHolderCard";
import useStoreData from "@/hooks/storeData";
import useDataBanks from "@/hooks/useDataBanks";
import { useEffect, useState } from "react";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

export default function HomePage() {
  const { getBanksData } = useDataBanks();

  const { banks } = useStoreData((state) => state);
  const { order } = useStoreData((state) => state);

  const [newBankList, setNewBankList] = useState([]);

  useEffect(() => {getBanksData()}, [
    getBanksData
  ]);
  
  useEffect(() => {
    setNewBankList(banks);
  }, [banks]);

  function handleSortAsc() {
    const sortedBanks = [...banks].sort((a, b) =>
      a.bankName.localeCompare(b.bankName)
    );
    useStoreData.setState({ banks: sortedBanks });
    useStoreData.setState({ order: "asc" });
  }

  function handleSortDesc() {
    const sortedBanks = [...banks].sort((a, b) =>
      b.bankName.localeCompare(a.bankName)
    );
    useStoreData.setState({ banks: sortedBanks });
    useStoreData.setState({ order: "desc" });
  }

  function handleDeleteBank(bankName) {
    const newBankData = newBankList.filter((bank) => bank.bankName !== bankName);
    setNewBankList(newBankData);
  }

  return (
    <section>
      <div className="d-flex align-items-center row">
        <div className="d-flex align-items-center justify-content-center home__title mt-3">
          <h1>Lista de bancos</h1>
          <span className="home__title-background">BANCOS</span>
        </div>
        <div className="d-flex align-items-center justify-content-end my-3">
          <p className="mb-0">Ordenar por:</p>
          <AiOutlineSortAscending onClick={handleSortAsc} className={"sort__icon" + (order === "asc" ? " active" : "")} />
          <AiOutlineSortDescending onClick={handleSortDesc} className={"sort__icon" + (order === "desc" ? " active" : "")}/>
        </div>
      </div>
      {newBankList.length > 0 ? (
        <div className="row">
          {newBankList?.map((bank, index) => (
            <div
              className="col col-xl-3 col-lg-3 col-md-4 col-12 mb-4"
              key={"home-"+index+"-"+bank.bankName}
            >
              <BankCard bank={bank} deleteBtn={true} handleDeleteBank={handleDeleteBank}/>
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          <h4>No se han encontrado bancos</h4>
          <p>
            Por favor recarga la página o ponte en contacto con el equipo de
            soporte
          </p>

          {Array.from({ length: 3 }).map((_, index) => (
            <PlaceHolderCard key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
