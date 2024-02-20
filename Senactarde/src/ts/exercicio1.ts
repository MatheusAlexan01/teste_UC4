class Funcionario{
    nome:string;
    email:string;
    telefone:string;
    cargo:string;
    //Metodo Construtor classe
    constructor(nome:string,email:string,telefone:string,cargo:string){
        this.cargo =cargo,
        this.email = email,
        this.telefone =telefone,
        this.nome = nome


   }
   mostrarDados(){
        console.log('Dados do funcionario')
        console.log(`Nome: ${this.nome}`)
        console.log(`E-email:${this.email}`)
        console.log(`Telefone:${this.telefone}`)
        console.log(`Cargo:${this.cargo}`)

   }
}

const funcionario1 = new Funcionario("matheus","math@gmail","2134234","medico")
console.log(funcionario1.mostrarDados())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


class Paciente{
    nome:string;
    idade:string;
    faixaDeprioridade:string;
    telefone:string;
    sintomas:string;
    data:Date;

    constructor(nome:string,idade:string,faixaDeprioridade:string,telefone:string,sintomas:string,data:Date){
        this.nome = nome,
        this.idade = idade,
        this.faixaDeprioridade = faixaDeprioridade,
        this.telefone = telefone
        this.sintomas=sintomas,
        this.data=data

    }
    mostrarDados(){
        console.log('Dados do Paciente:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Faixa de Prioridade: ${this.faixaDeprioridade}`)
        console.log(`Data nascimento: ${this.data.toLocaleDateString('pt-BR')}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Sintomas: ${this.sintomas}`)

    }

}

const paciente1 = new Paciente("Senna","19","Vermelho","32532454","febre,tosse",new Date("1892-01-01"))
console.log(paciente1.mostrarDados())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Consulta{
    paciente:Paciente;
    medico:Funcionario;
    data:Date;
    covencio:boolean;
    constructor(paciente: Paciente,medico: Funcionario,data:Date,covencio:boolean){
        this.paciente = paciente,
        this.medico= medico,
        this.data = data,
        this.covencio =covencio

    }
    mostrarDados(){

        console.log('Dados da Consulta')
        console.log(`Paciente:${paciente1.nome}`)
        console.log(`Medico: ${funcionario1.nome}`)
        console.log(`Data: ${this.data.toLocaleString('pt-BR')}`)
        console.log(`Covenio: ${this.covencio}`)

    }

}

 const consulta1 = new Consulta(paciente1,funcionario1, new Date("2129-2-18"),true)
 console.log(consulta1.mostrarDados())