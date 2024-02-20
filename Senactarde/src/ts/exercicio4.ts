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

}

const projeto1 = new CadastroProjeto ('Fome Zero','icaro','População da cidade',new Date ('2024-02-20'),'operacional','acabar com a fome no estado')
console.log(projeto1);


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


}

const controle1 = new ControleTarefas ('planejamento','Escopo de recursos','Verbas',120)
console.log(controle1);


class Comunicacao{
    HorarioReuniao:string;
    ComunicaoCliente:string;
    constructor( HorarioReuniao:string,ComunicaoCliente:string){
        this.HorarioReuniao=HorarioReuniao;
        this.ComunicaoCliente=ComunicaoCliente


    }

}

const comunicacao1 = new Comunicacao ('todos os dias',' 3 vezes na semana')

console.log(comunicacao1);