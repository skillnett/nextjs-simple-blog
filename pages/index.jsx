import {
    PostCardTitle,
    PageContainer,
    PostsContainer,
    AppLogo,
} from '../components/posts/styledComponents';
import Link from 'next/link';
import { BlogDataProvider } from '../providers/BlogDataProvider';
import styles from '../styles/posts.module.scss';
import { PostFooter } from '../components/posts/PostFooter';
import { ImageSources } from '../common/ImageSources';

const Blog = ({ posts }) => (
    <PageContainer>
        <AppLogo src={ImageSources.appLogo} alt='app logo' />
        <PostsContainer>
            {posts.map(({ published_at, author, title, id }) => (
                <Link href={`/post/${id}`} key={id}>
                    <a className={styles.postCard}>
                        <PostCardTitle>{title}</PostCardTitle>
                        <PostFooter
                            {...{ direction: 'column', author, published_at }}
                        />
                    </a>
                </Link>
            ))}
        </PostsContainer>
    </PageContainer>
);

export const getStaticProps = async () => {
    const { getAllPosts } = new BlogDataProvider();

    return {
        props: {
            posts: await getAllPosts(),
        },
    };
};

export default Blog;
