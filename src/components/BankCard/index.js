'use client'

import Image from "next/image"

export default function BankCard ({bank}) {
    return (
        <>
            <Image 
                src={bank.url} 
                loading="lazy"
                // className=""
                // width={300}
                // height={250}
                fill
                alt={bank.bankName} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </>
    )
}