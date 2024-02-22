class livro{

    constructor(
        public titulo: string, 
        public paginas: number, 
        public autor: string, 
        public editora: string, 
        public lacamento: Date
    ){
        


    }
    mostrarLivro(){
        console.log()
        console.log()
        console.log()
        console.log()
        console.log()
        

    }


}

class CadastraLivros {

    
    constructor( 
        public titulo: string, 
        public paginas: number, 
        public autor: string, 
        public editora: string, 
        public lacamento: Date) {
        

    }
    mostarLivros(){
        console.log(`Titulo ${this.titulo}`)
        console.log(`Paginas: ${this.paginas}`)
        console.log(`Autor:${this.autor}`)
        console.log(`Editora: ${this.editora}`)
        console.log(`Lançamento: ${this.lacamento.toLocaleString('pt-BR')}`)

    }
}

const Livros1 = new CadastraLivros("Mãe joana", 656, "tiririca", "lula", new Date("1243-12-22"))
console.log(Livros1.mostarLivros())

class cadastroUsuarios {
    
    constructor( public nome: string, 
        public idade: number, 
        public endereco: any[], 
        public telefone: string, 
        public cpf: string) {
        
    }
    mostraUsuarios(){
        console.log(`Nome:${this.nome}`)
        console.log(`idade:${this.idade}`)
        console.log(`endereço:${this.endereco}`)
        console.log(`Telefone:${this.telefone}`)
        console.log(`CPF:${this.cpf}`)

    }
}

const usuario1 = new cadastroUsuarios("bolsonaro", 12,['Rua Senac,',13,'senac'], "2314234", "4593485")
console.log(usuario1.mostraUsuarios())

class emprestimoLivro {
    
    constructor( public livro: CadastraLivros, 
        public usuario: cadastroUsuarios, 
        public dataDevolucao: Date, 
        public imprestimoRealizados: number, 
        public datainicial: Date) {

    }
    mostraremprestimo(){
        console.log(`Livro ${Livros1.titulo}`)
        console.log(`Usuario ${usuario1.nome}`)
        console.log(`Data de Devolução ${this.dataDevolucao.toLocaleString('pt-BR')}`)
        console.log(` Imprestimos de Livros ${this.imprestimoRealizados}`)
        console.log(`Data inicial ${this.datainicial.toLocaleString('pt-BR')}`)
    }

}
const emprestimoLivro1 = new emprestimoLivro (Livros1,usuario1, new Date ('2023-12-20'),1,new Date('2024-3-13'))
console.log(emprestimoLivro1.mostraremprestimo())