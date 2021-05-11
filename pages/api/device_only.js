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

async function handler(req, res) {
    var device = req.query.device;
    var timestamp = admin.firestore.Timestamp.now();
    var hour_now = timestamp.toDate().getHours();
    var minute_now = timestamp.toDate().getMinutes();
    await db.collection('device').doc(device).update({
        'last_online': timestamp
    });

   
    await db.collection("device").doc(device).collection("jadwal").get()
        .then(function (querySnapshot) {
            var kasih_pakan = false;
            var jumlah_pakan_gr = 0;

            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, " => ", doc.data());
                var jadwal_hour = doc.data().waktu.toDate().getHours();
                var jadwal_minute = doc.data().waktu.toDate().getMinutes();
                if (jadwal_hour == hour_now && jadwal_minute == minute_now) {
                    kasih_pakan = true;
                    jumlah_pakan_gr = doc.data().jumlah_pakan_gr;
                }
            });
            
            res.statusCode = 200;
            res.json({
                device: device,
                timestamp: timestamp.toMillis(),
                kasih_pakan: kasih_pakan,
                jumlah_pakan_gr: jumlah_pakan_gr
            });
        });

}

export default handler