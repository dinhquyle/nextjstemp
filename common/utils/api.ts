import { GQL_URI } from "../constants";

type TFetchAPIProps = {
  endpoint?: string;
  query: string;
  operationName?: string;
  variables?: Record<string, unknown>;
  customConfig?: Record<string, unknown>;
  controller?: AbortController;
};
type TGraphQLResponse = {
  data?: any;
  errors?: {
    message: string;
    code: string;
  }[];
};

export const fetchAPI = ({
  endpoint = GQL_URI,
  query,
  operationName,
  variables,
  customConfig = {},
  controller,
}: TFetchAPIProps): Promise<TGraphQLResponse> => {
  const config = {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({
      query: query,
      operationName: operationName ? operationName : ``,
      variables: variables ? variables : {},
    }),
    signal: controller ? controller.signal : null,
    ...customConfig,
  };
  if (!endpoint) {
    return Promise.reject({
      errors: [{ message: `Endpoint is required` }],
    });
  }
  return fetch(endpoint, config).then(async (response) => {
    if (response.ok) {
      const responseData = (await response.json()) as TGraphQLResponse;
      return Promise.resolve(responseData);
    } else {
      const errorMessage = await response.text();
      return Promise.reject({ errors: [{ message: errorMessage }] });
    }
  });
};
