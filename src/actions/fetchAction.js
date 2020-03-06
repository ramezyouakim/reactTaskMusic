import {
    Fetch_Featured_Playlists_START,
    Fetch_Featured_Playlists_FAILED,
    Fetch_Featured_Playlists_SUCESS,
    Fetch_Featured_Playlists_More_START,
    Fetch_Featured_Playlists_More_SUCESS,
    Fetch_Artists_Playlists_START,
    Fetch_Artists_Playlists_SUCESS
} from '../actions/types';
import store from '../store';
import api from '../api';

export function fetchFeaturedPlaylists() {
    return async (dispatch) => {
        dispatch({
            type: Fetch_Featured_Playlists_START
        })
        const response = await api.getFeaturedPlaylists(0),
            responseJson = await response.json()
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                    /* Handling Success */
                    dispatch(handleFetchRequestSuccess(responseJson))
                    break;
                case 400:
                    /* Handling Bad Request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 401:
                    /* Handling unauthorized */
                    dispatch(handleFetchRequestError(responseJson))
                case 403:
                    /* Handling forbidden request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                default:
                    break;
            }
        } else {
            dispatch(handleFetchRequestError())
        }
    }
}

export function fetchFeaturedPlaylistsMore() {
    return async (dispatch) => {
        dispatch({
            type: Fetch_Featured_Playlists_More_START,
        })
        const response = await api.getFeaturedPlaylists(store.getState().music.offset),
            responseJson = await response.json()
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                    /* Handling Success */
                    dispatch(handleFetchRequestMoreSuccess(responseJson))
                    break;
                case 400:
                    /* Handling Bad Request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 401:
                    /* Handling unauthorized */
                    dispatch(handleFetchRequestError(responseJson))
                case 403:
                    /* Handling forbidden request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                default:
                    break;
            }
        } else {
            dispatch(handleFetchRequestError())
        }
    }
}

export function fetchArtistPlaylists(playlist_id) {
    return async (dispatch) => {
        dispatch({
            type: Fetch_Artists_Playlists_START,
        })
        const response = await api.getArtistPlaylists(playlist_id),
            responseJson = await response.json()
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                    /* Handling Success */
                    dispatch(handleFetchRequestArtistsSuccess(responseJson))
                    break;
                case 400:
                    /* Handling Bad Request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 401:
                    /* Handling unauthorized */
                    dispatch(handleFetchRequestError(responseJson))
                case 403:
                    /* Handling forbidden request */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                case 500:
                    /* Handling internal error */
                    dispatch(handleFetchRequestError(responseJson))
                    break;
                default:
                    break;
            }
        } else {
            dispatch(handleFetchRequestError())
        }
    }
}

handleFetchRequestSuccess = (responseJson) => {
    return {
        type: Fetch_Featured_Playlists_SUCESS,
        featuredPlaylists: responseJson.playlists.items
    }
}

handleFetchRequestMoreSuccess = (responseJson) => {
    return {
        type: Fetch_Featured_Playlists_More_SUCESS,
        featuredPlaylistsMore: responseJson.playlists.items
    }
}

handleFetchRequestArtistsSuccess = (responseJson) => {
    return {
        type: Fetch_Artists_Playlists_SUCESS,
        artistsPlaylist: responseJson.items
    }
}

handleFetchRequestError = (responseJson) => {
    return {
        type: Fetch_Featured_Playlists_FAILED,
        errorTitle: responseJson.error.title ? responseJson.error.title : 'Something went wrong',
        errorMessage: responseJson.error.message ? responseJson.error.message : 'Something went wrong, Please try again!'
    }
}