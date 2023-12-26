'use client'
import MenuAdmin from "../components/menu/menuAdmin/Menu"
import { useRouter } from "next/navigation"

export default function Admin(){
    const {push} = useRouter()
    return (

        <div style={{ height: "100vh", backgroundColor: "#CEDEBD" }}>
        <MenuAdmin /> 
    
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section className=" text-white py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h1 className=" text-black"> Area administrativa </h1>
                  <p  className="lead text-black" >Verifique os pedidos de adoção em andamento.</p>
                  <button className="btn btn-primary" onClick={()=>{
                console.log('click')
                push('/pet/list/analise')
              }}>
              Pedidos de adoção
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
     
    )
}