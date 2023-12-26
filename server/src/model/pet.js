
export default class Pet {
    constructor(nome,idade,sexo, tipo ,raca, estado, cidade,imagem ){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.tipo = tipo
        this.raca = raca
        this.estado = estado
        this.cidade = cidade
        this.imagem = imagem
        this.status = 'Disponivel para adoção'   
}
}