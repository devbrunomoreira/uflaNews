import { SecaoModel } from './secao.model';

export class PublicacaoModel {
    constructor(
        public id: number,
        public idPublicador: number,
        public titulo: string,
        public data: Date,
        public img_url: string,
        public likes: number,
        public secoes: Array<SecaoModel>,
    ) { }
}