class Animal{
    constructor(nome, comprimento, numeroDePatas, cor, ambiente, velocidade){
        this.nome = nome,
        this.comprimento = comprimento,
        this.numeroDePatas = numeroDePatas,
        this.cor = cor,
        this.ambiente = ambiente,
        this.velocidade = velocidade
    }
    alterarNome(nome){
        this.nome = nome
    }
    alterarComprimento(comprimentro){
        this.comprimento = comprimentro
    }
    alterarNumeroDePatas(numeroDePatas){
        this.numeroDePatas = numeroDePatas
    }
    alterarCor(cor){
        this.cor = cor
    }
    alterarAmbiente(ambiente){
        this.ambiente = ambiente
    }
    alterarVelocidade(velocidade){
        this.velocidade = velocidade
    }
    dados(){
        console.log(`Zoo: \n \nAnimal: ${this.nome}\nComprimento: ${this.comprimento}m\nPatas: ${this.numeroDePatas}\nCor: ${this.cor}\nAmbiente: ${this.ambiente}\nVelocidade ${this.velocidade}m/s`);
    }

}
    class Peixe extends Animal{
        constructor(nome, comprimento, numeroDePatas, cor, ambiente, velocidade, barbatanas){
        super(nome, comprimento, numeroDePatas, cor, ambiente, velocidade)
        this.barbatanas = barbatanas 
    }
}

class Mamifero extends Animal{
        constructor(nome, comprimento, numeroDePatas, cor, ambiente, velocidade){
        super(nome, comprimento, numeroDePatas, cor, ambiente, velocidade)
    }
}

class Urso extends Mamifero{
        constructor(nome, comprimento, numeroDePatas, cor, ambiente, velocidade, alimentoFav){
        super(nome, comprimento, numeroDePatas, cor, ambiente, velocidade)
        this.alimentoFav = alimentoFav
    }
}
const urso = new Urso("Kenai", 3, 4, "marrom", "terra", 60000.0, "Mel")
const camelo = new Animal("Bayek", 2, )

console.log();