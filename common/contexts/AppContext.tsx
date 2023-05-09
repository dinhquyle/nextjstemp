export type TProduct = {
  caseId: number;
  title: string;
  content: string;
  url: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
};