import axios from "axios";

export const API = ({ endpoint, method = "get", data = {}, api_url, ok = null, err = null, message = { show: false, api: null, ok: "ОК", err: "Err" }, }) => {
    // Meta class for short api calls
    let request_params = {
        'headers': {},
    };
    axios({
        method: method,
        url: `${api_url}${endpoint}`,
        data: data,
        headers: request_params.headers
    }).then((response) => {
        if (message.show) message.api.open({
            type: "success",
            content: message.ok,
        });
        if (ok) ok(response);
    }).catch((response) => {
        if (err) err(response.response);
    });

}