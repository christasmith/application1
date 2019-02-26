import {request} from "./apiCalls";


export function getRecents() {
    return request({
        url: 'http://localhost:8080/recentAlerts',
        method: 'GET'
    });
}

export function deleteAlert(id) {
    return request({
        url: 'http://localhost:8080/deleteAlert?id='+ id,
        method: 'DELETE'
    });
}
