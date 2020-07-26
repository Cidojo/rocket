import { UserType, UsersState, UserMapType } from '../../../types';
import { AxiosResponse } from 'axios';
import { Dispatch, Reducer } from 'redux';
import createAPI from '../../../core/services/api';

const initialState = {
    users: new Map<number, UserType>(),
};

const ActionType = {
    SET_USERS: 'SET_USERS',
};

const mapUsersById = (users: UserType[]): UserMapType =>
    users.reduce((map, user) => map.set(user.id, user), new Map());

const ActionCreator = {
    setUsers: (users: UserMapType) => ({
        type: ActionType.SET_USERS,
        payload: users,
    }),
};

const Operation = {
    loadUsers: () => (
        dispatch: Dispatch,
        _: unknown,
        api: ReturnType<typeof createAPI>
    ) => {
        return api.get(`/users`).then((response: AxiosResponse<UserType[]>) => {
            const users = mapUsersById(response.data);

            dispatch(ActionCreator.setUsers(users));
        });
    },
};

const reducer: Reducer<UsersState> = (
    state: UsersState = initialState,
    action
) => {
    if (action.type === ActionType.SET_USERS) {
        return {
            ...state,
            users: action.payload,
        };
    }

    return state;
};

export { Operation as UsersOperation, ActionCreator as UsersActionCreator };
export default reducer;
