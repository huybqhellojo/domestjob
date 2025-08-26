
import { Client } from '@elastic/elasticsearch';
import { RequestParams } from '@elastic/elasticsearch';

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
export async function search<T>(params: RequestParams.Search<T>) {
  const esClient = getClient();
  const response = await esClient.search(params);
  return response.body;
}

/**
 * Creates or overwrites a document in an Elasticsearch index.
 * @param params - The parameters, including index, id, and the document body.
 * @returns The result of the indexing operation.
 */
export async function createDocument<T>(params: RequestParams.Index<T>) {
  const esClient = getClient();
  const response = await esClient.index(params);
  return response.body;
}

/**
 * Retrieves a document from an Elasticsearch index by its ID.
 * @param params - The parameters, including index and id.
 * @returns The document source.
 */
export async function getDocument<T>(params: RequestParams.Get) {
  const esClient = getClient();
  const response = await esClient.get<T>(params);
  return response.body._source;
}

/**
 * Updates a document in an Elasticsearch index.
 * @param params - The parameters, including index, id, and the update body (doc).
 * @returns The result of the update operation.
 */
export async function updateDocument<T>(params: RequestParams.Update<T>) {
  const esClient = getClient();
  const response = await esClient.update(params);
  return response.body;
}

/**
 * Deletes a document from an Elasticsearch index by its ID.
 * @param params - The parameters, including index and id.
 * @returns The result of the delete operation.
 */
export async function deleteDocument(params: RequestParams.Delete) {
  const esClient = getClient();
  const response = await esClient.delete(params);
  return response.body;
}

export const esClient = getClient();
