import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Spacing } from '../../common/Spacing';
import { FontSize } from '../../common/FontSize';

const PageContainer = styled.div`
    min-height: 100vh;
    padding: 0 ${Spacing[2]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: auto;
`;

const PostsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: ${Spacing[12]};
`;

export const TextOverflow = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const PostCardTitle = styled.h2`
    font-size: ${FontSize.lg};
    -webkit-line-clamp: 1;
    ${TextOverflow}
`;

const PostFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction || 'row'};
    margin-top: ${Spacing[4]};
    width: 100%;
`;

const PostInfo = styled.span`
    display: block;
    font-size: ${FontSize.sm};
    margin-top: ${Spacing[1]};
`;

const AppLogo = styled.img`
    max-width: 300px;
`;

export {
    AppLogo,
    PostInfo,
    PageContainer,
    PostCardTitle,
    PostsContainer,
    PostFooterContainer,
};
