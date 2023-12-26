'use client'
import MenuAdmin from "@/app/components/menu/menuAdmin/Menu"
import { FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const recuperarPetId = async (id: number) => {
    const response = await axios.get(`http://localhost:3333/pet/${id}`)
    return response.data
}

export default function EditPet({ params }: any) {

    const {push} = useRouter()

    const id = params.id
    const [pet, setPet] = useState<any>([])
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [sexo, setSexo] = useState('')
    const [tipo, setTipo] = useState('')
    const [raca, setRaca] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')


    useEffect(() => {
        recuperarPetId(id).then(data => {
            setNome(data.nome)
            setIdade(data.idade)
            setSexo(data.sexo) 
            setTipo(data.tipo)
            setRaca(data.raca)
            setEstado(data.estado)
            setCidade(data.cidade)
        })
            .catch(error => console.log(error))

    }, [id]);
    console.log(pet)


    const handleSumit = async (event: FormEvent) => {

        event.preventDefault();

        const data = {
            nome,
            idade,
            sexo,
            tipo,
            raca,
            estado,
            cidade,
        }
        console.log(data)
        try {

            const response = await axios.put(`http://localhost:3333/pet/${id}`, data)
            const pet = await response.data
            await Swal.fire(
                'Good job!',
                `${pet.nome} atualizado com sucesso`,
                'success'
            )
            push('/pet/edit/list')

        } catch (error) {
            alert(`Erro na inclusão ${nome}`)
        }
    }


    return (

        <div>

            <MenuAdmin />


            <div className="container col-md-8 p-4"  >
                <form onSubmit={handleSumit} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">nome</label>
                        <input type="text"  className="form-control" value={nome}   onChange={(event) => setNome(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">idade</label>
                        <input type="number" className="form-control" min={0} max={100} value={idade} onChange={(event) => setIdade(event.target.value)} />
                    </div>

                    <div className="mb-3">
                        <select name='sexo' id="sexo" className="form-select" aria-label="Default select example">
                            <option value={sexo}>{sexo}</option>
                            <option value="Macho">Macho</option>
                            <option value="Femea">Fémea</option>
                        </select>
                    </div>

                    <div className="mb-3 htmlForm-check">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">Tipo</label>
                        <input type="text"  className="form-control" value={tipo} onChange={(event) => setTipo(event.target.value)} />
                    </div>

                    <div className="mb-3 htmlForm-check">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">raca</label>
                        <input type="text"  className="form-control" value={raca} onChange={(event) => setRaca(event.target.value)}/>
                    </div>

                    <div className="mb-3 htmlForm-check">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">estado</label>
                        <input type="text"  className="form-control" value={estado} onChange={(event) => setEstado(event.target.value)} />

                    </div>
                    <div className="mb-3 htmlForm-check">
                        <label htmlFor="exampleInputEmail1" className="htmlForm-label">cidade</label>
                        <input type="text" className="form-control" value={cidade} onChange={(event) => setCidade(event.target.value)} />
                    </div>


                    <button type="submit" className="btn btn-success" > Atualizar Dados </button>
                </form>
            </div>


        </div>


    )
}