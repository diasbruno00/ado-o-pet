'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import MenuAdmin from '@/app/components/menu/menuAdmin/Menu';
import Image from 'next/image';


const retornaListaDePedidosDeAdocao = async () => {

    try {
        // Rota GET usando Axios
        const pedidos = await axios.get('http://localhost:3333/adocao')
        return pedidos.data
    } catch (error) {
        console.log(error)
        alert(error)
    }

}

export default function ListaPedidosAdocao() {
    const [lista, setLista] = useState<any>([])
    const [busca, setBusca] = useState('')


    useEffect(() => {

        retornaListaDePedidosDeAdocao().then(data => setLista(data))
            .catch(error => console.log(error))
    }, []);

    console.log(lista)

    const listaFiltrada = lista.filter((obj: any) => obj.usuario.nome.toLowerCase().includes(busca.toLowerCase()))

    return (
        <>
            <MenuAdmin />

            <div>
                <nav className="navbar bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand"></a>
                        <form className="d-flex" role="search" method="get" >
                            <input className="form-control me-2" type="search" value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Nome de usuario" aria-label="Search" />
                        </form>
                    </div>
                </nav>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome Usuario</th>
                            <th scope="col">Nome Pet</th>
                            <th scope="col">Informações</th>
                            <th scope="col">Status</th>
                            <th scope="col">foto do pet</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaFiltrada.map((obj: any) => {
                                return (
                                    <tr key={obj.usuario._id} className="">
                                        <td>{obj.usuario.nome}</td>
                                        <td>{obj.pet.nome}</td>
                                        <td>{obj.informacoes}</td>
                                        <td>{obj.status}</td>
                                        <td>
                                        <Image src={`http://localhost:3333/files/${obj.pet.imagem}`} width={130} height={100} alt="Descrição da imagem" />
                                        </td>

                                        <td>
                                            <button  type="button" className="btn btn-success" onClick={
                                                async () => {
                                                    const response = await axios.delete(`http://localhost:3333/adocao/${obj._id}`)
                                                    const dados = response.data
                                                    if (dados.sucesso) {
                                                       await Swal.fire(
                                                            'Good job!',
                                                            `${dados.sucesso}`,
                                                            'success'
                                                          )
                                                          location.reload();
                                                    } else {
                                                       await Swal.fire(
                                                            'Cancelled !',
                                                            `${dados.erro}`,
                                                            'error'
                                                          )
                                                    }
                                                }}> Confirmar Adocao </button>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </>

    )

}