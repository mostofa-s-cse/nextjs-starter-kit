'use client';

import { PostList } from '@/components/Post';
import { apiHelpers, Post } from '@/services/api';
import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import React from 'react';

export default function PostsPage() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchPosts = React.useCallback(
    async (pageNum: number, reset = false) => {
      setLoading(true);
      setError(null);

      try {
        const result = await apiHelpers.getPosts({
          page: pageNum,
          limit: 10,
        });

        if (result.success && result.data) {
          if (reset) {
            setPosts(result.data);
          } else {
            setPosts(prev => [...prev, ...result.data!]);
          }
          setHasMore(result.data.length === 10);
        } else {
          setError(result.error || 'Failed to fetch posts');
        }
      } catch {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  React.useEffect(() => {
    fetchPosts(1, true);
  }, [fetchPosts]);

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage);
    }
  };

  const refresh = () => {
    setPage(1);
    fetchPosts(1, true);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Posts Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse through a collection of posts with API integration, loading
          states, and error handling. Demonstrates real-world data fetching
          patterns.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={refresh}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          <span>Refresh Posts</span>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2 text-red-700 max-w-2xl mx-auto">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <PostList posts={posts} loading={loading && posts.length === 0} />

        {posts.length > 0 && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              disabled={loading}
              className="flex items-center space-x-2 mx-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Load More Posts</span>
              )}
            </button>
          </div>
        )}

        {posts.length > 0 && !hasMore && (
          <div className="text-center mt-8 text-gray-500">
            No more posts to load
          </div>
        )}
      </div>

      {/* API Integration Info */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          API Integration Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Request Handling</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Axios with custom interceptors</li>
              <li>• Automatic error handling</li>
              <li>• Request/response transformation</li>
              <li>• Loading state management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Data Management</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Pagination with load more</li>
              <li>• Client-side caching</li>
              <li>• Optimistic updates</li>
              <li>• Error recovery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
