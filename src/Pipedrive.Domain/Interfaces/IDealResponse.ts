interface Owner {
    id: number;
}

interface Stage {
    id: number;
    name: string;
}

interface Person {
    id: number;
    name: string;
}

interface Organization {
    id: number;
    name: string;
    address?: any;
}

interface Item2 {
    id: number;
    type: string;
    title: string;
    value: number;
    currency: string;
    status: string;
    visible_to: number;
    owner: Owner;
    stage: Stage;
    person: Person;
    organization: Organization;
    custom_fields: any[];
    notes: any[];
}

interface Item {
    result_score: number;
    item: Item2;
}

export default interface IDeal {
    items: Item[];
}
