import BankCard from "@/components/BankCard"
import Image from "next/image"

export default function HomePage({ banks }) {

    return (
        <section>
            <h1>Bank List</h1>
            {
                banks.length > 0
                    ? 
                    <>
                        {banks?.map((bank, index) => (
                            <div className="card" style={{ width: '18rem' }} key={index}>
                                <BankCard bank={bank}/>
                            </div>
                        ))}
                    </>
                    : 
                    <p>No hay bancos</p>
            }
        </section>
    )
}
