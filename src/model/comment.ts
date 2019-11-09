export class Comment {
    user: string;
    userId: number;
    date: string;
    content: string

    constructor(user: string, userId: number, date: string, content: string) {
        this.user = user;
        this.userId = userId;
        this.date = date;
        this.content = content
    }

}
