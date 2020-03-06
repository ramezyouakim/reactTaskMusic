import { Alert } from 'react-native';

export function errorMessageFunction(title, message) {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
    );
}