export class ComentarioModel {
    constructor(
        public id: number,
        public idPublicacao: number,
        public nomeUsuario: string,
        public comentario: string,
        public timestamp: Date
    ) {}
}
