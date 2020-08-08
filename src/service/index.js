export default class InfoService {
    _apiBase = 'http://localhost:3000';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, status: ${res.status}`)
        }

        return await res.json();
    }

    async getItems() {
       return await this.getResource('/items');
    }
}