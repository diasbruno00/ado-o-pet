'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FormEvent} from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2';
import { useState } from 'react';

// htmlFormulario
export default function CreatePet() {

    const { push } = useRouter()
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [raca, setRaca] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [file, setFile] = useState<File | null>(null);


    async function handleSumit(event: FormEvent) {
        event.preventDefault();
        const data = new FormData();
        data.append('nome', nome);
        data.append('idade', idade);
        data.append('sexo', sexo);
        data.append('tipo', tipo);
        data.append('raca', raca);
        data.append('estado', estado);
        data.append('cidade', cidade);
        if (file) {
            data.append('file', file);
        }

        await axios.post('http://localhost:3333/pet', data).then(response => {
            if (response.status == 200) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Pet cadastrado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        push('/pet/list')
                    }
                })
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Erro ao cadastrar pet!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }
    return (

        <div className="container col-md-8 p-4">
        <form onSubmit={handleSumit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" name='nome' id='nome' className="form-control" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="idade" className="form-label">Idade</label>
                <input type="number" name='idade' id='idade' className="form-control" min={0} max={100} value={idade} onChange={e => setIdade(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="sexo" className="form-label">Sexo</label>
                <select name='sexo' id="sexo" className="form-select" aria-label="Default select example" value={sexo} onChange={e => setSexo(e.target.value)}>
                    <option selected>Sexo</option>
                    <option value="Macho">Macho</option>
                    <option value="Femea">Fémea</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <input type="text" name='tipo' id='tipo' className="form-control" value={tipo} onChange={e => setTipo(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="raca" className="form-label">Raça</label>
                <input type="text" name='raca' id='raca' className="form-control" value={raca} onChange={e => setRaca(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" name='estado' id='estado' className="form-control" value={estado} onChange={e => setEstado(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="cidade" className="form-label">Cidade</label>
                <input type="text" name='cidade' id='cidade' className="form-control" value={cidade} onChange={e => setCidade(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="file" className="form-label">Foto do pet</label>
                <input type="file" name='file' id='file' className="form-control" onChange={e => {
                                if (e.target.files) {
                                    setFile(e.target.files[0]);
                                }
                        }} />

            </div>
            <button type="submit" className="btn btn-success">Confirmar</button>
        </form>
    </div>

    )

}