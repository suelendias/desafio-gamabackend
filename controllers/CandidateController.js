  
const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) 
    {

        const { nome, cargo, nascimento, estadoCivil, sexo, cep, endereco, numero, bairro, cidade, estado, telefone, celular, email, cpf, rg, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();
        
        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.telefone = telefone;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.cpf = cpf;
        newCandidate.rg = rg;
        newCandidate.veiculo = veiculo;   
        newCandidate.habilitacao = habilitacao;     

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};