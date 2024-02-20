class CadastroProjeto{
    nome:string;
    responsavel:string;
    cliente:string;
    datadeEntrega:Date;
    equipe:string;
    objetivo:string;
    constructor(nome:string,responsavel:string,cliente:string,datadeEntrega:Date,equipe:string,objetivo:string){
        this.nome=nome,
        this.responsavel=responsavel,
        this.cliente=cliente,
        this.datadeEntrega=datadeEntrega,
        this.equipe=equipe,
        this.objetivo=objetivo
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
    tarefasInicial:string;
    gerenciamentoRecursos:string;
    gerenciamentoFinanceiro:string;
    funcionario:number;
    constructor(tarefasInicial:string,gerenciamentoRecursos:string,gerenciamentoFinanceiro:string,funcionario:number){
        this.tarefasInicial=tarefasInicial,
        this.gerenciamentoRecursos=gerenciamentoRecursos,
        this.gerenciamentoFinanceiro=gerenciamentoFinanceiro,
        this.funcionario=funcionario

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
    HorarioReuniao:string;
    ComunicaoCliente:string;
    constructor( HorarioReuniao:string,ComunicaoCliente:string){
        this.HorarioReuniao=HorarioReuniao;
        this.ComunicaoCliente=ComunicaoCliente


    }
    mostrarComunicao(){
        console.log(`${this.HorarioReuniao}`)
        console.log(`${this.ComunicaoCliente}`)

    }

}

const comunicacao1 = new Comunicacao ('todos os dias',' 3 vezes na semana')

console.log(comunicacao1.mostrarComunicao());