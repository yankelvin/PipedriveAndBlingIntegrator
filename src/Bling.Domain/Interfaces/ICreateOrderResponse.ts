interface CodigosRastreamento {
    codigo_rastreamento: string;
}

interface Volume2 {
    servico: string;
    codigoRastreamento: string;
}

interface Volume {
    volume: Volume2;
}

interface Pedido {
    numero: string;
    idPedido: number;
    codigos_rastreamento: CodigosRastreamento;
    volumes: Volume[];
}

interface RetornoPedido {
    pedido: Pedido;
}

interface Retorno {
    pedidos: RetornoPedido[];
}

export default interface ICreateOrderResponse {
    retorno: Retorno;
}
