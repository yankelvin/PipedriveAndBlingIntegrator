import {Document} from 'mongoose';

interface IParameter extends Document {
    name: string;
    value: string;
    status: boolean;
}

export default IParameter;
