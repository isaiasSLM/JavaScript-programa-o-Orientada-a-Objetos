export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "Estudante";
        this.#ativo = ativo;
    }
    
    get nome () {
        return this.#nome
    }

    get email () {
        return this.#email
    }

    get nascimento () {
        return this.#nascimento
    }

    get role () {
        return this.#role
    }

    get ativo () {
        return this.#ativo
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo:this.#ativo,
        })
    }
        
    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}`
    }
}

const novoUser = new User("Juliana", "j@j.com", "24-01-01",);
// console.log(novoUser);
// console.log(novoUser.exibirInfos());


// --------------------------------------------------OBSEVAÇÕES--------------------------------------------------------------------//
// Para exportar é necessário avisar ao JS que vamos usar essa sintaxe fazendo umas instalações.
// terminal -> nom init y | vai criar um arquivo package.json na raiz do projeto.
// no arquivo package vai inserir o comado. "type" :"module",
// get: É um método acessor. Ela vai da permissão para visualizar essa propriedade.
