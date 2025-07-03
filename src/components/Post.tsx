'use client';

import { Post } from '@/services/api';
import { Calendar, Heart, MessageCircle, Share2, User } from 'lucide-react';
import React from 'react';

interface PostCardProps {
  post: Post;
  showActions?: boolean;
}

export default function PostCard({ post, showActions = true }: PostCardProps) {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 100) + 1);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.body,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                User {post.userId}
              </p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar size={12} />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500">ID: {post.id}</div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {post.body}
        </p>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                  liked
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Heart size={16} className={liked ? 'fill-current' : ''} />
                <span>{likes}</span>
              </button>

              <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <MessageCircle size={16} />
                <span>{Math.floor(Math.random() * 20) + 1}</span>
              </button>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Component for displaying multiple posts
export function PostList({
  posts,
  loading,
}: {
  posts: Post[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                  <div className="h-3 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="h-6 bg-gray-300 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No posts available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
