export default interface IGetOrdersResponse {
    retorno: Retorno
}

interface Retorno {
    pedidos: Pedido[]
}

interface Pedido {
    pedido: Pedido2
}

interface Pedido2 {
    desconto: string
    observacoes: string
    observacaointerna: string
    data: string
    numero: string
    numeroPedidoLoja: string
    vendedor: string
    valorfrete: string
    totalprodutos: string
    totalvenda: string
    situacao: string
    loja: string
    dataPrevista: string
    tipoIntegracao: string
    cliente: Cliente
    itens: Iten[]
    parcelas: Parcela[]
    nota: Nota
    transporte: Transporte
}

interface Cliente {
    nome: string
    cnpj: string
    ie: string
    rg: string
    endereco: string
    numero: string
    complemento: string
    cidade: string
    bairro: string
    cep: string
    uf: string
    email: string
    celular: string
    fone: string
}

interface Iten {
    item: Item
}

interface Item {
    codigo: string
    descricao: string
    quantidade: string
    valorunidade: string
    precocusto: string
    descontoItem: string
    un: string
    pesoBruto?: string
    largura?: string
    altura?: string
    profundidade?: string
    unidadeMedida: string
    descricaoDetalhada: string
}

interface Parcela {
    parcela: Parcela2
}

interface Parcela2 {
    idLancamento: string
    valor: string
    dataVencimento: string
    obs: string
    destino: string
    forma_pagamento: FormaPagamento
}

interface FormaPagamento {
    id: string
    descricao: string
    codigoFiscal: string
}

interface Nota {
    serie: string
    numero: string
    dataEmissao: string
    situacao: string
    chaveAcesso: string
    valorNota: string
}

interface Transporte {
    transportadora: string
    cnpj: string
    tipo_frete: string
    volumes: Volume[]
    enderecoEntrega: EnderecoEntrega
}

interface Volume {
    volume: Volume2
}

interface Volume2 {
    id: string
    idServico: string
    servico: string
    codigoServico: string
    codigoRastreamento: string
    dataSaida: string
    prazoEntregaPrevisto: string
    valorFretePrevisto: string
    valorDeclarado: string
    remessa?: Remessa
    dimensoes: Dimensoes
}

interface Remessa {
    numero: string
    dataCriacao: string
}

interface Dimensoes {
    peso: string
    altura: string
    largura: string
    comprimento: string
    diametro: string
}

interface EnderecoEntrega {
    nome: string
    endereco: string
    numero: string
    complemento: string
    cidade: string
    bairro: string
    cep: string
    uf: string
}
