import BusquedaPage from "@/views/Busqueda";

export default async function Page({ params: { termino } }) {

    return (
        <div>
            <BusquedaPage termino={termino} />
        </div>
    );
}