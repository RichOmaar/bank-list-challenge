'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';
import { useRouter } from 'next/navigation';
export default function Navbar () {
    
    const Router = useRouter();

    const [searchValue, setSearchValue] = useState('');
    function handleSearch (e) {
        e.preventDefault();
        if (!searchValue) return;
        Router.push(`/busqueda/${searchValue}`);
        setSearchValue('');
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <nav className="navbar navbar__container bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">Bancos</Link>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Buscar" 
                        aria-label="Search" 
                        value={searchValue} 
                        onChange={handleChange}/>
                    <button className="btn btn__search" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}