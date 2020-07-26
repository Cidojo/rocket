import { combineReducers, Reducer } from 'redux';

import postsReducer from './posts-reducer/posts-reducer';
import usersReducer from './users-reducer/users-reducer';

import { PostsState, UsersState } from '../../types';

export interface RootState {
    POSTS: PostsState;
    USERS: UsersState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    POSTS: postsReducer,
    USERS: usersReducer,
});

export default rootReducer;
