import {Funcionario} from './exercicio1'

class Desenvolverdor extends Funcionario{
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        setor: string,
        cargo: string,
        salario: number,
        email?: string

        ){super(nome,telefone,cpf,data_nascimento,endereco,setor,cargo,salario,email)

    }
    mostrarDados(){
        super.mostrarDados()

    }
        
    

}

const Desenvolverdor1 = new Desenvolverdor ('joy','8432434543','325567',new Date('2023-12-1'),['senac rua',25],'adm','600',4353465,"@")
//Desenvolverdor1.mostrarDados();


class DevFront extends Desenvolverdor{
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        setor: string,
        cargo: string,
        salario: number,
        public linguagemfront:string,
        email?: string )
        {
            super(nome,telefone,cpf,data_nascimento,endereco,setor,cargo,salario,email)
            this.linguagemfront=linguagemfront;
        }
        mostrarFront() {
            super.mostrarDados()
            console.log(`DESIGNER PARA SITE E INTERFACE:${this.linguagemfront}.`)
        
        }

}

const DevFront1 = new DevFront ('gusta','9489584','87675464',new Date ('2023-10-2'),['rua dolores',34],'superior','Desenvolvedor Front',5464,'HTML e CSS','@gmai.com')
DevFront1.mostrarFront()


console.log('#####################################################################')

class DevBack extends Desenvolverdor {
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        setor: string,
        cargo: string,
        salario: number,
        public linguagemEnd:string,
        public bancoDados:string,
        email?:string){
            super(nome,telefone,cpf,data_nascimento,endereco,setor,cargo,salario,email)
            this.linguagemEnd=linguagemEnd;
            this.bancoDados=bancoDados;
        }
        mostrarEnd(){
            super.mostrarDados()
            console.log(`LINGUAGEM UTILIZADAS: ${this.linguagemEnd}`)
            console.log(`BANCO DE DADOS UTILIZADOS: ${this.bancoDados}`)

        }


}

const DevEnd1 = new DevBack ('val','9489584','87675464',new Date ('2073-11-2'),['rua dolores',34],'inferior','Desenvolvedor Back',8000,'JAVASCRIT,PHP,PYTHON ','MySQL','zapdos@');
DevEnd1.mostrarEnd()

console.log('############################################################################')

class FullStack extends Desenvolverdor {
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        setor: string,
        cargo: string,
        salario: number,
        public atribuicao: string,
        email?:string ){
        super(nome,telefone,cpf,data_nascimento,endereco,setor,cargo,salario,email)
        this.atribuicao=atribuicao;

    }
    mostrarFull(){
        super.mostrarDados()
        console.log(`CONTRIBUIÇÃO E METODOLOGIA: ${this.atribuicao}`)

 
    }
}

const FullStack1 = new FullStack ('Rodo','84324895','700902394',new Date ('2021-1-23'),['rua senac',93248],' meio','Desenvolvedor FULL',456547,'Coda tanto em front quanto em Back e resolver problemas','@gmail')
FullStack1.mostrarFull()