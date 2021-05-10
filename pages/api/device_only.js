const admin = require('firebase-admin');
const serviceAccount = require('../../nextjs-test-bf155-firebase-adminsdk-ndxyk-c62351b010.json');
var url = require('url');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

export default (req, res) => {
    var device = req.query.device;
    db.collection('device').doc(device).set({
        'last_online': admin.firestore.Timestamp.now()
    });

    res.statusCode = 200
    res.json({ device: device })
}
