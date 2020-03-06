
/** Card Component */

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../modules/styles';

export default Card = (props) => {
    return (
        <View style={[styles.row, styles.cardContainer, styles.shadowBox]}>
            <Image
                style={[styles.cardImage, { display: props.type == 'artistPlaylist' ? 'none' : 'flex' }]}
                source={{ uri: props.image }}
            />
            <View style={[styles.column, styles.cardInfoContainer]}>
                <Text style={styles.cardInfoTextHeader}>{props.name}</Text>
                <Text style={styles.cardInfoTextSubHeader}>{props.owner}</Text>
            </View>
            <View style={styles.cardImageContainer}>
                <Image
                    style={[styles.iconImage,{ display: props.type == 'artistPlaylist' ? 'none' : 'flex' }]}
                    source={{ uri: 'https://image.flaticon.com/icons/png/512/16/16049.png' }}
                />
            </View>
        </View>
    );
}
