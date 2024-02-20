import { ListFormat } from "typescript";

class CadastraLivros {

    titulo: string;
    paginas: number;
    autor: string;
    editora: string;
    lacamento: Date;
    constructor(titulo: string, paginas: number, autor: string, editora: string, lacamento: Date) {
        this.titulo = titulo,
            this.paginas = paginas,
            this.autor = autor,
            this.editora = editora,
            this.lacamento = lacamento

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
    nome: string;
    idade: number;
    endereco: any[];
    telefone: string;
    cpf: string;
    constructor(nome: string, idade: number, endereco: any[], telefone: string, cpf: string) {
        this.nome = nome,
            this.idade = idade,
            this.endereco = endereco,
            this.telefone = telefone,
            this.cpf = cpf
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
    livro: CadastraLivros;
    usuario: cadastroUsuarios;
    dataDevolucao: Date;
    imprestimoRealizados: number;
    datainicial: Date;
    constructor(livro: CadastraLivros, usuario: cadastroUsuarios, dataDevolucao: Date, imprestimoRealizados: number, datainicial: Date) {
        this.livro=livro,
        this.usuario=usuario,
        this.dataDevolucao=dataDevolucao,
        this.imprestimoRealizados=imprestimoRealizados,
        this.datainicial =datainicial

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