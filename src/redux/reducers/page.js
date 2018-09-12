import {
    GET_CHAR_REQUEST,
    GET_CHARA_SUCCESS,
    GET_CHAR_FAIL,
    SET_CHAR, UPDATE_CHAR,
    GET_HOME_REQUEST
} from '../constants/page'

const initialState = {
    isFetched: false,
    error: null,
    characters: [],
    displayedCharacters: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHAR_REQUEST:
            return {
                ...state,
                isFetched: true
            }

        case GET_HOME_REQUEST:
            return {
                ...state,
                isFetched: false
            }

        case GET_CHARA_SUCCESS:
            return {
                ...state,
                isFetched: false
            }

        case GET_CHAR_FAIL:
            return {
                ...state,
                isFetched: false,
                error: action.payload
            }

        case SET_CHAR:
            return {
                ...state,
                characters: action.payload
            }

        case UPDATE_CHAR:
            return {
                ...state,
                displayedCharacters: action.payload
            }

        default:
            return state
    }
}
