export abstract class Service {
    protected static getApiUrl(): string {
        return "https://newsapi.org/";
    }

    protected getApiUrl(): string {
        return Service.getApiUrl();
    }

    protected static getAPIKey(): string | undefined {
        return "76edb44119f44a4db2691e5c490eb8eb";
    }

    protected static getAuthHeader(): object {
        return {
            'Authorization': `Bearer ${this.getAPIKey()}`
        };
    }
}