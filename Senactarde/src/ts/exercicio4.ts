class Projeto{
   
    constructor(
        public nome:string,
        public responsavel:string,
        public cliente:string,
        public equipe:string,
        public objetivo:string){

    }
    mostrarProjeto(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Responsavel: ${this.responsavel}`)
        console.log(`Cliente: ${this.cliente}`)
        console.log(`Equipe: ${this.equipe}`)
        console.log(`Objetivo: ${this.objetivo}`)

    }

    
}

const projeto1 = new Projeto ('Fome Zero','icaro','População da cidade','operacional','acabar com a fome no estado')
console.log(projeto1.mostrarProjeto());


class Tarefas{
    
    constructor(
        public responsavel:string,
        public setor:string,
        public Atribuicoes:string,
        public funcionario:number){
        
    }
    mostrarControle(){
        console.log(`${this.responsavel}`)
        console.log(`${this.setor}`)
        console.log(`${this.Atribuicoes}`)
        console.log(`${this.funcionario}`)
        

    }


}

class Progresso{
    constructor(
        public etapas_projetos:string,
        public etapas_equipe:string,
        public datafinal_projeto:Date,

    ){
        

    }


}



const controle1 = new Tarefas ('planejamento','Escopo de recursos','Verbas',120)
console.log(controle1.mostrarControle());


class Comunicacao{
   
    constructor( 
        public HorarioReuniao:string,
        public ComunicaoCliente:string){
        


    }
    mostrarComunicao(){
        console.log(`${this.HorarioReuniao}`)
        console.log(`${this.ComunicaoCliente}`)

    }

}

const comunicacao1 = new Comunicacao ('todos os dias',' 3 vezes na semana')

console.log(comunicacao1.mostrarComunicao());

