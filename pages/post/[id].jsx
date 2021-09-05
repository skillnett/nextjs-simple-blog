import React from 'react';
import { ImageSources } from '../../common/ImageSources';
import { PostFooter } from '../../components/posts/PostFooter';
import {
    AppLogo,
    PageContainer,
} from '../../components/posts/styledComponents';
import { BlogDataProvider } from '../../providers/BlogDataProvider';
import { generatePostsStaticPaths } from '../../utils/pathsUtils';

const Post = ({ post }) => {
    const markdownSection = 'section.markdown';
    const { title, author, sections, published_at } = post;

    const markdownContent = sections.find(
        ({ __component }) => __component === markdownSection
    )?.content;

    return (
        <PageContainer>
            <AppLogo src={ImageSources.appLogo} alt='app logo' />

            <h1>{title}</h1>
            <p>{markdownContent}</p>

            <PostFooter {...{ author, published_at }} />
        </PageContainer>
    );
};

export const getStaticProps = async ({ params }) => {
    const { getPost } = new BlogDataProvider();

    return {
        props: {
            post: await getPost(params.id),
        },
        revalidate: 600,
    };
};

export const getStaticPaths = async () => ({
    paths: await generatePostsStaticPaths(),
    fallback: 'blocking',
});

export default Post;
