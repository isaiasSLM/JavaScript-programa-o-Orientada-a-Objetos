const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
    criarCurso: function () {
        console.log("Curso criado!");
    }
}
Object.setPrototypeOf(admin, user); 
admin.criarCurso();
admin.exibirInfos();


// --------------------------------------------------OBSEVAÇÕES--------------------------------------------------------------------//

// object.setPrototypeOf usa dois parâmetros como argumento. "admin" vai pegar "user" como parâmetro ou base.
// Resumindo, o JS vai usar um obj como prototipo para herdar propriedades de outro.