const API_ADDRESS = 'https://dummyjson.com/';

export async function fetcher<Type>(
  path: string,
  options?: RequestInit
): Promise<Type> {
  const { method = 'GET', headers = {}, body = null } = options || {};

  const requestParams: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    requestParams.body = JSON.stringify(body);
  }

  const url = `${API_ADDRESS}${path}`;

  try {
    const response: Response = await fetch(url, requestParams);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Type = await response.json();
    return data;
  } catch (err) {
    console.error('>>> API Error ', err);
    throw err;
  }
}