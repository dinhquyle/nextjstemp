export type TProduct = {
  caseId: number;
  title: string;
  content: string;
  uri: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
};