'use client'

import PetTable from "@/app/components/PetTable"
import Menu from "@/app/components/menu/Menu";


export default function ListPet(){

   
  
    return(
        <>
        <Menu />
        <PetTable status={'adocao'} />
        </>
    )
}