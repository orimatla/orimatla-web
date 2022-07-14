importScripts("https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.6/firebase-messaging.js");

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log("onBackgroundMessage", payload);
    // const promiseChain = clients
    //     .matchAll({
    //         type: "window",
    //         includeUncontrolled: true
    //     })
    //     .then(windowClients => {
    //         for (let i = 0; i < windowClients.length; i++) {
    //             const windowClient = windowClients[i];
    //             windowClient.postMessage(payload);
    //         }
    //     })
    //     .then(() => {
    //         return registration.showNotification("New Message");
    //     });
    // return promiseChain;
});