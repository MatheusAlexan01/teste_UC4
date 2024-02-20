class Funcionario{
    nome:string;
    email:string;
    telefone:string;
    cargo:string;
    constructor(nome:string,email:string,telefone:string,cargo:string){
        this.cargo =cargo,
        this.email = email,
        this.telefone =telefone,
        this.nome = nome


   }

}

const Funcionario1 = new Funcionario("matheus","math@gmail","2134234","medico")
console.log(Funcionario1)

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
    

}

const paciente1 = new Paciente("Senna","19","Vermelho","32532454","febre,tosse",new Date("1892-01-01"))
console.log(paciente1)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Consulta{
    paciente:Paciente;
    medico:Funcionario;
    data:Date;
    tipo:boolean;
    constructor(paciente: Paciente,medico: Funcionario,data:Date,tipo:boolean){
        this.paciente = paciente,
        this.medico= medico,
        this.data = data,
        this.tipo =tipo

    }
    

}

 const consulta1 = new Consulta(paciente1,Funcionario1, new Date("2129-2-18"),true)
 console.log(consulta1)