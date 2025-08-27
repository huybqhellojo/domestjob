
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

export const esClient = getClient();
