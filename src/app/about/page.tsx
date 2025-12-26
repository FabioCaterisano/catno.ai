"use client";

import { motion } from "framer-motion";
import { Target, Users, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're on a mission to democratize AI voice technology and make it accessible to businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description:
      "Our success is measured by your success. We're committed to delivering exceptional value and support.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We're constantly pushing the boundaries of what's possible with AI voice technology.",
  },
];

export default function AboutPage() {
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
              About <span className="gradient-primary text-gradient">catno.ai</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re building the future of conversational AI, one voice at a time.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                catno.ai was founded with a simple belief: every business deserves access to
                world-class AI voice technology. We started in 2024 with a small team of passionate
                engineers and AI researchers who saw the potential to transform how businesses
                communicate with their customers.
              </p>
              <p className="text-muted-foreground">
                Today, we&apos;re proud to serve thousands of businesses worldwide, helping them
                deliver exceptional customer experiences through intelligent voice agents that work
                24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-lg glass border border-primary/20 flex items-center justify-center"
            >
              <div className="text-muted-foreground">Team Photo Placeholder</div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Our Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
