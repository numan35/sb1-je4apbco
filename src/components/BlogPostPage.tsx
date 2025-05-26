import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from '../services/blogService';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
        
        // Fetch related posts (same category)
        const allPosts = await getAllBlogPosts();
        const related = allPosts
          .filter(p => p.category === fetchedPost.category && p.id !== fetchedPost.id)
          .slice(0, 3);
        
        setRelatedPosts(related);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  // If no real post data is available, use sample data
  useEffect(() => {
    if (!loading && !post && !error) {
      // Sample data for development/preview
      const samplePost = {
        id: '1',
        title: 'Common Issues with SubZero Refrigerators and How to Fix Them',
        slug: slug || 'common-issues-subzero-refrigerators',
        excerpt: 'SubZero refrigerators are known for their reliability, but even the best appliances can experience issues. Learn about the most common problems and how our technicians address them.',
        content: `
          <p>SubZero refrigerators are premium appliances that typically offer exceptional reliability and performance. However, like any complex appliance, they can develop issues over time. In this article, we'll explore the most common problems SubZero owners encounter and provide professional insights on how to address them.</p>
          
          <h2>1. Temperature Fluctuations</h2>
          
          <p>One of the most common issues with SubZero refrigerators is temperature inconsistency. You might notice that your refrigerator isn't maintaining the set temperature, or certain areas feel warmer than others.</p>
          
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Dirty condenser coils</li>
            <li>Faulty door seals</li>
            <li>Defective temperature sensors</li>
            <li>Issues with the compressor</li>
          </ul>
          
          <p><strong>Solutions:</strong></p>
          <p>Start by checking the condenser coils, which are typically located at the bottom of the unit. Over time, these coils collect dust and debris, which can affect cooling efficiency. Cleaning them every 6-12 months can significantly improve performance.</p>
          
          <p>Next, inspect the door seals (gaskets) for any cracks, tears, or food debris that might prevent a proper seal. A simple test is to close the door on a dollar bill - if you can pull it out easily, the seal may need replacement.</p>
          
          <p>If these steps don't resolve the issue, it's time to call a professional technician who can diagnose and repair more complex problems with temperature sensors or the compressor system.</p>
          
          <h2>2. Ice Maker Problems</h2>
          
          <p>Ice maker issues are another frequent complaint among SubZero owners. These can manifest as the ice maker not producing ice, producing too little ice, or creating ice with an odd taste or appearance.</p>
          
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Water supply issues</li>
            <li>Clogged water filter</li>
            <li>Frozen water line</li>
            <li>Faulty ice maker assembly</li>
          </ul>
          
          <p><strong>Solutions:</strong></p>
          <p>First, check that the water supply to the refrigerator is turned on and flowing properly. Then, inspect the water filter - SubZero recommends replacing it every 6-12 months, but you might need to do it more frequently depending on your water quality.</p>
          
          <p>If the water line is frozen, you may need to thaw it carefully. However, this could indicate a more serious issue with the defrost system that requires professional attention.</p>
          
          <p>For problems with the ice maker assembly itself, it's best to consult with a certified SubZero technician who has the specialized knowledge and parts to properly repair these sophisticated systems.</p>
          
          <h2>3. Unusual Noises</h2>
          
          <p>While all refrigerators make some noise during normal operation, unusual or excessive sounds can indicate a problem with your SubZero unit.</p>
          
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Fan obstructions</li>
            <li>Compressor issues</li>
            <li>Refrigerant flow problems</li>
            <li>Loose components</li>
          </ul>
          
          <p><strong>Solutions:</strong></p>
          <p>Check for any obvious obstructions around the fans, both inside the refrigerator and in the condenser area. Sometimes, items in the refrigerator can shift and block air circulation, causing increased fan noise.</p>
          
          <p>If you hear buzzing, clicking, or rattling sounds, especially from the back or bottom of the unit, this could indicate issues with the compressor or other mechanical components. These problems typically require professional diagnosis and repair.</p>
          
          <h2>4. Water Leakage</h2>
          
          <p>Finding water pooling inside or around your SubZero refrigerator can be concerning and potentially damaging to your kitchen.</p>
          
          <p><strong>Possible Causes:</strong></p>
          <ul>
            <li>Clogged defrost drain</li>
            <li>Water line connection issues</li>
            <li>Improper leveling</li>
            <li>Condensation due to seal problems</li>
          </ul>
          
          <p><strong>Solutions:</strong></p>
          <p>A common cause of water leakage is a clogged defrost drain. The drain can become blocked with food particles or ice, preventing proper drainage during the defrost cycle. Carefully clearing this drain can often resolve the issue.</p>
          
          <p>Check all water line connections for any signs of leakage or damage. Also, ensure your refrigerator is properly leveled - SubZero units should have a slight tilt backward to ensure proper door closure and drainage.</p>
          
          <p>If you notice excessive condensation inside the unit, this could indicate problems with the door seals or the defrost system, which may require professional attention.</p>
          
          <h2>When to Call a Professional</h2>
          
          <p>While some minor issues can be addressed by homeowners, SubZero refrigerators are sophisticated appliances with complex systems. We recommend contacting a certified SubZero repair specialist if:</p>
          
          <ul>
            <li>Basic troubleshooting doesn't resolve the issue</li>
            <li>You notice electrical problems or burning smells</li>
            <li>The refrigerator is not cooling at all</li>
            <li>There are issues with the sealed refrigeration system</li>
            <li>You're uncomfortable performing maintenance yourself</li>
          </ul>
          
          <p>Our factory-certified technicians have the specialized training, tools, and genuine SubZero parts to properly diagnose and repair your refrigerator, ensuring it continues to perform at its best for years to come.</p>
          
          <h2>Preventative Maintenance Tips</h2>
          
          <p>To keep your SubZero refrigerator running optimally and prevent common issues:</p>
          
          <ul>
            <li>Clean condenser coils every 6-12 months</li>
            <li>Replace water filters as recommended</li>
            <li>Check and clean door gaskets regularly</li>
            <li>Maintain proper temperature settings (typically 38°F for refrigerator, 0°F for freezer)</li>
            <li>Ensure proper air circulation inside the unit</li>
            <li>Schedule annual professional maintenance</li>
          </ul>
          
          <p>By following these tips and addressing minor issues promptly, you can extend the life of your SubZero refrigerator and enjoy its premium performance for many years.</p>
        `,
        image_url: '/subzero1.jpg',
        published_at: new Date().toISOString(),
        author: 'John Smith',
        author_title: 'Master Technician',
        category: 'SubZero',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      setPost(samplePost);
      
      // Sample related posts
      setRelatedPosts([
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
          category: 'Wolf',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '3',
          title: 'Viking vs. Wolf: Comparing Luxury Cooking Appliances',
          excerpt: 'Trying to decide between Viking and Wolf for your kitchen? Our experts break down the differences, similarities, and unique features of each brand.',
          content: 'When choosing between Viking and Wolf for your luxury kitchen, there are several factors to consider. This comparison guide helps you make an informed decision.',
          image_url: '/viking1.jpeg',
          published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          author: 'Michael Brown',
          author_title: 'Appliance Specialist',
          slug: 'viking-vs-wolf-comparing-luxury-appliances',
          category: 'Comparison',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]);
    }
  }, [loading, post, error, slug]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
          <button 
            onClick={() => navigate('/blog')}
            className="mt-6 bg-navy-800 text-white px-4 py-2 rounded hover:bg-navy-900 transition-colors"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blog"
            className="bg-navy-800 text-white px-4 py-2 rounded hover:bg-navy-900 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Premium Appliance Repair Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://premiumappliance.co/blog/${post.slug}`} />
        <meta property="og:image" content={post.image_url} />
        <link rel="canonical" href={`https://premiumappliance.co/blog/${post.slug}`} />
      </Helmet>

      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-navy-800 hover:text-navy-900 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </div>

            {/* Article Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="h-96 relative">
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 md:p-10 w-full">
                    <div className="flex items-center text-sm text-white mb-4">
                      <span className="px-3 py-1 bg-gold-500 text-white rounded-full text-xs font-medium mr-3">
                        {post.category}
                      </span>
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>10 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="flex items-center mb-8 border-b border-gray-200 pb-6">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=128" 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-navy-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.author_title}</p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <Tag size={18} className="text-navy-800 mr-2" />
                    <span className="text-navy-800 font-medium mr-2">Category:</span>
                    <Link 
                      to={`/blog/category/${post.category.toLowerCase()}`}
                      className="text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      {post.category}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image_url} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium mr-2">
                            {relatedPost.category}
                          </span>
                          <Calendar size={12} className="mr-1" />
                          <span>{new Date(relatedPost.published_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <h3 className="text-lg font-bold text-navy-900 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

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
      </div>
    </>
  );
};

export default BlogPostPage;