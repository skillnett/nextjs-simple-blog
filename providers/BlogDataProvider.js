import { PostsUrlProvider } from './apiUrlProviders/PostsUrlProvider';

export class BlogDataProvider {
    urlProvider = new PostsUrlProvider();

    getAllPosts = async () => {
        const res = await fetch(this.urlProvider.allPostsUrl);
        const postsData = await res.json();

        return postsData;
    };

    getPost = async postId => {
        const res = await fetch(this.urlProvider.postUrl(postId));
        const postData = await res.json();

        return postData;
    };
}
