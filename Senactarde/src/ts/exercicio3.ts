  abstract class Cliente{
constructor(
    public nome:String,
    public CPF?:Boolean,
    public CNPJ?:Boolean,){
 


}
mostrarPessoa(){
    
} 



}

class conta {
    constructor(
     public contacorrente:boolean,
     public contaPoucança:boolean, 
     public contasalario:boolean  
    ){

    }
    mostrartipoconta(){
        console.log(`CONTA CORRENTE: ${this.contacorrente}`)
        console.log(`CONTA POUPANÇA: ${this.contaPoucança}`)
        console.log(`CONTA SALARIO: ${this.contasalario}`)
    }

}


class cadastroContas extends Cliente {

    constructor(
        nome:string,
        CPF:Boolean,
        CNPJ:Boolean,
        public titularConta: string,
        private saldo: number,
        
        public limiteTransacoesMensal: number) {
        super(nome,CPF,CNPJ)
    }
    mostarConta() {
        console.log(`PESSOA OU ORGÃO SOLICITANTE: ${this.nome}`)
        console.log(`PESSOA FISICA ? : ${this.CPF}`)
        console.log(`PESSA JURIDICA ?: ${this.CNPJ}`)
        console.log(`Titular Conta: ${this.titularConta}`)
        console.log(`Saldo: ${this.getsaldo()}`)
        
        console.log(`Limite de Transações Mensais: ${this.limiteTransacoesMensal}`)
    }

    getsaldo(): number{
        return this.saldo
    }

    setsaldo(saldo: number):void{
        this.saldo=saldo

    }

}


const contas1 = new cadastroContas('Val', true, false, "MATHEUS A F",10, 30)
contas1.mostarConta()
contas1.setsaldo(100000)
console.log(contas1.getsaldo())

console.log("#################################################################################")

class controleDespesasReceitas extends conta{

    constructor(
        contacorrente:boolean,
        contaPoucança:boolean,
        contasalario:boolean,
        public despesasSemanal: number,
        public despesasMensal: number,
        public depositosMensais: number,
        public saquesMensais: number,
        public emprestimoSolicidado: number,
        public salario: number) {
        super(contacorrente,contaPoucança,contasalario)
    }
    mostrarDesespesas() {
        console.log("CONTROLE E RESGISTRO DE CONTA")
        super.mostrartipoconta()
        console.log(`Desespesa Semanal: ${this.despesasSemanal}`)
        console.log(`Desespesa Mensal: ${this.despesasMensal}`)
        console.log(`Desespesa Semanal: ${this.depositosMensais}`)
        console.log(`Saques do mes: ${this.saquesMensais}`)
        console.log(`Salario: ${this.salario}`)


    }

}

const controleGeral = new controleDespesasReceitas(true,false,true, 200, 800, 5, 12,1,1600)
console.log(controleGeral.mostrarDesespesas())

console.log("#################################################################################")

class planejamento {

    constructor(
        public poupançaMensal: number,
        public pouparGastos: number) {

    }
    mostrarPlajamento() {
        console.log("PLANEJAMENTO")
        console.log(`Poupança Mensal:${this.poupançaMensal}`)
        console.log(`Poupança Gastos:${this.pouparGastos}`)
    }
}

const planejamento1 = new planejamento(300, 1200)
console.log(planejamento1.mostrarPlajamento())