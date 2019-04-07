import { Service } from './Service';
import axios from 'axios';

export interface Article {
    source: { id: number | null, name: string },
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export class NewsService extends Service {
    public static getTopHeadlines(country: string, category: string, page: number): Promise<Article[]> {
        return axios.get(`${super.getApiUrl()}/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${5}`,
            { headers: { ...super.getAuthHeader() }})
        .then(res => {
            return res.data.articles;
        });
    }
}