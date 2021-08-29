const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    nascimento: { type: Date, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numero: { type: String, unique: true, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    telefone: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    rg: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false }
}, 

{
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);