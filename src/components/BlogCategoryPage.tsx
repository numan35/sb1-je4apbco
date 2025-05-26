import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { getBlogPostsByCategory, BlogPost } from '../services/blogService';

const BlogCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      if (!category) return;
      
      try {
        setLoading(true);
        const fetchedPosts = await getBlogPostsByCategory(category);
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching category posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        
        // Sample data for development/preview
        setPosts([
          {
            id: '1',
            title: 'Common Issues with SubZero Refrigerators and How to Fix Them',
            excerpt: 'SubZero refrigerators are known for their reliability, but even the best appliances can experience issues. Learn about the most common problems and how our technicians address them.',
            content: 'SubZero refrigerators are premium appliances that typically offer exceptional reliability and performance. However, like any complex appliance, they can develop issues over time.',
            image_url: '/subzero1.jpg',
            published_at: new Date().toISOString(),
            author: 'John Smith',
            author_title: 'Master Technician',
            slug: 'common-issues-subzero-refrigerators',
            category: category.charAt(0).toUpperCase() + category.slice(1),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            title: 'Maintaining Your Wolf Range for Optimal Performance',
            excerpt: 'Regular maintenance is key to keeping your Wolf range performing at its best. Discover professional tips for maintaining your luxury cooking appliance.',
            content: 'Regular maintenance is essential for keeping your Wolf range in top condition. In this guide, we share professional tips and best practices.',
            image_url: '/wolf1.jpg',
            published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            author: 'Sarah Johnson',
            author_title: 'Senior Technician',
            slug: 'maintaining-wolf-range-optimal-performance',
            category: category.charAt(0).toUpperCase() + category.slice(1),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryPosts();
  }, [category]);

  const formattedCategory = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : 'Category';

  return (
    <>
      <Helmet>
        <title>{formattedCategory} Articles | Premium Appliance Repair Blog</title>
        <meta name="description" content={`Expert tips and guides about ${formattedCategory} appliance repair, maintenance, and care. Learn from our experienced technicians.`} />
        <link rel="canonical" href={`https://premiumappliance.co/blog/category/${category}`} />
      </Helmet>

      <div className="pt-24 pb-16 bg-gray-50">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="bg-navy-900 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="mb-4">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to All Articles
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {formattedCategory} Articles
                </h1>
                <p className="text-xl text-gray-300">
                  Expert insights, maintenance tips, and troubleshooting guides for {formattedCategory.toLowerCase()} appliances
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {loading && (
            <div className="py-12 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          )}

          {error && !loading && posts.length === 0 && (
            <div className="py-12 text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            </div>
          )}

          {!loading && posts.length === 0 && !error && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">No Articles Found</h2>
              <p className="text-gray-600 mb-6">We couldn't find any articles in this category. Please check back later or explore other categories.</p>
              <Link 
                to="/blog"
                className="bg-navy-800 text-white px-4 py-2 rounded hover:bg-navy-900 transition-colors"
              >
                Return to Blog
              </Link>
            </div>
          )}

          {posts.length > 0 && (
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image_url} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium mr-3">
                            {post.category}
                          </span>
                          <Calendar size={14} className="mr-2" />
                          <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=128" 
                              alt={post.author}
                              className="w-8 h-8 rounded-full object-cover mr-2"
                            />
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          <div className="flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors">
                            Read More
                            <ArrowRight size={16} className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          <div className="text-center mb-16">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to All Articles
            </Link>
          </div>

          {/* Call to Action */}
          <div className="bg-navy-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Expert Appliance Repair?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our certified technicians are ready to help with any luxury appliance repair needs.
              We offer same-day service and back all repairs with our satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book" 
                className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
              >
                Schedule Service
                <ArrowRight size={18} className="ml-2 inline-block" />
              </Link>
              <a 
                href="tel:+14704521545" 
                className="bg-transparent border-2 border-gold-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10"
              >
                Call (470) 452-1545
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategoryPage;