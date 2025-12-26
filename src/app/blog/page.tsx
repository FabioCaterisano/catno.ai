"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const blogPosts = [
  {
    title: "The Future of AI Voice Agents in Customer Service",
    excerpt:
      "Explore how AI voice technology is revolutionizing customer service and what it means for your business.",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "AI Technology",
  },
  {
    title: "5 Ways to Improve Customer Experience with Voice AI",
    excerpt:
      "Practical strategies to enhance customer satisfaction using intelligent voice agents.",
    date: "2024-12-15",
    readTime: "7 min read",
    category: "Best Practices",
  },
  {
    title: "Understanding Natural Language Processing in Voice AI",
    excerpt:
      "A deep dive into how NLP powers modern conversational AI and enables human-like interactions.",
    date: "2024-12-10",
    readTime: "10 min read",
    category: "Technical",
  },
  {
    title: "Case Study: How Company X Increased Sales by 40%",
    excerpt: "Real-world success story of implementing AI voice agents for sales automation.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Case Study",
  },
  {
    title: "Security and Compliance in Voice AI Solutions",
    excerpt: "Learn about the security measures and compliance standards that protect your data.",
    date: "2024-11-30",
    readTime: "8 min read",
    category: "Security",
  },
  {
    title: "Getting Started with AI Voice Agents: A Beginner's Guide",
    excerpt: "Everything you need to know about implementing voice AI in your business.",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Getting Started",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section className="gradient-dark pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-primary text-gradient">Blog</span> & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              The latest news, updates, and insights from the world of AI voice technology.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:border-primary/50 transition-colors group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
