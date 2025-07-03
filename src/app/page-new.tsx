'use client';

import Counter from '@/components/Counter';
import DataTable from '@/components/DataTable';
import { PostList } from '@/components/Post';
import { apiHelpers, Post } from '@/services/api';
import {
  BarChart3,
  Calculator,
  Code,
  Database,
  FileText,
  Palette,
  Settings,
  Sparkles,
} from 'lucide-react';
import React from 'react';

export default function Home() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await apiHelpers.getPosts({ limit: 5 });
      if (result.success && result.data) {
        setPosts(result.data);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Next.js</span> Starter Kit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A modern, production-ready Next.js 15 application with TypeScript,
              Redux Toolkit, Tailwind CSS, and advanced features like
              server-side pagination, search, and sorting.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Code size={16} className="mr-1" />
                Next.js 15
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Settings size={16} className="mr-1" />
                TypeScript
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <Database size={16} className="mr-1" />
                Redux Toolkit
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                <Palette size={16} className="mr-1" />
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <Sparkles className="inline mr-2" size={32} />
            Features & Components
          </h2>
          <p className="text-lg text-gray-600">
            Explore the powerful features and components included in this
            starter kit.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                <button
                  className="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600"
                  aria-current="page"
                >
                  <BarChart3 size={20} className="inline mr-2" />
                  Data Table
                </button>
                <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <Calculator size={20} className="inline mr-2" />
                  Counter
                </button>
                <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <FileText size={20} className="inline mr-2" />
                  Posts
                </button>
              </nav>
            </div>

            <div className="p-6">
              <div id="data-table" className="block">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Advanced Data Table
                  </h3>
                  <p className="text-gray-600">
                    Features server-side pagination, debounced search,
                    multi-column sorting, and responsive design.
                  </p>
                </div>
                <DataTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Counter Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                <Calculator className="inline mr-2" size={24} />
                Redux Counter
              </h3>
              <p className="text-gray-600">
                Demonstrates Redux Toolkit state management with TypeScript
                support.
              </p>
            </div>
            <Counter />
          </div>

          {/* Posts Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                <FileText className="inline mr-2" size={24} />
                Recent Posts
              </h3>
              <p className="text-gray-600">
                API integration with loading states and error handling.
              </p>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <PostList posts={posts} loading={loading} />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Industry-leading tools and frameworks for optimal development
              experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Code size={32} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Next.js 15</h3>
              <p className="text-sm text-gray-600">
                App Router & Server Components
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Settings size={32} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">TypeScript</h3>
              <p className="text-sm text-gray-600">Type-safe development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Database size={32} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Redux Toolkit</h3>
              <p className="text-sm text-gray-600">State management</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Palette size={32} className="text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Utility-first styling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
