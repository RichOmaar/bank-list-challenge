import BankCard from "@/components/BankCard";
import PlaceHolderCard from "@/components/PlaceHolderCard";
import Image from "next/image";

export default function HomePage({ banks }) {

  return (
    <section>
      <h1>Lista de bancos</h1>
      {banks.length > 0 ? (
        <div className="row">
          {banks?.map((bank, index) => (
            <div
              className="col col-xl-4 col-lg-4 col-md-6 col-12 mb-4"
              key={index}
            >
              <BankCard bank={bank} />
            </div>
          ))}
        </div>
      ):(
        <div className="row">
        <h4>No se han encontrado bancos</h4>
        <p>Por favor recarga la página o ponte en contacto con el equipo de soporte</p>

        {Array.from({ length: 3 }).map((_, index) => (
          <PlaceHolderCard key={index} />
        ))}
      </div>
      )}
    </section>
  );
}
