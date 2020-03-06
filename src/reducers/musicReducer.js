import {
    Fetch_Featured_Playlists_START,
    Fetch_Featured_Playlists_FAILED,
    Fetch_Featured_Playlists_SUCESS,
    Fetch_Featured_Playlists_More_START,
    Fetch_Featured_Playlists_More_SUCESS,
    Fetch_Artists_Playlists_START,
    Fetch_Artists_Playlists_FAILED,
    Fetch_Artists_Playlists_SUCESS
} from '../actions/types'

const INIT_STATE = {
    featuredPlaylists: [],
    artistsPlaylist: [],
    loading: false,
    refreshing: false,
    refreshingBottom: false,
    errorTtile: '',
    errorMessage: '',
    offset: 0,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case Fetch_Featured_Playlists_START:
            return { ...state, loading: true, refreshing: true }
        case Fetch_Featured_Playlists_FAILED:
            return { ...state, loading: false, refreshing: false, refreshingBottom: false, errorTtile: action.errorTitle, errorMessage: action.errorMessage }
        case Fetch_Featured_Playlists_SUCESS:
            return { ...state, loading: false, refreshing: false, featuredPlaylists: action.featuredPlaylists }
        case Fetch_Featured_Playlists_More_START:
            return { ...state, loading: false, refreshingBottom: true, offset: state.offset + 1 }
        case Fetch_Featured_Playlists_More_SUCESS:
            return { ...state, loading: false, refreshingBottom: false, featuredPlaylists: state.featuredPlaylists.concat(action.featuredPlaylistsMore) }
        case Fetch_Artists_Playlists_START:
            return { ...state, loading: true, refreshing: true }
        case Fetch_Artists_Playlists_FAILED:
            return { ...state, loading: false, refreshing: false, errorTtile: action.errorTitle, errorMessage: action.errorMessage }
        case Fetch_Artists_Playlists_SUCESS:
            return { ...state, loading: false, refreshing: false, artistsPlaylist: action.artistsPlaylist }

        default:
            return state;
    }
}