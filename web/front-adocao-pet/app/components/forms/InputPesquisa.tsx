import { useRouter } from 'next/router';

export default function InputPesquisar( ) {


    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <form className="d-flex" role="search" method="get" >
                    <input className="form-control me-2" type="search" name="pesquisarPet" placeholder="Search" aria-label="Search" id='pesquisa'/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}