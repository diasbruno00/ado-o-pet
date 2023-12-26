import React from 'react';

export default function PetCard({ pet}: any) {
    return (
        <div className="card mb-3 ">
            <div className="card-body ">
                <h5 className="card-title">Dados do Pet</h5>
                <p className="card-text"><strong>Nome:</strong> {pet.nome}</p>
                <p className="card-text"><strong>Tipo:</strong> {pet.tipo}</p>
                <p className="card-text"><strong>Raça:</strong> {pet.raca}</p>
                <p className="card-text"><strong>Idade:</strong> {pet.idade}</p>
                <p className="card-text"><strong>Estado:</strong> {pet.estado}</p>
                <p className="card-text"><strong>Cidade:</strong> {pet.cidade}</p>
                <p className="card-text"><strong>Status:</strong> {pet.status}</p>

            </div>
        </div>
    );
}
