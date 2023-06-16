export type TProduct = {
  caseId: number;
  title: string;
  content: string;
  uri: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
  categoriesCase: {
    nodes: [{
      name: string;
      uri: string;
      id: string;
    }]
  }  
};

export type Casepaging = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  offsetPagination: {
    hasMore: boolean;
    hasPrevious: boolean;
    total: number;
  }
};

export type CaseCat = {
  categoriesCase: {
    nodes: [{
      name: string;
      uri: string;
      id: string;
    }]
  }
};

export type CasebyCat = {
  title: string;
  content: string;
  uri: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
  categoriesCase: {
    nodes: [{
      name: string;
      uri: string;
      id: string;
    }]
  } 
};

