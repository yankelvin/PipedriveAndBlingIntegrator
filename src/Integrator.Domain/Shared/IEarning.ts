import {Document} from 'mongoose';

interface IEarning extends Document {
    value: number;
    date: Date;
}

export default IEarning;
