function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User("Juliana", "j@j");
console.log(novoUser.exibirInfos());









// // --------------------------------------------------OBSEVAÇÕES--------------------------------------------------------------------//

// // new, vai criar instancias de obj apartir de uma função construtora.