import { Action } from 'redux';

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export type UserMapType = Map<number, UserType>;

export interface UsersState {
    users: UserMapType;
}
export interface UsersSetAction extends Action {
    type: 'SET_USERS';
    payload: {
        users: UserMapType;
    };
}

export type UsersActions = UsersSetAction;
