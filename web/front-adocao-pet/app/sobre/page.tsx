import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu/Menu';

export default function SobreNos() {
    return (
        <div style={{ height: "100vh", backgroundColor: "#CEDEBD" }}>
        <Menu />
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <p className="lead text-black">
                        Se você é apaixonado por animais e está considerando trazer um novo membro para sua família, você está no lugar certo! PetCompanions é uma plataforma dedicada a conectar pessoas amorosas com animais de estimação adoráveis que estão em busca de um lar amoroso.
                    </p>
                    <p className="lead text-black">
                        No PetCompanions, acreditamos que cada animal merece um lar seguro e carinhoso. Nossa missão é tornar o processo de adoção de animais de estimação mais fácil, transparente e gratificante para todos os envolvidos. Sabemos que a decisão de adotar um animal de estimação é especial e pessoal, e estamos aqui para apoiá-lo em cada passo do caminho.
                    </p>
            
                </div>
                
            </div>
        </div>
        
        </div>
    );
}
