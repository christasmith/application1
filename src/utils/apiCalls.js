//Generic request skeleton
export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
    })
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                return json;
            })
        );
};

export const postRequest = (options) => {
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options,);
};
