import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Common Issues with SubZero Refrigerators and How to Fix Them',
    excerpt: 'SubZero refrigerators are known for their reliability, but even the best appliances can experience issues. Learn about the most common problems and how our technicians address them.',
    image: '/subzero1.jpg',
    date: 'May 15, 2025',
    author: 'John Smith',
    slug: 'common-issues-subzero-refrigerators'
  },
  {
    id: 2,
    title: 'Maintaining Your Wolf Range for Optimal Performance',
    excerpt: 'Regular maintenance is key to keeping your Wolf range performing at its best. Discover professional tips for maintaining your luxury cooking appliance.',
    image: '/wolf1.jpg',
    date: 'May 10, 2025',
    author: 'Sarah Johnson',
    slug: 'maintaining-wolf-range-optimal-performance'
  },
  {
    id: 3,
    title: 'Viking vs. Wolf: Comparing Luxury Cooking Appliances',
    excerpt: 'Trying to decide between Viking and Wolf for your kitchen? Our experts break down the differences, similarities, and unique features of each brand.',
    image: '/viking1.jpeg',
    date: 'May 5, 2025',
    author: 'Michael Brown',
    slug: 'viking-vs-wolf-comparing-luxury-appliances'
  },
  {
    id: 4,
    title: 'The Benefits of Professional Appliance Installation',
    excerpt: 'Proper installation is crucial for the performance and longevity of your luxury appliances. Learn why professional installation is worth the investment.',
    image: '/wolf3.jpg',
    date: 'April 28, 2025',
    author: 'Emily Davis',
    slug: 'benefits-professional-appliance-installation'
  },
  {
    id: 5,
    title: 'Energy Efficiency Tips for Luxury Appliances',
    excerpt: 'Luxury appliances don\'t have to mean high energy bills. Discover how to maximize the efficiency of your high-end kitchen appliances.',
    image: '/subzero2.jpg',
    date: 'April 20, 2025',
    author: 'David Wilson',
    slug: 'energy-efficiency-tips-luxury-appliances'
  },
  {
    id: 6,
    title: 'Choosing the Right Ventilation System for Your Kitchen',
    excerpt: 'Proper ventilation is essential for any kitchen, especially with high-performance cooking appliances. Learn how to select the right system for your needs.',
    image: '/wolfHood.jpg',
    date: 'April 15, 2025',
    author: 'Jennifer Taylor',
    slug: 'choosing-right-ventilation-system-kitchen'
  }
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Blog | Premium Appliance Repair</title>
        <meta name="description" content="Expert tips, guides, and insights about luxury appliance repair, maintenance, and care. Learn about SubZero, Wolf, and Viking appliances from our experienced technicians." />
        <meta name="keywords" content="appliance repair blog, SubZero maintenance, Wolf range tips, Viking appliance care, luxury appliance guides" />
        <link rel="canonical" href="https://premiumappliance.co/blog" />
      </Helmet>

      <div className="pt-24 pb-16 bg-gray-50">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="bg-navy-900 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Premium Appliance Repair Blog
                </h1>
                <p className="text-xl text-gray-300">
                  Expert insights, maintenance tips, and guides for your luxury appliances
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <AnimatedSection>
            {/* Featured Post */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full overflow-hidden">
                      <img 
                        src={blogPosts[0].image} 
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <User size={16} className="mr-2" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <Link 
                      to={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            {/* Newsletter Signup */}
            <div className="bg-navy-800 rounded-xl p-8 text-center mb-16">
              <h2 className="text-2xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Stay updated with the latest tips, guides, and news about luxury appliance care and maintenance.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <button className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            {/* Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                Blog Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['SubZero', 'Wolf', 'Viking', 'Maintenance', 'Installation', 'Troubleshooting'].map((category) => (
                  <Link 
                    key={category} 
                    to={`/blog/category/${category.toLowerCase()}`}
                    className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="font-medium text-navy-900">{category}</span>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default BlogPage;