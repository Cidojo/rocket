import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { PostsOperation } from '../store/reducers/posts-reducer/posts-reducer';
import { UsersOperation } from '../store/reducers/users-reducer/users-reducer';

import { RootState } from '../store/reducers/root-reducer';
import styled from 'styled-components';
import { Posts } from '../componets/posts/posts';
import { Filter } from '../componets/filter/filter';

const WrappedSection = styled.section`
    max-width: 720px;
    padding: 0 75px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 375px) {
        padding: 0 15px;
    }
`;

const includes = (query: string, textArray: (string | undefined)[]) => {
    return textArray.reduce((isInclude, text) => {
        if (!text) {
            return isInclude;
        }

        return isInclude || text.toLowerCase().includes(query.toLowerCase());
    }, false);
};

const App = (): JSX.Element => {
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PostsOperation.loadPosts());
        dispatch(UsersOperation.loadUsers());
    }, []);

    const posts = useSelector(
        (state: RootState) => state.POSTS.posts,
        shallowEqual
    );

    const users = useSelector((state: RootState) => state.USERS.users);

    return (
        <WrappedSection>
            <Filter value={query} onChange={setQuery} />
            <Posts
                posts={
                    query
                        ? posts.filter((post) =>
                              includes(query, [
                                  post.title,
                                  post.body,
                                  users.get(post.userId)?.name,
                                  users.get(post.userId)?.username,
                              ])
                          )
                        : posts
                }
                users={users}
                query={query}
            />
        </WrappedSection>
    );
};

export default App;
