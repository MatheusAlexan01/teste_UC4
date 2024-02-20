class cadastroContas {
    titularConta: string;
    saldo: number;
    tipo: string;
    limiteTransacoesMensal: number;
    constructor(titularConta: string, saldo: number, tipo: string, limiteTransacoesMensal: number) {
        this.titularConta = titularConta,
            this.saldo = saldo,
            this.tipo = tipo,
            this.limiteTransacoesMensal = limiteTransacoesMensal


    }
    mostarConta(){
        console.log(`Titular Conta: ${this.titularConta}`)
        console.log(`Saldo: ${this.saldo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Limite: ${this.limiteTransacoesMensal}`)
    }

}

const contas1 = new cadastroContas('MATHEUS A F', 10, 'corrente', 3)
console.log(contas1.mostarConta())

class controleDespesasReceitas {
    despesasSemanal: number;
    despesasMensal: number;
    depositosMensais: number;
    saquesMensais: number;
    emprestimoSolicidado: number;
    salario: number;
    constructor(despesasSemanal: number, despesasMensal: number, depositosMensais: number, saquesMensais: number, emprestimoSolicidado: number, salario: number) {
        this.despesasSemanal = despesasSemanal,
            this.despesasMensal = despesasMensal,
            this.depositosMensais = depositosMensais,
            this.saquesMensais = saquesMensais,
            this.emprestimoSolicidado = emprestimoSolicidado,
            this.salario = salario
    }
    mostrarDesespesas(){
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
    poupançaMensal: number;
    pouparGastos: number;
    constructor(poupançaMensal: number, pouparGastos: number) {
        this.poupançaMensal = poupançaMensal,
            this.pouparGastos = pouparGastos
    }
    mostrarPlajamento(){
        console.log(`Poupança Mensal:${this.poupançaMensal}`)
        console.log(`Poupança Gastos:${this.pouparGastos}`)
    }
}

const planejamento1 = new planejamento(300, 1200)
console.log(planejamento1.mostrarPlajamento())