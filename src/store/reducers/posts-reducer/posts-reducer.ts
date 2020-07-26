import { PostType, PostsState } from '../../../types';
import { AxiosResponse } from 'axios';
import { Dispatch, Reducer } from 'redux';
import createAPI from '../../../core/services/api';

const initialState: PostsState = {
    posts: [],
};

const ActionType = {
    SET_POSTS: 'SET_POSTS',
};

const ActionCreators = {
    setPosts: (posts: PostType[]) => ({
        type: ActionType.SET_POSTS,
        payload: posts,
    }),
};

const Operation = {
    loadPosts: () => (
        dispatch: Dispatch,
        _: unknown,
        api: ReturnType<typeof createAPI>
    ) =>
        api.get(`/posts`).then((response: AxiosResponse<PostType[]>) => {
            dispatch(ActionCreators.setPosts(response.data));
        }),
};

const reducer: Reducer<PostsState> = (
    state: PostsState = initialState,
    action
) => {
    if (action.type === ActionType.SET_POSTS) {
        return {
            ...state,
            posts: action.payload,
        };
    }

    return state;
};

export {
    Operation as PostsOperation,
    ActionCreators as PostsActionCreators,
    initialState as postsInitialState,
};
export default reducer;
