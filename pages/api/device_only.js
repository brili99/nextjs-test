import Cors from 'cors'
const admin = require('firebase-admin');
const serviceAccount = require('../../nextjs-test-bf155-firebase-adminsdk-ndxyk-c62351b010.json');
var url = require('url');


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

// export default (req, res) => {
//     var device = req.query.device;
//     var timestamp = admin.firestore.Timestamp.now();
//     var hour_now = timestamp.toDate().getHours();
//     var minute_now = timestamp.toDate().getMinutes();
//     db.collection('device').doc(device).update({
//         'last_online': timestamp
//     });

//     db.collection('device').doc(device).get().then(queryResult => {
//         const arr_jadwal = queryResult.data().jadwal;
//         const arr_time = [];
//         arr_jadwal.forEach(jadwal => {
//             var time = "";
//             time += jadwal.toDate().getHours() + ":";
//             time += jadwal.toDate().getMinutes() + ":";
//             time += jadwal.toDate().getSeconds();
//             arr_time.push(time);
//         });

//         res.statusCode = 200;
//         res.json({
//             device: device,
//             timestamp: timestamp.toMillis(),
//             jadwal: arr_jadwal
//         });
//     });
// }

async function handler(req, res) {
    var device = req.query.device;
    var timestamp = admin.firestore.Timestamp.now();
    var hour_now = timestamp.toDate().getHours();
    var minute_now = timestamp.toDate().getMinutes();
    await db.collection('device').doc(device).update({
        'last_online': timestamp
    });

    await db.collection('device').doc(device).get().then(queryResult => {
        const arr_jadwal = queryResult.data().jadwal;
        const arr_time = [];
        arr_jadwal.forEach(jadwal => {
            var time = "";
            time += jadwal.toDate().getHours() + ":";
            time += jadwal.toDate().getMinutes() + ":";
            time += jadwal.toDate().getSeconds();
            arr_time.push(time);
        });

        res.statusCode = 200;
        res.json({
            device: device,
            timestamp: timestamp.toMillis(),
            jadwal: arr_jadwal
        });
    });
}

export default handler