export class PublicadoresModel {
    constructor(
        public id: number,
        public titulo: string,
        public publicacoes: Array<number>,
        public nInscritos: number,
        public image: string
    ) {}
}