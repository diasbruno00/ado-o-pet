'use client'


import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios'
import PetInterface from '../types/PetInterface'

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Image from 'next/image';

const getAllPet = async () => {

    try {
        // Rota GET usando Axios
        const pet = await axios.get('http://localhost:3333/pet')
        console.log(pet.data)
        return pet.data
    } catch (error) {
        console.log(error)
        alert(error)
    }

}

export default function PetTable({ status }: any) {

    const { push } = useRouter()

    const [listaPet, setListaPet] = useState<PetInterface[] | []>([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await getAllPet();
            setListaPet(lista);
        };

        fetchData();
    }, []);

    const listaFiltrada = listaPet.filter((pet) => pet.tipo.toLowerCase().includes(busca.toLowerCase()))

    return (


        <div >
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2" type="search" value={busca} onChange={(event: ChangeEvent<HTMLInputElement>) => setBusca(event.target.value)} placeholder="Busque pelo tipo" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Raca</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Imagem</th>

                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((pet: any) => {
                            return (
                                <tr key={pet._id} className="">
                                    <td>{pet.nome}</td>
                                    <td>{pet.idade}</td>
                                    <td>{pet.sexo}</td>
                                    <td>{pet.tipo}</td>
                                    <td>{pet.raca}</td>
                                    <td>{pet.estado}</td>
                                    <td>{pet.cidade}</td>
                                    <td>{pet.status}</td>
                                    <td>
                                    <Image src={`http://localhost:3333/files/${pet.imagem}`} width={130} height={100} alt="Descrição da imagem" />
                                    </td>


                                    {status === 'adocao' ? (
                                        <button type="button" className="btn btn-success" onClick={() => {
                                            push(`/pet/adote/${pet._id}`);
                                        }}>
                                            Adote este pet
                                        </button>
                                    ) : (

                                        <div>
                                        <button type="button" className="btn btn-success" onClick={() => {
                                            push(`/pet/edit/list/${pet._id}`);
                                        }}>
                                            Editar
                                        </button>

                                         <button type="button" className="btn btn-danger"
                                          onClick={ async() => {
                                            const result = await Swal.fire({
                                                title: "Deseja realmente excluir os dados?",
                                                text: "Não será possível recuperar depois da exclusão",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Sim, excluir!"
                                              });
                                          
                                              if (result.isConfirmed) {
                                                const response = await axios.delete(`http://localhost:3333/pet/${pet._id}`)
                                                const data = response.data
                                                if(data.nome){
                                                    await Swal.fire("Excluído!", `Pet ${data.nome} excluido com sucesso`, "success");
                                                    location.reload()
                                                }else{
                                                    await Swal.fire("Erro", data.erro, "error");
                                                }
                                          
                                              }
                                                
                                            }}>
                                                Excluir
                                        </button>

                                        </div>
                                        
                                    )}


                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>
        </div>
    )
}