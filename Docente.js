import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    aprovarEstudante(estudante, Curso) {
        return `Estudante ${estudante} passou no curso de ${Curso}, o responsável ${this.nome}`;
    }
}
