import PetTable from "@/app/components/PetTable"
import MenuAdmin from "@/app/components/menu/menuAdmin/Menu"

export default function ListEditPet(){
    return (
        <>
        <MenuAdmin />
        <PetTable status={'edit'} />
        </>
    )
}