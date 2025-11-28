import { Post } from "../Post";
import { ServerPost } from "./ServerPost";

export class PostMapper {
    static toPost(data: ServerPost[]): Post[] {
        return data.map((item) : Post => {
            return {
                userId: item.userId,
                title: item.title,
                body: item.body
            }
        })
    }
}