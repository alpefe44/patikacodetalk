import database from '@react-native-firebase/database';


export function PushRoom(classes: string) {
    const reference = database().ref(`/classes/rooms/${classes}`).push()
    reference.set(
        classes
    ).then(() => {
        console.log('Data set.')
    });
};




export function PushMessages(room: any, message: any) {
    const reference = database().ref(`/classes/rooms/${room}/messages`).push()
    reference.set(
        message
    ).then(() => console.log("Data set"))
}
