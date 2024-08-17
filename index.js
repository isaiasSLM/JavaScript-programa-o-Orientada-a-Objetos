import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());
novoUser.nome = "Julia";
console.log(novoUser.nome);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("JavaScript", 20));
