const admin = require('firebase-admin');
const serviceAccount = require('../../nextjs-test-bf155-firebase-adminsdk-ndxyk-c62351b010.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();


export default (req, res) => {
    db.collection('users').doc('aturing').set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    });

    res.statusCode = 200;
    res.json({ name: 'John Doe' });
}
