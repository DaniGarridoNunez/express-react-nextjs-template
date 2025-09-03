import { Schema, model } from "mongoose";

const ExampleSchema = new Schema({
    title: { type: String, required: true, unique: true },
    pages: { type: Number, required: true, min: [1, "Se necesita al menos una página"], max: 10000 },
    isAvailable: { type: Boolean }
})

export const Example = model('Example', ExampleSchema)