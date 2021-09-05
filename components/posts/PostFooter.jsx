import React from 'react';
import { PostFooterContainer, PostInfo } from './styledComponents';
import dayjs from 'dayjs';

export const PostFooter = ({ author, direction, published_at }) => (
    <PostFooterContainer direction={direction}>
        <PostInfo>
            Published at: {dayjs(published_at).format('D MMM YYYY')}
        </PostInfo>
        <PostInfo>Author: {author}</PostInfo>
    </PostFooterContainer>
);
