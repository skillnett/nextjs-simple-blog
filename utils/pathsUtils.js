import { BlogDataProvider } from '../providers/BlogDataProvider';

const generateStaticPaths = (data, paramKey) =>
    data.map(item => ({
        params: { [paramKey]: `${item[paramKey]}` },
    }));

export const generatePostsStaticPaths = async () => {
    const { getAllPosts } = new BlogDataProvider();
    const posts = await getAllPosts();

    return generateStaticPaths(posts, 'id');
};
