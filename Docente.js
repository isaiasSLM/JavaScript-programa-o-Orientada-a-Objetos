import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    aprovarEstudante(estudante, Curso) {
        return `Estudante ${estudante} passou no curso de ${Curso}, o responsável ${this.nome}`;
    }
}

const novoDocente = new Docente("Ana", "a@a.com", "2024-03-03");

// console.log(novoDocente.aprovarEstudante("Juliana", "JS"));