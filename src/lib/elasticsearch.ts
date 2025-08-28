
import { Client } from '@elastic/elasticsearch';

let client: Client;

function getClient(): Client {
  if (client) {
    return client;
  }

  const node = process.env.ELASTICSEARCH_URL;
  if (!node) {
    throw new Error('ELASTICSEARCH_URL environment variable is not set.');
  }
  
  const username = process.env.ELASTICSEARCH_USERNAME;
  const password = process.env.ELASTICSEARCH_PASSWORD;

  if (!username || !password) {
      console.warn('Elasticsearch username or password not set. Connecting without authentication.');
      client = new Client({ node });
  } else {
      client = new Client({
        node,
        auth: {
          username,
          password,
        },
      });
  }

  return client;
}

/**
 * Searches for documents in an Elasticsearch index.
 * @param params - The search parameters, including index and body (query).
 * @returns The search results.
 */
export async function search<T>(params: any) {
  const esClient = getClient();
  const response = await esClient.search(params);
  return response.body;
}

/**
 * Retrieves a document from an Elasticsearch index by its ID.
 * @param params - The parameters, including index and id.
 * @returns The document source.
 */
export async function getDocument(params: any) {
  const esClient = getClient();
  const response = await esClient.get(params);
  return response.body._source;
}

export const findJobByCode = async (code: string): Promise<any | null> => {
  try {
    const esClient = getClient();
    const res = await esClient.search({
      index: `${process.env.ELASTICSEARCH_PREFIX}-job-crawled`,
      body: {
        query: {
          bool: {
            must: [
              {
                term: { "id.keyword": code },
              },
            ],
          },
        },
        size: 1, // chỉ cần 1 document
      },
    });

    const hit = res.body.hits.hits[0];
    return hit?._source || null;
  } catch (error) {
    console.error(`Error fetching job with code ${code}:`, error);
    return null;
  }
};

export const esClient = getClient();
