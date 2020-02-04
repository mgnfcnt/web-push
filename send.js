var push = require('web-push');

let keys = { publicKey:
    'BGryAqQbOJM0Hh3mRJDyrOh5aN2Pe__p15iip1qpOi_xgaOutc5qNldC0Y1DS5ol5Q2lP0JPjJih9P38EA-e7Ps',
   privateKey: 'y03FZhM5LRsdHVPBkBbhECiL6drFLMLDrREErOel-rU' };

push.setVapidDetails('mainto:mehmet@ge.com', keys.publicKey, keys.privateKey);

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeOcS-2Q3dU2yiLP877PdSGtw85CNIlAOFEGOJCf2uT6VmwPHEn2EEarAuSwcYRlzkzKGhakHQLiDVK1MoKdqDlH2y6D2a6kHgirE0PaZCbsCcltrWE8pcRWhHx4b98gcXIqjAE4SoKEe4RzL3-uE4-U3t9QHr98PxH3oIvyVEkrklNPM","keys":{"auth":"RABBR1hOuENB1Y5e1o2BXQ","p256dh":"BJtrjLQGTY3OSezydPXY0r9Iz018zsGjOT_73HCxlztJ2izC1emgF-ueaVWRTx_owFods5hvGp8dBaNpMZx82y8"}};
push.sendNotification(sub, 'test msg');