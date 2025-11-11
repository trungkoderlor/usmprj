export const CacheKeys = {
  createKey: (url: string, query: Record<string, any> = {}) => {
    return `cache:${url}:${JSON.stringify(query)}`;
  },
  
  
  userList: (query: Record<string, any> = {}) => {
    return `cache:/users:${JSON.stringify(query)}`;
  },
  
  userById: (id: number) => {
    return `cache:/users/${id}`;
  },
  
  authMe: () => {
    return `cache:/auth/me`;
  }
};
