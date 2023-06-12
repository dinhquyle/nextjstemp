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
  categoriesCase: {
    nodes: {
      name: string;
      slug: string;
    }
  }
};