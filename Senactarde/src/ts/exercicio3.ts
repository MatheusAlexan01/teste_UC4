class cadastroContas {

    constructor(public titularConta: string,
        public saldo: number,
        public tipo: string,
        public limiteTransacoesMensal: number) {

    }
    mostarConta() {
        console.log(`Titular Conta: ${this.titularConta}`)
        console.log(`Saldo: ${this.saldo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Limite: ${this.limiteTransacoesMensal}`)
    }

}

const contas1 = new cadastroContas('MATHEUS A F', 10, 'corrente', 3)
console.log(contas1.mostarConta())

class controleDespesasReceitas {

    constructor(public despesasSemanal: number,
        public despesasMensal: number,
        public depositosMensais: number,
        public saquesMensais: number,
        public emprestimoSolicidado: number,
        public salario: number) {

    }
    mostrarDesespesas() {
        console.log(`Desespesa Semanal: ${this.despesasSemanal}`)
        console.log(`Desespesa Mensal: ${this.despesasMensal}`)
        console.log(`Desespesa Semanal: ${this.depositosMensais}`)
        console.log(`Saques do mes: ${this.saquesMensais}`)
        console.log(`Salario: ${this.salario}`)


    }

}

const controleGeral = new controleDespesasReceitas(100, 400, 4, 2, 1, 1600)
console.log(controleGeral.mostrarDesespesas())

class planejamento {

    constructor(
        public poupançaMensal: number,
        public pouparGastos: number) {

    }
    mostrarPlajamento() {
        console.log(`Poupança Mensal:${this.poupançaMensal}`)
        console.log(`Poupança Gastos:${this.pouparGastos}`)
    }
}

const planejamento1 = new planejamento(300, 1200)
console.log(planejamento1.mostrarPlajamento())