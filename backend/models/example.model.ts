import { Document, Schema, model } from "mongoose";

interface IExample extends Document {
    title: string;
    pages: number;
    isAvailable: boolean;
}

const ExampleSchema = new Schema<IExample>({
    title: { type: String, required: true, unique: true },
    pages: { type: Number, required: true, min: [1, "Se necesita al menos una página"], max: 10000 },
    isAvailable: { type: Boolean }
})

export const Example = model('Example', ExampleSchema)