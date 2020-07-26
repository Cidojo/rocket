import { Action } from 'redux';

export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface PostsState {
    posts: PostType[];
}
export interface PostsSetAction extends Action {
    type: 'SET_POSTS';
    payload: {
        posts: PostType[];
    };
}

export type PostsActions = PostsSetAction;
