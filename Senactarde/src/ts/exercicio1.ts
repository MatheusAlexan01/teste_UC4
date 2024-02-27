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



 class Funcionario extends Pessoa {
    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento: Date,
        endereco: any[],
        public cargo: string,
        public matricula:string,
        public genero?:string,
        email?: string) {
        super(nome, telefone, cpf, data_nascimento, endereco, email);
    }
    mostrarDados() {
        console.log("DADOS DO FUNCIONARIO")
        super.mostrarPessoa()
        console.log(`CARGO: ${this.cargo}`)
        console.log(`MATRICULA: ${this.matricula}`)
        console.log (`GENERO: ${this.genero}`)

    }
}
const funcionario1 = new Funcionario('Matheus', '8498293458', '7001923851', new Date('2001-3-03'), ["Rua Natal", 122, "Bairro Potengi"], "medico",'123000','masculino', "matheus@gmail")
funcionario1.mostrarDados()


document.addEventListener('DOMContentLoaded',

function(){
const form = document.querySelector('#formFuncionario');
if(form){
    form.addEventListener('submit',
    function(event){
        event.preventDefault();
    


const nome  = (document.getElementById('nome')as HTMLInputElement).value;
const email  = (document.getElementById('email')as HTMLInputElement).value;
const telefone  = (document.getElementById('telefone')as HTMLInputElement).value;
const cpf  = (document.getElementById('cpf')as HTMLInputElement).value;
const dataformada  = (document.getElementById('dataNascimento')as HTMLInputElement).value;
const cargo  = (document.getElementById('cargo')as HTMLInputElement).value;
const matricula  = (document.getElementById('matricula')as HTMLInputElement).value;
const endereco  = (document.getElementById('endereco')as HTMLInputElement).value;
const genero = (document.getElementById('genero')as HTMLSelectElement).value;

const data =  new Date( dataformada).toLocaleDateString('pt-BR')

localStorage.setItem('nome',nome)
localStorage.setItem('email',email)
localStorage.setItem('telefone',telefone)
localStorage.setItem('cpf',cpf)
localStorage.setItem('dataNascimento',data)
localStorage.setItem('cargo',cargo)
localStorage.setItem('matricula',matricula)
localStorage.setItem('endereco',endereco)
localStorage.setItem('genero',genero)

window.location.href = './funcionario.html';

});

}else{

    console.error('Formulario não encontrado!')
}

})

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