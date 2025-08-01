"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitch } from "@/components/theme-switch";
import { AuroraText } from "@/components/magicui/aurora-text";
import { 
  Sparkles, 
  Brain, 
  BookOpen, 
  Zap, 
  Heart, 
  Star, 
  Play,
  ChevronRight,
  Users,
  TrendingUp,
  Search
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-background/30 border border-white/20 dark:border-white/10 rounded-3xl px-8 py-4 shadow-2xl shadow-purple-500/10 w-fit min-w-[750px]"
      >
        <div className="flex items-center justify-between w-full">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">Miru</span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">About</Button>
            <Button size="sm" className="gradient-primary text-white border-0">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 text-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Recommendations
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Your Next
              <br />
              <AuroraText 
                colors={["#8B5CF6", "#A855F7", "#7C3AED", "#C084FC", "#E879F9", "#9333EA"]}
                speed={0.8}
              >
                Favorite Anime
              </AuroraText>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let AI understand your taste and recommend anime that perfectly matches your preferences. 
              Track, discover, and fall in love with new stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-primary text-white border-0 px-8">
                <Play className="w-4 h-4 mr-2" />
                Start Discovering
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Miru</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of anime discovery with our intelligent recommendation system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-0 bg-card/50 backdrop-blur-sm">
                  <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next
              <br />
              <span className="gradient-text">Anime Obsession</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of anime fans who trust Miru to discover their perfect next watch
            </p>
            <Button size="lg" className="gradient-primary text-white border-0 px-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 gradient-primary rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold gradient-text">Miru</span>
            </div>
            
            <div className="flex items-center gap-6">
              <ThemeSwitch />
              <p className="text-sm text-muted-foreground">
                © 2025 Miru. Discover anime with AI.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Our advanced AI analyzes your preferences to suggest anime that perfectly match your taste and mood."
  },
  {
    icon: BookOpen,
    title: "Smart Watchlist Management",
    description: "Keep track of what you're watching, completed, and planning to watch with intelligent organization."
  },
  {
    icon: Zap,
    title: "Lightning Fast Search",
    description: "Find any anime instantly with our powerful search across multiple databases and platforms."
  },
  {
    icon: Heart,
    title: "Mood-Based Discovery",
    description: "Tell us how you're feeling, and we'll recommend anime that matches your current mood perfectly."
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Discover what people with similar tastes are watching and get recommendations from your anime community."
  },
  {
    icon: TrendingUp,
    title: "Trending & Seasonal",
    description: "Stay up-to-date with the latest trending anime and never miss the hottest seasonal releases."
  }
];

const stats = [
  { value: "50K+", label: "Anime Tracked" },
  { value: "10K+", label: "Happy Users" },
  { value: "95%", label: "Match Accuracy" }
];
