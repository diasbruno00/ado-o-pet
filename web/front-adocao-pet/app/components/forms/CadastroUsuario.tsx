'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FormEvent } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2';
import MenuAdmin from '../menu/menuAdmin/Menu';

// htmlFormulario
export default function CreateUser() {

    const { push } = useRouter()

    const handleSumit = async (event: FormEvent) => {

        const nome = document.getElementById('nome') as HTMLInputElement
        const idade = document.getElementById('idade') as HTMLInputElement
        const sexo = document.getElementById('sexo') as HTMLInputElement
        const cpf = document.getElementById('cpf') as HTMLInputElement
        const email = document.getElementById('email') as HTMLInputElement
        const telefone = document.getElementById('telefone') as HTMLInputElement
        const estado = document.getElementById('estado') as HTMLInputElement
        const cidade = document.getElementById('cidade') as HTMLInputElement

        event.preventDefault();

        const data = {
            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value,
            cpf: cpf.value,
            email: email.value,
            telefone: telefone.value,
            estado: estado.value,
            cidade: cidade.value
        }
        try {

            const response = await axios.post('http://localhost:3333/usuario', data)
            const usuario = await response.data
            await Swal.fire(
                'Good job!',
                `${usuario.nome} salvo com sucesso`,
                'success'
            )
            push('/pet/list')
        } catch (error) {
            alert(`Erro na inclusão ${nome}`)
        }
    }

    return (

        <div className="container col-md-8 p-4 ">
            <form onSubmit={handleSumit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">nome</label>
                    <input type="text" name='nome' id='nome' className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">idade</label>
                    <input type="number" name='idade' id='idade' className="form-control" min={0} max={100} required />
                </div>

                <div className="mb-3">
                <select name='sexo' id="sexo" className="form-select" aria-label="Default select example">
                    <option selected>Sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outros">Outros</option>
                </select>
                </div>
               
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Cpf</label>
                    <input type="text" name='cpf' id='cpf' className="form-control" required />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
                    <input type="text" name='email' id='email' className="form-control" required />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Telefone</label>
                    <input type="text" name='telefone' id='telefone' className="form-control" required />

                </div>

                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">estado </label>
                    <input type="text" name='estado' id='estado' className="form-control" required />
                </div>

                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">cidade</label>
                    <input type="text" name='cidade' id='cidade' className="form-control" required />
                </div>

                <button type="submit" className="btn btn-success" > Confirmar </button>
            </form>
        </div>
        
    )
}