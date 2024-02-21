class Pessoa {
    nome:string;
    telefone:string;
    rg:string;
    data_nascimento:Date;
    constructor(nome:string,telefone:string,rg:string,data_nascimento:Date){
        this.nome=nome;
        this.telefone=telefone;
        this.rg=rg;
        this.data_nascimento=data_nascimento;

    }
    mostrarPessoa(){
        console.log(`Nome: ${this.nome}`)
        console.log(`telefone: ${this.telefone}`)
        console.log(`rg: ${this.rg}`)
        console.log(`data Nascimento: ${this.data_nascimento.toLocaleString('pt-BR')}`)

    }
 }

class Funcionario extends Pessoa {
    //atributos proprios da classe funcionario
    matricula:string;
    email:string;
    cargo:string;
    //Metodo Construtor classe
    constructor(nome:string,telefone:string,rg:string,data_nascimento:Date,matricula:string,email:string,cargo:string){
       super(nome,rg,telefone,data_nascimento)
        this.cargo =cargo,
        this.email = email,
        this.matricula=matricula

        
    

   }
   mostrarDados(){
        console.log('Dados do funcionario')
        super.mostrarPessoa()
    
        console.log(`Matricula:${this.matricula}`)
        console.log(`Email:${this.email}`)
        console.log(`Cargo: ${this.cargo}`)

   }
}

const funcionario1 = new Funcionario('matheus','4354565647','0001',new Date ("2023-2-5"),"546457",'zuzu@',"medico")

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-+++++++++++++++++++++++++++++


class Paciente extends Pessoa{
    
    idade:string;
    faixaDeprioridade:string;
    sintomas:string;
    

    constructor(nome:string,telefone:string,rg:string,data_nascimento:Date,idade:string,faixaDeprioridade:string,sintomas:string){
        super(nome,telefone,rg,data_nascimento)
        this.idade = idade,
        this.faixaDeprioridade = faixaDeprioridade,
    
        this.sintomas=sintomas;
    }
       

    mostrarDados(){
        console.log(`Dados Paciente`)
        super.mostrarPessoa();
        
        console.log(`Idade: ${this.idade}`)
        console.log(`Faixa de Prioridade: ${this.faixaDeprioridade}`)
        console.log(`Sintomas: ${this.sintomas}`)

    }

}

const paciente1 = new Paciente('william','235435436','3543645',new Date("2025-5-5"),"19","Vermelho","febre,tosse")
paciente1.mostrarDados()
console.log(`===========================================`)
funcionario1.mostrarDados()
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
        console.log(`MOstra dados consulta`)

        console.log(`Medico :${funcionario1.nome}`)
        console.log(`Paciente: ${paciente1.nome}`)
       
        console.log(`Data: ${this.data.toLocaleString('pt-BR')}`)
        console.log(`Covenio: ${this.covencio}`)

    }

}

 const consulta1 = new Consulta(paciente1,funcionario1, new Date("9-2-1999"),true)
 
 
 //consulta1.mostrarDados()


 
 // ?:  isso quer dizer opcional 