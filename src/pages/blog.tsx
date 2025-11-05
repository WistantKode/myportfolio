import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define BlogPost interface for robust data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full HTML content or markdown
  category: string;
  author: string;
  publishedAt: string;
  image: string; // URL to the main image
  tags: string[];
}

// Mock blog data - Senior, technical tone, Wistant Kode
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Web Development Trends in 2024: A Senior Perspective",
    excerpt: "Delve into the cutting-edge technologies and frameworks shaping the future of robust web development. An essential read for seasoned professionals.",
    content: `
      <p>Web development is in a constant state of evolution, demanding continuous adaptation and strategic foresight. This article provides an in-depth analysis of the most impactful trends for 2024, focusing on scalability, security, and performance. We explore advancements in server-side rendering, progressive web applications, and the increasing adoption of AI-driven development tools. Understanding these shifts is crucial for maintaining a competitive edge in the rapidly evolving digital landscape.</p>
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is gaining traction, pushing computation and data storage closer to the sources of data. This paradigm shift significantly reduces latency and bandwidth usage, crucial for real-time applications and IoT devices. Implementing edge functions requires a deep understanding of distributed systems and network architecture.</p>
      <h3>Advanced Security Protocols</h3>
      <p>With the increasing sophistication of cyber threats, advanced security protocols are no longer optional. We discuss the importance of implementing robust authentication mechanisms, end-to-end encryption, and continuous security monitoring. DevSecOps practices are paramount to embedding security throughout the development lifecycle.</p>
      <h4>Future of Frontend Frameworks</h4>
      <p>While React and Vue continue to dominate, emerging frameworks and methodologies are pushing the boundaries of frontend development. Server Components, WebAssembly, and advanced state management techniques are redefining how we build interactive and performant user interfaces.</p>
      <p>For a deeper dive into these trends, consider exploring the official documentation of Next.js for Server Components or the WebAssembly specification.</p>
    `,
    category: "Development",
    author: "Wistant Kode",
    publishedAt: "2024-01-15",
    image: "/blog-post-1.jpg",
    tags: ["React", "Web Development", "Trends", "Architecture", "Performance", "DevSecOps"]
  },
  {
    id: 2,
    title: "Crafting Intuitive User Interfaces: UI/UX Principles for Engineers",
    excerpt: "Master the fundamental UI/UX design principles to engineer exceptional user experiences that are both functional and aesthetically pleasing.",
    content: `
      <p>An intuitive user interface is not merely about aesthetics; it's a critical component of software engineering that directly impacts user adoption and satisfaction. This piece dissects core UI/UX principles, offering actionable insights for developers to integrate design thinking into their development lifecycle. We cover topics such as cognitive load reduction, effective feedback mechanisms, and the importance of accessibility, ensuring that your applications are not just powerful, but also a pleasure to use.</p>
      <h2>User-Centric Design Methodologies</h2>
      <p>Adopting user-centric design methodologies, such as Design Thinking and Lean UX, ensures that development efforts are aligned with user needs. This involves continuous user research, prototyping, and iterative testing to refine the user experience.</p>
      <h3>Accessibility as a Core Requirement</h3>
      <p>Building accessible interfaces is not just a compliance issue; it's a moral and technical imperative. We emphasize the importance of WCAG guidelines, semantic HTML, and assistive technology compatibility to ensure that applications are usable by everyone.</p>
      <h4>The Role of Microinteractions</h4>
      <p>Subtle microinteractions can significantly enhance the perceived quality and responsiveness of an application. From button hovers to form validations, well-designed microinteractions provide immediate feedback and guide users through the interface seamlessly.</p>
    `,
    category: "Design",
    author: "Wistant Kode",
    publishedAt: "2024-01-10",
    image: "/blog-post-2.jpg",
    tags: ["UI/UX", "Design", "User Experience", "Frontend", "Engineering", "Accessibility"]
  },
  {
    id: 3,
    title: "Advanced Web Performance Optimization Techniques",
    excerpt: "Implement advanced strategies to significantly enhance the speed and performance of your web applications, ensuring optimal user engagement and SEO.",
    content: `
      <p>Optimizing web performance is a continuous endeavor that directly correlates with user retention and business success. This article outlines advanced techniques beyond basic caching and minification. We explore critical rendering path optimization, efficient resource loading strategies, server-side rendering benefits, and the impact of modern image formats. For engineers aiming to deliver lightning-fast web experiences, these insights are indispensable for achieving top-tier performance metrics.</p>
      <h2>Critical Rendering Path Optimization</h2>
      <p>Understanding and optimizing the Critical Rendering Path (CRP) is fundamental to achieving fast initial page loads. This involves prioritizing critical resources, deferring non-essential assets, and optimizing CSS and JavaScript delivery.</p>
      <h3>Efficient Resource Loading</h3>
      <p>Techniques such as lazy loading images and videos, preloading critical assets, and using responsive images can drastically reduce initial page weight and improve perceived performance. Strategic use of HTTP/2 and HTTP/3 protocols also plays a significant role.</p>
      <h4>Server-Side Rendering (SSR) vs. Static Site Generation (SSG)</h4>
      <p>Choosing between SSR and SSG depends on the application's specific requirements for data freshness and build times. Both offer significant performance advantages over client-side rendering by delivering fully formed HTML to the browser, improving both user experience and SEO.</p>
    `,
    category: "Performance",
    author: "Wistant Kode",
    publishedAt: "2024-01-05",
    image: "/blog-post-3.jpg",
    tags: ["Performance", "Optimization", "Web", "Speed", "SEO", "Frontend", "Backend"]
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Design", "Performance", "Security", "Cloud"]; // Added more categories for future scalability

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
      title="Blog - Wistant Kode | Insights on Software Engineering & DevSecOps"
      description="Explore Wistant Kode's latest articles on software engineering, DevSecOps practices, cloud architecture, and modern technologies. Gain insights from a senior perspective."
      keywords="blog, software engineering, DevSecOps, cloud architecture, technical articles, tutorials, Wistant Kode, Java, React, Next.js, Spring Boot, Cybersecurity, Automation"
      lang="en"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
              Technical Blog
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
              Dive into my insights on advanced software engineering, DevSecOps methodologies, and the latest technological advancements.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input border-border-light"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary border-0" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-lg">WK</span>
                        </div>
                        <p className="text-text-muted text-sm">Image Coming Soon</p>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-text-muted text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-text-secondary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-text-muted">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-secondary rounded-full text-text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          ) : (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;