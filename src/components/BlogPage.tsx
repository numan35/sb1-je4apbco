import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tool, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BlogPage = () => {
  // Sample blog post data
  const featuredPost = {
    id: 1,
    title: 'Common Issues with SubZero Refrigerators and How to Fix Them',
    excerpt: 'SubZero refrigerators are known for their reliability, but even the best appliances can experience issues. Learn about the most common problems and how our technicians address them.',
    content: 'SubZero refrigerators are premium appliances that typically offer exceptional reliability and performance. However, like any complex appliance, they can develop issues over time. In this article, we'll explore the most common problems SubZero owners encounter and provide professional insights on how to address them.',
    image: '/subzero1.jpg',
    date: 'May 15, 2025',
    author: 'John Smith',
    authorTitle: 'Master Technician',
    slug: 'common-issues-subzero-refrigerators',
    category: 'SubZero'
  };
  
  const blogPosts = [
    {
      id: 2,
      title: 'Maintaining Your Wolf Range for Optimal Performance',
      excerpt: 'Regular maintenance is key to keeping your Wolf range performing at its best. Discover professional tips for maintaining your luxury cooking appliance.',
      image: '/wolf1.jpg',
      date: 'May 10, 2025',
      author: 'Sarah Johnson',
      authorTitle: 'Senior Technician',
      slug: 'maintaining-wolf-range-optimal-performance',
      category: 'Wolf'
    },
    {
      id: 3,
      title: 'Viking vs. Wolf: Comparing Luxury Cooking Appliances',
      excerpt: 'Trying to decide between Viking and Wolf for your kitchen? Our experts break down the differences, similarities, and unique features of each brand.',
      image: '/viking1.jpeg',
      date: 'May 5, 2025',
      author: 'Michael Brown',
      authorTitle: 'Appliance Specialist',
      slug: 'viking-vs-wolf-comparing-luxury-appliances',
      category: 'Comparison'
    },
    {
      id: 4,
      title: 'The Benefits of Professional Appliance Installation',
      excerpt: 'Proper installation is crucial for the performance and longevity of your luxury appliances. Learn why professional installation is worth the investment.',
      image: '/wolf3.jpg',
      date: 'April 28, 2025',
      author: 'Emily Davis',
      authorTitle: 'Installation Expert',
      slug: 'benefits-professional-appliance-installation',
      category: 'Installation'
    },
    {
      id: 5,
      title: 'Energy Efficiency Tips for Luxury Appliances',
      excerpt: 'Luxury appliances don\'t have to mean high energy bills. Discover how to maximize the efficiency of your high-end kitchen appliances.',
      image: '/subzero2.jpg',
      date: 'April 20, 2025',
      author: 'David Wilson',
      authorTitle: 'Energy Efficiency Consultant',
      slug: 'energy-efficiency-tips-luxury-appliances',
      category: 'Maintenance'
    },
    {
      id: 6,
      title: 'Choosing the Right Ventilation System for Your Kitchen',
      excerpt: 'Proper ventilation is essential for any kitchen, especially with high-performance cooking appliances. Learn how to select the right system for your needs.',
      image: '/wolfHood.jpg',
      date: 'April 15, 2025',
      author: 'Jennifer Taylor',
      authorTitle: 'Kitchen Design Specialist',
      slug: 'choosing-right-ventilation-system-kitchen',
      category: 'Wolf'
    }
  ];

  const categories = [
    { name: 'SubZero', count: 12 },
    { name: 'Wolf', count: 15 },
    { name: 'Viking', count: 10 },
    { name: 'Maintenance', count: 8 },
    { name: 'Troubleshooting', count: 14 },
    { name: 'Installation', count: 6 }
  ];

  const maintenanceTips = [
    {
      title: "Regular Cleaning",
      description: "Clean your appliances regularly to prevent buildup of dirt, grease, and food particles that can affect performance.",
      icon: <Tool className="text-gold-500" size={24} />
    },
    {
      title: "Scheduled Maintenance",
      description: "Schedule professional maintenance at least once a year to catch potential issues before they become major problems.",
      icon: <Calendar className="text-gold-500" size={24} />
    },
    {
      title: "Proper Usage",
      description: "Follow manufacturer guidelines for proper usage to extend the life of your luxury appliances.",
      icon: <CheckCircle className="text-gold-500" size={24} />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Appliance Maintenance & Repair Blog | Premium Appliance Repair</title>
        <meta name="description" content="Expert tips, guides, and insights about luxury appliance repair, maintenance, and care. Learn about SubZero, Wolf, and Viking appliances from our experienced technicians." />
        <meta name="keywords" content="appliance repair blog, SubZero maintenance, Wolf range tips, Viking appliance care, luxury appliance guides, appliance troubleshooting" />
        <link rel="canonical" href="https://premiumappliance.co/blog" />
      </Helmet>

      <div className="pt-24 pb-16 bg-gray-50">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="bg-navy-900 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Luxury Appliance Maintenance & Repair Blog
                </h1>
                <p className="text-xl text-gray-300">
                  Expert insights, maintenance tips, and troubleshooting guides for your high-end appliances
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
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-medium mr-3">
                        {featuredPost.category}
                      </span>
                      <Calendar size={16} className="mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=128" 
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-navy-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.authorTitle}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <AnimatedSection delay={200}>
                {/* Blog Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {blogPosts.map((post) => (
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
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium mr-3">
                              {post.category}
                            </span>
                            <Calendar size={14} className="mr-2" />
                            <span>{post.date}</span>
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

              <AnimatedSection delay={300}>
                {/* Maintenance Tips Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">
                    Essential Maintenance Tips for Luxury Appliances
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {maintenanceTips.map((tip, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gold-300 transition-colors">
                        <div className="flex items-center mb-4">
                          {tip.icon}
                          <h3 className="text-lg font-bold text-navy-900 ml-3">{tip.title}</h3>
                        </div>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Link 
                      to="/blog/category/maintenance"
                      className="inline-flex items-center bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                    >
                      View All Maintenance Tips
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                {/* Common Issues Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">
                    Common Issues & Troubleshooting
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">SubZero Refrigerator Not Cooling Properly</h3>
                      <p className="text-gray-600 mb-4">
                        If your SubZero refrigerator isn't cooling properly, it could be due to several factors including condenser coils that need cleaning, a malfunctioning thermostat, or issues with the evaporator fan.
                      </p>
                      <Link 
                        to="/blog/subzero-refrigerator-not-cooling"
                        className="text-gold-600 font-medium hover:text-gold-700 transition-colors flex items-center"
                      >
                        Read Troubleshooting Guide
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Wolf Range Ignition Problems</h3>
                      <p className="text-gray-600 mb-4">
                        Ignition issues with Wolf ranges often stem from clogged burners, faulty ignition modules, or problems with the gas supply. Learn how to diagnose and address these common problems.
                      </p>
                      <Link 
                        to="/blog/wolf-range-ignition-problems"
                        className="text-gold-600 font-medium hover:text-gold-700 transition-colors flex items-center"
                      >
                        Read Troubleshooting Guide
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Viking Dishwasher Drainage Issues</h3>
                      <p className="text-gray-600 mb-4">
                        Drainage problems in Viking dishwashers can be caused by clogged filters, kinked drain hoses, or pump malfunctions. Our guide helps you identify and resolve these issues.
                      </p>
                      <Link 
                        to="/blog/viking-dishwasher-drainage-issues"
                        className="text-gold-600 font-medium hover:text-gold-700 transition-colors flex items-center"
                      >
                        Read Troubleshooting Guide
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Link 
                      to="/blog/category/troubleshooting"
                      className="inline-flex items-center bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                    >
                      View All Troubleshooting Guides
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/3">
              <AnimatedSection delay={250}>
                {/* Search Box */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">Search Articles</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for tips and guides..." 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    <button className="absolute right-3 top-3 text-gray-400 hover:text-gold-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          to={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-navy-800 rounded-xl p-6 text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Stay updated with the latest tips, guides, and news about luxury appliance care and maintenance.
                  </p>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                    <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="flex items-start group">
                        <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden mr-3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Need Expert Help?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our certified technicians are ready to assist with any luxury appliance repair needs.
                  </p>
                  <div className="space-y-3">
                    <Link 
                      to="/book" 
                      className="block w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                    >
                      Schedule Service
                    </Link>
                    <a 
                      href="tel:+14704521545" 
                      className="block w-full bg-transparent border border-white text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                    >
                      Call (470) 452-1545
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;