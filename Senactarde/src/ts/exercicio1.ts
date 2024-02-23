class Pessoa {

    constructor(
        public nome: string,
        public telefone: string,
        public cpf: string,
        public data_nascimento: Date,
        public endereco: any[],
        public email?: string
    ) { }
    mostrarPessoa() {
        console.log(`NOME: ${this.nome}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`DATA NASCIMENTO: ${this.data_nascimento.toLocaleString('pt-BR')}`)
        console.log(`ENDEREÇO ${this.endereco}`)
        console.log(`E-MAIL: ${this.email}`)

    }


}

export class Funcionario extends Pessoa {
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        public setor: string,
        public cargo: string,
        public salario: number,
        email?: string) {
        super(nome, telefone, cpf, data_nascimento, endereco, email);
    }
    mostrarDados() {
        console.log("DADOS DO FUNCIONARIO")
        super.mostrarPessoa()
        console.log(`SETOR: ${this.setor}`)
        console.log(`CARGO: ${this.cargo}`)
        console.log(`SALARIO: ${this.salario}`)

    }
}
const funcionario1 = new Funcionario('Matheus', '8498293458', '7001923851', new Date('2001-3-03'), ["Rua Natal", 1222, "Bairro Potengi"], 'TI', "medico", 7000, "matheus@gmail")
//console.log(funcionario1.mostrarDados())


class Paciente extends Pessoa {
    
    constructor(
        nome: string, 
        telefone: string, 
        cpf: string, 
        data_nascimento: Date, 
        endereco: any[], 
        public faixaprioridade: string, 
        public sintomas: string, 
        public convencio: boolean, 
        email?: string) {
        super(nome, telefone, cpf, data_nascimento, endereco, email);
        
    }
    mostarDados() {
        console.log(`DADOS DO PACIENTE:`)
        super.mostrarPessoa()
        console.log(`FAIXA DE PRIORIDADE: ${this.faixaprioridade}`)
        console.log(`SINTOMAS:${this.sintomas}`)
        console.log(`COVÊNIO: ${this.convencio}`)
    }

}
const paciente1 = new Paciente("lucas", "84323545", "002334989", new Date('1928-4-6'), ["travessa lucas", 299, "Bairro senac"], "Preta", 'fosse,febre,morte', true)
//console.log(paciente1.mostarDados())


class Consultas {
    

    constructor(
        public medico: Funcionario, 
        public paciente: Paciente, 
        public data: Date, 
        public local: string, 
        public sala: number) {
        
    }
    mostrarConsulta() {
        console.log(`DADOS DA CONSULTA:`)
        console.log(`MEDICO: ${funcionario1.nome}`)
        console.log(`PACIENTE: ${paciente1.nome}`)
        console.log(`DATA: ${this.data.toLocaleString('pt-BR')}`)
        console.log(`LOCAL: ${this.local}`)
        console.log(`SALA: ${this.sala}`)
    }
}

const consulta1 = new Consultas(funcionario1, paciente1, new Date('2022-5-6'), "Pajuçara", 55)
//console.log(consulta1.mostrarConsulta())