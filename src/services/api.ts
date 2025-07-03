import axios from 'axios';

// Base URL from environment variables
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://jsonplaceholder.typicode.com';

// Create axios instances
const createApiInstance = (requiresAuth = false) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    config => {
      if (requiresAuth && typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    error => Promise.reject(error)
  );

  // Response interceptor
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Public API instance (no authentication required)
export const publicApi = createApiInstance(false);

// Private API instance (authentication required)
export const privateApi = createApiInstance(true);

// API Response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
}

// Post interface
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User interface
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// API Helpers
export const apiHelpers = {
  // Posts API
  getPosts: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<ApiResponse<Post[]>> => {
    try {
      const { page = 1, limit = 10, search, sortBy, sortOrder } = params || {};

      // Fetch all posts from JSONPlaceholder
      const response = await publicApi.get('/posts');
      let filteredData = response.data as Post[];

      // Apply search filter
      if (search) {
        filteredData = filteredData.filter(
          (post: Post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply sorting
      if (sortBy) {
        filteredData.sort((a: Post, b: Post) => {
          const aValue = a[sortBy as keyof Post];
          const bValue = b[sortBy as keyof Post];

          if (sortOrder === 'desc') {
            return bValue > aValue ? 1 : -1;
          }
          return aValue > bValue ? 1 : -1;
        });
      }

      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      return {
        success: true,
        data: paginatedData,
        total: filteredData.length,
        page,
        limit,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch posts',
      };
    }
  },

  // Get single post
  getPost: async (id: number): Promise<ApiResponse<Post>> => {
    try {
      const response = await publicApi.get(`/posts/${id}`);
      return {
        success: true,
        data: response.data as Post,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch post',
      };
    }
  },

  // Create post
  createPost: async (data: {
    title: string;
    body: string;
    userId: number;
  }): Promise<ApiResponse<Post>> => {
    try {
      const response = await privateApi.post('/posts', data);
      return {
        success: true,
        data: response.data as Post,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create post',
      };
    }
  },

  // Update post
  updatePost: async (
    id: number,
    data: { title?: string; body?: string }
  ): Promise<ApiResponse<Post>> => {
    try {
      const response = await privateApi.put(`/posts/${id}`, data);
      return {
        success: true,
        data: response.data as Post,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update post',
      };
    }
  },

  // Delete post
  deletePost: async (id: number): Promise<ApiResponse<void>> => {
    try {
      await privateApi.delete(`/posts/${id}`);
      return {
        success: true,
        message: 'Post deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete post',
      };
    }
  },

  // Users API
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    try {
      const response = await publicApi.get('/users');
      return {
        success: true,
        data: response.data as User[],
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch users',
      };
    }
  },

  // Get single user
  getUser: async (id: number): Promise<ApiResponse<User>> => {
    try {
      const response = await publicApi.get(`/users/${id}`);
      return {
        success: true,
        data: response.data as User,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch user',
      };
    }
  },

  // Comments API
  getComments: async (postId?: number): Promise<ApiResponse<unknown[]>> => {
    try {
      const url = postId ? `/posts/${postId}/comments` : '/comments';
      const response = await publicApi.get(url);
      return {
        success: true,
        data: response.data as unknown[],
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to fetch comments',
      };
    }
  },

  // Authentication helpers (for demo purposes)
  login: async (credentials: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ token: string; user: User }>> => {
    // Simulate login API call
    return new Promise(resolve => {
      setTimeout(() => {
        if (
          credentials.email === 'admin@example.com' &&
          credentials.password === 'admin'
        ) {
          const token = 'mock-jwt-token-' + Date.now();
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', token);
          }
          resolve({
            success: true,
            data: {
              token,
              user: {
                id: 1,
                email: credentials.email,
                name: 'Admin User',
                username: 'admin',
              },
            },
          });
        } else {
          resolve({
            success: false,
            error: 'Invalid credentials',
          });
        }
      }, 1000);
    });
  },

  logout: async (): Promise<ApiResponse<void>> => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    return {
      success: true,
      message: 'Logged out successfully',
    };
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('token');
  },
};

export default apiHelpers;
