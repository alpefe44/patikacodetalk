export default function (data: any) {
    return Object.keys(data).map(key => {
        return {
            id: key,
        }
    })
}



export function RoomParse(data: any) {
    return Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key]
        }
    })
}