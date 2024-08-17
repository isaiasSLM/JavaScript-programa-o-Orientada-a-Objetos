import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    criarCurso(nomeDoCurso, qtdVagas) {
        return `Curso ${nomeDoCurso} criado com ${qtdVagas}`;
    }
}


// --------------------------------------------------OBSEVAÇÕES--------------------------------------------------------------------//
// (Admin extends User) Significa que Admin vai usar partes de User.
// super é de super classe. A class "admin" vai herdar o construtor() da class base que "User".