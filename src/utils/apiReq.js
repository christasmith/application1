import {request} from "./apiCalls";


export function getRecents() {
    return request({
        url: 'http://localhost:8080/recentActivity',
        method: 'GET'
    });
}
