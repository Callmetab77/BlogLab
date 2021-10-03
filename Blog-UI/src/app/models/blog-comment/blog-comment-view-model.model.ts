export class BlogCommentViewModel {
  constructor (
    public parentBlogCommentId: number,
    public blogCommentId: number,
    public blogId: number,
    public content: string,
    public username: string,
    public applicationUserId: number,
    public publishDate: Date,
    public updateDate: Date,
    public isEditable: boolean,
    public deleteConfirm: boolean,
    public isReplying: boolean,
    public comments: BlogCommentViewModel[]
  ) {}
}

