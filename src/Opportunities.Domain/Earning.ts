import {model, Schema} from 'mongoose';

import IEarning from './Interfaces/IEarning';

const EarningSchema = new Schema(
    {
        value: {type: Number, default: 0, required: true},
        date: {type: Date, default: new Date(), required: true},
    },
    {timestamps: true},
);

export default model<IEarning>('Earning', EarningSchema);
