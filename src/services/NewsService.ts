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

const articles: Article[] = [{
    author: null,
    content: "R. Kelly fans doled out $100 to see the singer perform at a club in Springfield, Ill., only to be treated to approximately 28 seconds worth of music, just hours after the I Believe I Can Fly singer asked media to take it easy on him. The embattled R&amp;B sin… [+1254 chars]",
    description: "Kelly allegedly spent 35 minutes thanking fans for their support, taking selfies, dancing, and smoking cigars.",
    publishedAt: "2019-04-07T20:13:00Z",
    source: {
        id: null,
        name: "Yahoo.com"
    },
    title: "R. Kelly charged fans $100 and performed for 28 seconds after asking media to go easy on him - Yahoo Entertainment",
    url: "https://www.yahoo.com/entertainment/r-kelly-charged-fans-100-performed-28-seconds-asking-media-go-easy-201345343.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/XAxtKf7YCCYQFKOXpRS1EQ--~B/aD0zMDE4O3c9NDQ0NjtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/22db0550277d5e58b082b776f86ac482"
},
{
    author: null,
    content: "R. Kelly fans doled out $100 to see the singer perform at a club in Springfield, Ill., only to be treated to approximately 28 seconds worth of music, just hours after the I Believe I Can Fly singer asked media to take it easy on him. The embattled R&amp;B sin… [+1254 chars]",
    description: "Kelly allegedly spent 35 minutes thanking fans for their support, taking selfies, dancing, and smoking cigars.",
    publishedAt: "2019-04-07T20:13:00Z",
    source: {
        id: null,
        name: "Yahoo.com"
    },
    title: "R. Kelly charged fans $100 and performed for 28 seconds after asking media to go easy on him - Yahoo Entertainment",
    url: "https://www.yahoo.com/entertainment/r-kelly-charged-fans-100-performed-28-seconds-asking-media-go-easy-201345343.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/XAxtKf7YCCYQFKOXpRS1EQ--~B/aD0zMDE4O3c9NDQ0NjtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/22db0550277d5e58b082b776f86ac482"
},
{
    author: null,
    content: "R. Kelly fans doled out $100 to see the singer perform at a club in Springfield, Ill., only to be treated to approximately 28 seconds worth of music, just hours after the I Believe I Can Fly singer asked media to take it easy on him. The embattled R&amp;B sin… [+1254 chars]",
    description: "Kelly allegedly spent 35 minutes thanking fans for their support, taking selfies, dancing, and smoking cigars.",
    publishedAt: "2019-04-07T20:13:00Z",
    source: {
        id: null,
        name: "Yahoo.com"
    },
    title: "R. Kelly charged fans $100 and performed for 28 seconds after asking media to go easy on him - Yahoo Entertainment",
    url: "https://www.yahoo.com/entertainment/r-kelly-charged-fans-100-performed-28-seconds-asking-media-go-easy-201345343.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/XAxtKf7YCCYQFKOXpRS1EQ--~B/aD0zMDE4O3c9NDQ0NjtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/22db0550277d5e58b082b776f86ac482"
},
{
    author: null,
    content: "R. Kelly fans doled out $100 to see the singer perform at a club in Springfield, Ill., only to be treated to approximately 28 seconds worth of music, just hours after the I Believe I Can Fly singer asked media to take it easy on him. The embattled R&amp;B sin… [+1254 chars]",
    description: "Kelly allegedly spent 35 minutes thanking fans for their support, taking selfies, dancing, and smoking cigars.",
    publishedAt: "2019-04-07T20:13:00Z",
    source: {
        id: null,
        name: "Yahoo.com"
    },
    title: "R. Kelly charged fans $100 and performed for 28 seconds after asking media to go easy on him - Yahoo Entertainment",
    url: "https://www.yahoo.com/entertainment/r-kelly-charged-fans-100-performed-28-seconds-asking-media-go-easy-201345343.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/XAxtKf7YCCYQFKOXpRS1EQ--~B/aD0zMDE4O3c9NDQ0NjtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/22db0550277d5e58b082b776f86ac482"
}]


export class NewsService extends Service {
    // promise returns a list of events and the pageCount
    public static getTopHeadlines(country: string, category: string, page: number): Promise<Article[]> {
        // return new Promise((resolve, reject) => {
        //     resolve(articles);
        // });
        return axios.get(`${super.getApiUrl()}/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${5}`,
            { headers: { ...super.getAuthHeader() }})
        .then(res => {
            console.log(res.data.articles);
            return res.data.articles;
        });
    }
}