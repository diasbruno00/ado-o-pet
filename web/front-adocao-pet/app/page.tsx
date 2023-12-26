'use client'
import Link from "next/link";
import Menu from "./components/menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";

export default function Home() {

  const {push} = useRouter()
  
  return (
    <div style={{ height: "100vh", backgroundColor: "#CEDEBD" }}>
    <Menu /> 

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className=" text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className=" text-black"> Encontre um amigo</h1>
              <p  className="lead text-black" >Ao adotar um animal de estimação, você não apenas ganha um amigo fiel, mas também está dando a um animal indefeso uma segunda chance de ser parte de uma família amorosa. Cada animal tem sua própria história, personalidade e amor para dar. Seja um cão brincalhão, um gato afetuoso ou um adorável coelho, todos eles merecem um lar onde possam prosperar.</p>
              <p className="lead text-black">Conheça nossas amigos </p>
              <button className="btn btn-primary" onClick={()=>{
                console.log('click')
                push('/pet/list')
              }}>
                Adote
              </button> 
            </div>
            <div className="col-md-6 text-center align-items-center d-flex justify-content-center">
              <img src="img/pet.png" alt="Pets" className="img-fluid w-20"  />
            </div>
          </div>
          
        </div>
        
      </section>
    </main>
    </div>
  );
}