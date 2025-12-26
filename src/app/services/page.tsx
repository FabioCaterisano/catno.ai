"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, HeadphonesIcon, BarChart3, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Phone,
    title: "Inbound Call Handling",
    description:
      "Intelligent voice agents that handle incoming calls with natural conversation flow and context awareness.",
    features: ["24/7 Availability", "Multi-language Support", "CRM Integration"],
  },
  {
    icon: MessageSquare,
    title: "Outbound Campaigns",
    description:
      "Automated outbound calling for sales, surveys, and customer outreach with personalized messaging.",
    features: ["Smart Scheduling", "Follow-up Automation", "Performance Analytics"],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description:
      "AI-powered support agents that resolve issues quickly and escalate complex cases to human agents.",
    features: ["Instant Responses", "Knowledge Base Integration", "Seamless Handoff"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics dashboard to track performance, sentiment, and conversation quality.",
    features: ["Real-time Metrics", "Sentiment Analysis", "Custom Reports"],
  },
  {
    icon: Clock,
    title: "Appointment Scheduling",
    description:
      "Automated booking and scheduling with calendar integration and reminder notifications.",
    features: ["Calendar Sync", "Auto Reminders", "Rescheduling Support"],
  },
  {
    icon: Globe,
    title: "Multi-Channel Support",
    description:
      "Unified voice AI across phone, web, and mobile platforms for consistent customer experience.",
    features: ["Omnichannel", "API Access", "Custom Integration"],
  },
];

export default function ServicesPage() {
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
              Our <span className="gradient-primary text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI voice solutions tailored to your business needs.
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
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            className="text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI voice agents can help you achieve your goals.
            </p>
            <Button variant="gradient" size="xl">
              Schedule a Demo
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
