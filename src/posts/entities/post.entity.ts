
export class PostEntity {
    id: number;
    published: boolean;
    title: string;
    content: string;
    createAt: Date;
    updateAt: Date;
    authorId: number;
}
