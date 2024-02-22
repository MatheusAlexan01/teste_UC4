class CadastroProjeto{
   
    constructor(
        public nome:string,
        public responsavel:string,
        public cliente:string,
        public datadeEntrega:Date,
        public equipe:string,
        public objetivo:string){

    }
    mostrarProjeto(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Responsavel: ${this.responsavel}`)
        console.log(`Cliente: ${this.cliente}`)
        console.log(`Data de Entrega: ${this.datadeEntrega.toLocaleString('pt-BR')}`)
        console.log(`Equipe: ${this.equipe}`)
        console.log(`Objetivo: ${this.objetivo}`)

    }
}

const projeto1 = new CadastroProjeto ('Fome Zero','icaro','População da cidade',new Date ('2024-02-20'),'operacional','acabar com a fome no estado')
console.log(projeto1.mostrarProjeto());


class ControleTarefas{
    
    constructor(
        public tarefasInicial:string,
        public gerenciamentoRecursos:string,
        public gerenciamentoFinanceiro:string,
        public funcionario:number){
        
    }
    mostrarControle(){
        console.log(`${this.tarefasInicial}`)
        console.log(`${this.gerenciamentoRecursos}`)
        console.log(`${this.gerenciamentoFinanceiro}`)
        console.log(`${this.funcionario}`)
        

    }


}

const controle1 = new ControleTarefas ('planejamento','Escopo de recursos','Verbas',120)
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

