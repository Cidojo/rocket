import React from 'react';
import styled from 'styled-components';
import { UserMapType, PostType } from '../../types';

import { Post } from '../post/post';

type Props = {
    posts: PostType[];
    users: UserMapType;
    query: string;
};

const WrappedList = styled.ul`
    margin: 0 auto;
    padding: 0;
    list-style: none;
`;

const WrappedItem = styled.li`
    margin: 20px 0;
    padding: 20px 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #fff;
`;

const Posts: React.FC<Props> = ({ posts, users, query }) => {
    return (
        <WrappedList>
            {posts.length === 0 && <p>Ничего не найдено</p>}
            {posts.length > 0 && query && <p>Найдено {posts.length} записей</p>}
            {posts.map((post) => (
                <WrappedItem key={post.id}>
                    <Post
                        post={post}
                        user={users.get(post.userId)}
                        query={query}
                    />
                </WrappedItem>
            ))}
        </WrappedList>
    );
};

export { Posts };
