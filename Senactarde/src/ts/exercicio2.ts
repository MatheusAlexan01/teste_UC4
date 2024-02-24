import {Pessoa} from './exercicio1'

class Livro{
    constructor(
        public titulo: string, 
        public paginas: number, 
        public autor: string, 
        public editora: string, 
        public lancamento: Date
    ){
        
    }
    mostrarLivro(){
        console.log(`TÍTULO: ${this.titulo}`)
        console.log(`PAGINAS: ${this.paginas}`)
        console.log(`AUTOR: ${this.autor}`)
        console.log(`EDITORA: ${this.editora}`)
        console.log(`LANÇAMENTO: ${this.lancamento.toLocaleString('pt-BR')}`)
    }

}

class Deposito extends Livro {
    constructor( 
         titulo: string, 
         paginas: number, 
         autor: string, 
         editora: string, 
         lacamento: Date,
         public quantidade:number

        ) {
        super(titulo,paginas,autor,editora,lacamento)
        this.quantidade=quantidade;

    }
    mostrarDeposito(){
        console.log(`DADOS DO LIVRO`)
        super.mostrarLivro()
        console.log(`QUANTIDO EM ESTOQUE ${this.quantidade}`)
    }
}

const livro1 = new Deposito ("Guerra e Paz", 1200, "Matheus", "Arqueiro", new Date("1243-12-22"),50)
livro1.mostrarDeposito()

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

class Usuario extends Pessoa{
constructor(
     nome: string,
     telefone: string,
     cpf: string,
     data_nascimento: Date,
     endereco: any[],
     email?: string
){super(nome,telefone,cpf,data_nascimento,endereco,email)}
mostarUsuario(){
    console.log('DADOS DO USUARIO')
    super.mostrarPessoa()

}
}

const usuario1 = new Usuario ('Matheus','0099933110','70012200',new Date('2000-4-18'),['Rua Senac',500,'Bairro Petropolis'],'')
usuario1.mostarUsuario()

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')


class Historico {
    constructor(
        public nome: Usuario,
        public telefone: Usuario,
        public cpf: Usuario,
        public empresti:number,
        public devolu:number
        ){}
        mostrarHistorico(){
            console.log('DADOS DO HISTÓRICO')
            console.log(`NOME: ${usuario1.nome}`)
            console.log(`TELEFONE: ${usuario1.telefone}`)
            console.log(`CPF: ${usuario1.cpf}`)
            console.log(`HISTORÍCO DE EMPRESTIMOS: ${this.empresti}`)
            console.log(`HISTORÍCO DE DEVOLUÇÕES: ${this.devolu}`)
           

        }
        
}

const historico1 = new Historico (usuario1,usuario1,usuario1,10,8)
historico1.mostrarHistorico()

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

class Emprestimo extends Pessoa{
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        public livro:Livro,
        public data_incial:Date,
        public data_devolucao:Date,
        public emprestiR:Historico,
        email?: string
        ){super(nome,telefone,cpf,data_nascimento,endereco,email)

    }mostrarEmprestimo(){
        console.log(`DADOS EMPRESTIMO`)
        super.mostrarPessoa()
        console.log(`LIVRO EMPRESTADO: ${livro1.titulo}`)
        console.log(`DATA DO EMPRESTIMO: ${this.data_incial.toLocaleString('pt-BR')}`)
        console.log(`DATA DE DEVOLUÇÃO ${this.data_devolucao.toLocaleString('pt-BR')}`)
        console.log(`REGISTRO DE EMPRESTIMOS: ${historico1.empresti}`)
        

    }
}

const emprestimo1 = new Emprestimo ('Matheus','0099933110','70012200',new Date('2000-4-18'),['Rua Senac',500,'Bairro Petropolis'],livro1,new Date('2024-2-1'),new Date('2024-3-2'),historico1,'')
 
emprestimo1.mostrarEmprestimo()
