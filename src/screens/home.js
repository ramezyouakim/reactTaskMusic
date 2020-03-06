
/** Home Screen Class Component */
import React from 'react';
import {
    View,
    ActivityIndicator,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import store from '../store';
import {
    fetchFeaturedPlaylists,
    fetchFeaturedPlaylistsMore
} from '../actions/fetchAction';
import { errorMessageFunction } from '../modules/messages/errorMessage';
import Card from '../components/card';
import styles from '../modules/styles';
import values from '../modules/values';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
        }
    }

    async componentDidMount() {
        const {
            fetchFeaturedPlaylists
        } = this.props;
        fetchFeaturedPlaylists();
        this.unsubscribe = store.subscribe(() => {
            let featuredPlaylists = store.getState().music.featuredPlaylists;
            this.setState({
                playlists: featuredPlaylists
            })
        })
    }

    renderRow(item) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PlaylistArtistsScreen', { playlistId: item.id })}>
                <Card
                    image={item.images[0].url}
                    name={item.name}
                    owner={`by ${item.owner.display_name}`}
                    type={'featuredPlaylist'}
                />
            </TouchableOpacity>
        )
    }

    render() {
        const {
            loading,
            errorTtile,
            errorMessage,
            refreshing,
            fetchFeaturedPlaylists,
            fetchFeaturedPlaylistsMore,
            refreshingBottom
        } = this.props;
        { errorMessage.length > 2 ? errorMessageFunction(errorTtile, errorMessage) : null }
        if (loading) return <ActivityIndicator style={styles.loading} color={colors.green} size={values.IndicatorSize} />
        return (
            <View style={styles.mainContainer}>
                <SafeAreaView>
                    <FlatList
                        data={this.state.playlists}
                        renderItem={({ item }) => this.renderRow(item)}
                        refreshing={refreshing}
                        onEndReachedThreshold={0}
                        onEndReached={() => fetchFeaturedPlaylistsMore()}
                        onRefresh={() => fetchFeaturedPlaylists()}
                        keyExtractor={(item, index) => String(index)}
                        ListFooterComponent={() => refreshingBottom ? <ActivityIndicator style={styles.loadingBottom} color={colors.green} size={values.IndicatorSize} /> : null}
                    />

                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = ({ music }) => {
    const {
        featuredPlaylists,
        errorTtile,
        errorMessage,
        loading,
        refreshing,
        refreshingBottom
    } = music
    return {
        featuredPlaylists,
        errorTtile,
        errorMessage,
        loading,
        refreshing,
        refreshingBottom
    }
}

export default connect(mapStateToProps, {
    fetchFeaturedPlaylists,
    fetchFeaturedPlaylistsMore
})(HomeScreen)