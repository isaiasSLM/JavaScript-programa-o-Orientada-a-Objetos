import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("JavaScript", 20));

// --------------------------------------------------OBSEVAÇÕES--------------------------------------------------------------------//
// ENCAPSULAMENTO: É uma forma de proteger as propriedades da class. Evitando alterações indevidas e bugs.
// Existe duas ferramentas: ATRIBUTOS PRIVADOS E MÉTODOS ASSESORES.
// Atributos privados.
// Usamos # antes do contructor() e nas propriedades.
