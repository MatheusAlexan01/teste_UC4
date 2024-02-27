abstract class Projeto {
   
    constructor(
        public nome:string,
        public responsavel:string,
        private cliente:string,
        public verba:number,
        public objetivo:string,
        public data_inicial:Date){

    }
    mostrarProjeto(){      
    }
    getcliente(): string{
        return this.cliente
    }
    settelefone(cliente: string): void{
        this.cliente = cliente
    
}



}


class Tarefas {
    
    constructor(
        
        protected responsavel:string,
        protected setor:string,
        public atribuicoes:string,
        public funcionario:number){
        
    }
    mostrarControle(){
        console.log(`RESPONSÁVEL PELA TAREFA:${this.responsavel}`)
        console.log(`SETOR DA TAREFA: ${this.setor}`)
        console.log(`ATRIBUIÇÕES: ${this.atribuicoes}`)
        console.log(`FUNCIONÁRIOS ENVOLVIDOS NA TAREFA: ${this.funcionario}`)
        

    }


}

class ProgressoProjetos extends Projeto{
    constructor(
        nome:string,
        responsavel:string,
        cliente:string,
        verba:number,
        objetivo:string,
        data_inicial:Date,
        public etapas_projeto:string,
        public datafinal_projeto:Date,

    ){
        super(nome,responsavel,cliente,verba,objetivo,data_inicial)
        
    }
    mostrarProgressoP(){
        console.log('Dados projeto:')
        console.log(`NOME DO PROJETO: ${this.nome}`)
        console.log(`RESPONSÁVEL PELO PROJETO: ${this.responsavel}`)
        console.log(`CLIENTE: ${super.getcliente()}`)
        console.log(`ORÇAMENTO: ${this.verba}`)
        console.log(`OBJETIVO: ${this.objetivo}`)
        console.log(`DATA DO PROJETO ACEITO: ${this.data_inicial.toLocaleString('pt-BR')}`)
        console.log(`PROGRESSO DO PROJETO: ${this.etapas_projeto}`)
        console.log(`DATA FINAL PARA ENTREGA:${this.datafinal_projeto.toLocaleString('pt-BR')}`)

    }     
    }

const ProgressoProjetos1 = new ProgressoProjetos ('Motores de Bicicletas','Allan','Matheus',9000,'Mobilidade ciclismo',new Date('2019-5-18'),'70% Concluido',new Date('2024-2-30'))
ProgressoProjetos1.mostrarProgressoP()
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

class ProgressoTarefas extends Tarefas{
    constructor(
        responsavel:string,
        setor:string,
        atribuicoes:string,
        funcionario:number,
        public etapas_tarefas:string,
        public datafinal_tarefas:Date,
    ){super(responsavel,setor,atribuicoes,funcionario)}

    mostrarProgressoT(){
        console.log('Dados Tarefas:')
        super.mostrarControle()
        console.log(`PROGRESSO DA TAREFA: ${this.etapas_tarefas}`)
        console.log(`DATA PARA ENTREGAR A TAREFA: ${this.datafinal_tarefas.toLocaleString('pt-BR')}`)

    }

}

const ProgressoTarefas1 = new  ProgressoTarefas ('Gust','Técnico','Montagem e Teste',15,'55% em Andamento',new Date('2023-1-22'))
ProgressoTarefas1.mostrarProgressoT()

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

class Comunicação {
    constructor(
       protected matriz:ProgressoProjetos,
       protected reunicaosemanal:number,
       protected reunicaoMensal:number,
       protected metodos:string,
       protected reunicaoCliente:any[],
    ){


    }
    mostrarcomuni(){
        console.log(`Registo de Reuniões do Projeto:`)
        console.log(`PROJETO:${ProgressoProjetos1.nome}`)
        console.log(`REUNIÃO SEMANAIS:${this.reunicaosemanal}`)
        console.log(`REUNIÃO MENSAL:${this.reunicaoMensal}`)
        console.log(`MÉTODOS E GERENCIAMENTO: ${this.metodos}`)
        console.log(` REUNIÃO COM CLIENTES:${this.reunicaoCliente}`)
        

    }

}

const Comunicação1 = new Comunicação (ProgressoProjetos1,3,12,'Metodologia KABAN',['É relizado 5 reuniões com o cliente do incio ao fim do projeto.'])
Comunicação1.mostrarcomuni()








