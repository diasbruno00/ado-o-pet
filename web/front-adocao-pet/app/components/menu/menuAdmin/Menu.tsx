import Link from "next/link"


export default function MenuAdmin() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link " aria-current="page" href="/pet/list/analise">Pedidos em analise</Link>
                        
                    </div>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link " aria-current="page" href="/pet/create">Cadastro de pet</Link>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link " aria-current="page" href="/pet/edit/list">Lista de pet</Link>

                    </div>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                       
                        <Link className="nav-link " aria-current="page" href="/">Area do Usuario</Link>
                    </div>
                </div>


            </div>
        </nav>
    )
}