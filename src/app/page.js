import HomePage from "@/views/Home";
import { getBanksService } from "@/services/getBanks";

async function getBanks() {
  const response = await getBanksService();
  
  if(!response.props.res.ok) {
    console.log('Text');
  }
  
  const data = response.props.data
  
  return data;
}
export default async function Home() {

  const banks = await getBanks().catch(err => console.log(err));

  return (
    <main className="main__container container">
      <HomePage banks={banks}/>
    </main>
  );
}
