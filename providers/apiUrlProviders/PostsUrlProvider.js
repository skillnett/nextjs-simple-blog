export class PostsUrlProvider {
    baseUrl = "https://job-test-blog.madethis.dev"

    allPostsUrl = `${this.baseUrl}/posts`

    postUrl = (postId) => `${this.allPostsUrl}/${postId}`
}