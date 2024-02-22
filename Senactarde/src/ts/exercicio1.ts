class Pessoa {
    nome:string;
    telefone:string;
    cpf:string;
    data_nascimento:Date;
    endereco:any[];
    email?:string;
    constructor(nome:string,telefone:string,cpf:string,data_nascimento:Date, endereco:any[],email?:string)
    {
        this.nome=nome;
        this.telefone=telefone;
        this.cpf=cpf;
        this.data_nascimento=data_nascimento;
        this.endereco=endereco;
        this.email=email

    }
    mostrarPessoa(){
        console.log(`NOME: ${this.nome}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`DATA NASCIMENTO: ${this.data_nascimento.toLocaleString('pt-BR')}`)
        console.log(`ENDEREÇO ${this.endereco}`)
        console.log(`E-MAIL: ${this.email}`)

    }


}

class Funcionario extends Pessoa{
    setor:string;
    cargo: string;
    salario:number
    constructor(nome: string, telefone: string, cpf: string, data_nascimento:Date,endereco:any[],setor:string,cargo:string,salario:number,email?:string)
    {
       super(nome,telefone,cpf,data_nascimento,endereco,email)
        this.setor = setor;
        this.cargo=cargo;
        this.salario=salario;
       
        
    }
    mostrarDados(){
        console.log("DADOS DO FUNCIONARIO")
        super.mostrarPessoa()
        console.log(`SETOR: ${this.setor}`)
        console.log(`CARGO: ${this.cargo}`)
        console.log(`SALARIO: ${this.salario}`)

    }
}
const funcionario1 = new Funcionario('Matheus', '8498293458', '7001923851', new Date ('2001-3-03'),["Rua Natal",1222,"Bairro Potengi"],'TI',"CIO DA PUTARIA",7000,"matheus@gmail")
console.log(funcionario1.mostrarDados())


class Paciente extends Pessoa
{
    faixadeprioridade:string;
    sintomas: string;
    covencio:boolean;
    constructor(nome: string, telefone: string, cpf: string, data_nascimento:Date,endereco:any[],faixaprioridade:string,sintomas:string,convencio:boolean,email?:string)
    {
        super(nome,telefone,cpf,data_nascimento,endereco,email)
        this.faixadeprioridade=faixaprioridade;
        this.sintomas=sintomas;
        this.covencio=convencio
}
mostarDados(){
    console.log(`DADOS DO PACIENTE:`)
    super.mostrarPessoa()
    console.log(`FAIXA DE PRIORIDADE: ${this.faixadeprioridade}`)
    console.log(`SINTOMAS:${this.sintomas}`)
    console.log(`COVÊNIO: ${this.covencio}`)
}

}
const paciente1 = new Paciente ("lucas","84323545","002334989",new Date('1928-4-6'),["travessa lucas",299,"Bairro senac"],"Preta",'fosse,febre,morte',true)
console.log(paciente1.mostarDados())


class Consultas
{
    medico:Funcionario;
    paciente:Paciente;
    data:Date;
    local:string;
    sala: number;

    constructor(medico: Funcionario,paciente:Paciente, data: Date,local: string, sala:number)
    {
        this.data = data;
        this.local = local;
        this.paciente=paciente;
        this.medico = medico;
        this.sala=sala
    }
    mostrarConsulta(){
        console.log(`DADOS DA CONSULTA:`)
        console.log(`MEDICO: ${funcionario1.nome}`)
        console.log(`PACIENTE: ${paciente1.nome}`)
        console.log(`DATA: ${this.data.toLocaleString('pt-BR')}`)
        console.log(`LOCAL: ${this.local}`)
        console.log(`SALA: ${this.sala}`)
    }
}

const consulta1 = new Consultas(funcionario1,paciente1,new Date ('2022-5-6'),"Pajuçara",55)
console.log(consulta1.mostrarConsulta())