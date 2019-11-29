export class UsuarioModel {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public likes: Array<number>,
        public publicadoresInscritos: Array<number>
    ) { }
}
