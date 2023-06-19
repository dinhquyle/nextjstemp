export type TProduct = {
  title: string;
  content: string;
  uri: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  }
  mainImg: {
    mainImage: {
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

export type CasePaging = {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
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
  mainImg: {
    mainImage: {
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

