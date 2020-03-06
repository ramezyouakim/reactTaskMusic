
/** Home Screen Class Component */
import React from 'react';
import {
    View,
    ActivityIndicator,
    SafeAreaView,
    Alert,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import store from '../store';
import {
    fetchArtistPlaylists
} from '../actions/fetchAction';
import { compare,filteredArr } from '../modules/utilities';
import { errorMessageFunction } from '../modules/messages/errorMessage';
import Card from '../components/card';
import styles from '../modules/styles';
import values from '../modules/values';

class PlaylistArtistsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistId: this.props.navigation.state.params.playlistId,
            artistsTracks: [],
        }
    }

    async componentDidMount() {
        const {
            fetchArtistPlaylists
        } = this.props;
        fetchArtistPlaylists(this.state.playlistId);
        this.unsubscribe = store.subscribe(() => {
            let artistsPlaylist = store.getState().music.artistsPlaylist;
            let artistsTracksList = filteredArr(artistsPlaylist.filter((i) => i.track !== null))
            this.setState({
                artistsTracks: artistsTracksList.sort(compare)
            })
        })
    }

    renderRow(item) {
        return (
            item.track !== null ?
                <Card
                    name={item.track.artists[0].name}
                    owner={item.track.artists[0].type}
                    type={'artistPlaylist'}
                /> :
                null
        )
    }

    render() {
        const {
            loading,
            errorTtile,
            errorMessage,
        } = this.props;
        { errorMessage.length > 2 ? errorMessageFunction(errorTtile, errorMessage) : null }
        if (loading) return <ActivityIndicator style={styles.loading} color={colors.green} size={values.IndicatorSize} />
        return (
            <View style={styles.mainContainer}>
                <SafeAreaView>
                    <FlatList
                        data={this.state.artistsTracks}
                        renderItem={({ item }) => this.renderRow(item)}
                        keyExtractor={(item, index) => String(index)}
                    />

                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = ({ music }) => {
    const {
        artistsPlaylist,
        errorTtile,
        errorMessage,
        loading,
    } = music
    return {
        artistsPlaylist,
        errorTtile,
        errorMessage,
        loading
    }
}

export default connect(mapStateToProps, {
    fetchArtistPlaylists
})(PlaylistArtistsScreen)