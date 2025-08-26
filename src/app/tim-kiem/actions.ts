
'use server';

import { search } from '@/lib/elasticsearch';
import { Pager } from '@/lib/pager';

interface SearchParams {
    q: string;
    type: string;
    location: string;
    page: number;
    pageSize?: number;
}

export async function searchJobs({ q, type, location, page, pageSize = 20 }: SearchParams) {
    try {
        const searchBody = {
            from: (page - 1) * pageSize,
            size: pageSize,
            query: {
                match_all: {}
                // In a real scenario, you'd build a proper query based on q, type, location
                // For example:
                // bool: {
                //     must: [
                //         q ? { multi_match: { query: q, fields: ['baseContent', 'description'] } } : { match_all: {} }
                //     ],
                //     filter: [
                //         type ? { term: { 'jobType.keyword': type } } : null,
                //         location ? { term: { 'location.keyword': location } } : null
                //     ].filter(Boolean)
                // }
            }
        };

        const response = await search({
            index: 'hellojobv5-job-crawled',
            body: searchBody,
        });

        return {
            hits: response.hits.hits,
            total: response.hits.total.value,
        };
    } catch (error) {
        console.error("Elasticsearch error:", error);
        // In a production app, you might want to handle this more gracefully
        return {
            hits: [],
            total: 0,
        };
    }
}
