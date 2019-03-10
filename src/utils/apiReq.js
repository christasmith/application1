import {request} from "./apiCalls";


export function getRecents() {
    return request({
        url: 'http://localhost:8080/recentAlerts',
        method: 'GET'
    });
}

export function deleteAlerts() {
    return request({
        url: 'http://localhost:8080/deleteAlerts',
        method: 'GET'
    });
}

export function confirmAlerts(id) {
    return request({
        url: 'http://localhost:8080/confirmAlerts?id='+id,
        method: 'PUT'
    });
}

export function getPatients() {
    return request({
        url: 'http://localhost:8080/patients',
        method: 'GET'
    });
}

export function getHistory() {
        return request({
            url: 'http://localhost:8080/history',
            method: 'GET'
     });
}
