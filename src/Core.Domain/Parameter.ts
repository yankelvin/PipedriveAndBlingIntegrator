import {model, Schema} from 'mongoose';

import IParameter from './Interfaces/IParameter';

const ParameterSchema = new Schema(
    {
        name: {type: String, default: null, required: true},
        value: {type: String, default: null, required: true},
        status: {type: Boolean, default: false, required: true},
    },
    {timestamps: true},
);

export default model<IParameter>('Parameter', ParameterSchema);
