export class Api {
    constructor(serverUri, defaultOptions) {
        this.baseUri = serverUri
        this.options = defaultOptions
    }

    request(method, url, options) {
        const fullOptions = Object.assign({
            credentials: 'same-origin',
            method,
        }, this.options, options)

        return fetch(`${this.baseUri}${url}`, fullOptions)
            .then((response) => response.json())
    }

    /**
     * @param {string} url
     * @param {object} [options]
     * @return {Promise<T>}
     */
    get(url, options) {
        return this.request('GET', url, options)
    }

    /**
     * @param {string} url
     * @return {Promise<T>}
     */
    post(url, body, options) {
        const fullOptions = Object.assign({}, { body }, options)

        return this.request('POST', url, fullOptions)
    }

    /**
     * @param {string} url
     * @return {Promise<T>}
     */
    put(url, body, options) {
        const fullOptions = Object.assign({}, { body }, options)

        return this.request('PUT', url, fullOptions)
    }

    /**
     * @param {string} url
     * @return {Promise<T>}
     */
    patch(url, body, options) {
        const fullOptions = Object.assign({}, { body }, options)

        return this.request('PATCH', url, fullOptions)
    }

    /**
     * @param {string} url
     * @return {Promise<T>}
     */
    delete(url, body, options) {
        const fullOptions = Object.assign({}, { body }, options)

        return this.request('DELETE', url, fullOptions)
    }
}