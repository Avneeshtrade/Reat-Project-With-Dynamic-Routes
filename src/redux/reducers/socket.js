import { socketActionTypes as ACTION } from '../actionTypes';

const initialState = {
    loading: false,
    socketObject: null,
    error: ''
};

const SocketReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTION.INITIATE_SOCKET_SUCCESS:
            return {
                ...state,
                loading: false,
                socketObject: action.payload,
                error: ''
            };

        case ACTION.INITIATE_SOCKET_FAILURE:
            return {
                ...state,
                loading: false,
                socketObject: null,
                error: action.payload
            };

        default: return state;
    }
};

export default SocketReducer;

