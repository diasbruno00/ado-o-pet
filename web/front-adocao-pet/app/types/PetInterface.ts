
 export default interface PetInterface {
    map(arg0: (pet: PetInterface) => import("react").JSX.Element): import("react").ReactNode;
    _id?: string,
    nome: string ,
    idade: number,
    sexo: string,
    raca: string,
    tipo: string,
    estado: string,
    cidade: string,
    status: string
}