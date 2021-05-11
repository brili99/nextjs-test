const admin = require('firebase-admin');
const serviceAccount = require('../../nextjs-test-bf155-firebase-adminsdk-ndxyk-c62351b010.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();
var timestamp = admin.firestore.Timestamp.now();

async function handler(req, res) {
    await db.collection("device").get()
        .then(function (querySnapshot) {
            var data = [];
            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, " => ", doc.data());
                data.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            res.statusCode = 200;
            res.json({
                timestamp: timestamp.toMillis(),
                list_device: data
            });
        });
}

export default handler