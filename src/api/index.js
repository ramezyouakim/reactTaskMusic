
import config from '../config'

export default {
    async getFeaturedPlaylists(offset) {
        return fetch(`${config.serverUrl}${config.apiVersion}/browse/featured-playlists?limit=30&offset=${offset}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${config.accessToken}`,
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            console.log(response)
            return response
        }).catch((err) => {
            console.log(err)
            return err
        })
    },
    async getArtistPlaylists(playlist_id) {
        return fetch(`${config.serverUrl}${config.apiVersion}/playlists/${playlist_id}/tracks`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${config.accessToken}`,
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            console.log(response)
            return response
        }).catch((err) => {
            console.log(err)
            return err
        })
    }
}