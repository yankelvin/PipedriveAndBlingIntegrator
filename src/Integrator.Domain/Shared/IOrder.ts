export default interface BlingOrder {
    pedido: IOrder;
}

interface IOrder {
    cliente: Cliente;
    itens: Itens;
}

interface Cliente {
    nome: string;
}

interface Itens {
    item: Item[];
}

interface Item {
    codigo: string;
    descricao: string;
    qtde: string;
    vlr_unit: string;
}
