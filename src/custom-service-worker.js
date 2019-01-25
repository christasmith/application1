self.addEventListener('notificationclose', function (e) {
    let notification = e.notification;
    let data = notification.data || {};
    let primaryKey = data.primaryKey;
    console.debug('Closed notification: ' + primaryKey);
});
self.addEventListener('notificationclick', function(e) {
    let notification = e.notification;
    let data = notification.data || {};
    let primaryKey = data.primaryKey;
    let action = e.action;
    console.debug('Clicked notification: ' + primaryKey);

    if (action === 'close') {
        console.debug('Notification clicked and closed', primaryKey);
        notification.close();
    }
else {
        console.debug('Notification actioned', primaryKey);
        clients.openWindow('/');
        notification.close();
    }
});