import {
    SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED,
    SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILED,
    SIGN_OUT
} from '../actions/types';

export default function (auth = {authenticated: false, token: null, logging: false, errorMsg: ''}, action) {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, auth, {
                logging: true,
                errorMsg: 'Logging...'
            })
        case SIGN_IN_SUCCESS:
            return Object.assign({}, auth, {
                logging: false,
                token: action.result.data,
                authenticated: true,
                errorMsg: ''
            })
        case SIGN_IN_FAILED:
            return Object.assign({}, auth, {
                logging: false,
                authenticated: false,
                errorMsg: 'Incorrect username or password.'
            })
        case SIGN_UP:
            return Object.assign({}, auth, {
                errorMsg: 'Signing up...'
            })
        case SIGN_UP_SUCCESS:
            return Object.assign({}, auth, {
                errorMsg: 'Sign up success'
            })
        case SIGN_UP_FAILED:
            return Object.assign({}, auth, {
                errorMsg: 'Sign up failed.'
            })
        case SIGN_OUT:
            return Object.assign({}, auth, {
                authenticated: false,
                token: null,
            })
        default:
            return auth
    }

}