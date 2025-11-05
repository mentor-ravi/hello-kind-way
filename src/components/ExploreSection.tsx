import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Target, Trophy, Star, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
const offerings = [{
  id: "courses",
  icon: GraduationCap,
  title: "Expert-Led Courses",
  description: "Learn from industry professionals with hands-on projects and real-world applications",
  details: {
    highlights: ["Industry-expert instructors with 10+ years experience", "Hands-on projects for every module", "Real-world case studies and applications", "Flexible learning schedules", "Lifetime access to course materials"],
    items: ["Full Stack Development Bootcamp", "AI & Machine Learning Mastery", "Cloud Architecture Professional", "Cybersecurity Specialist Training"]
  }
}, {
  id: "domains",
  icon: Rocket,
  title: "Technology Domains",
  description: "Master cutting-edge fields: AI, Web Dev, Blockchain, Cloud, Cybersecurity, and Data Science",
  details: {
    highlights: ["6 comprehensive technology domains", "Latest tools and technologies", "Industry-relevant skill development", "Career-focused learning paths", "Expert mentorship in each domain"],
    items: ["Artificial Intelligence & ML", "Web Development (Frontend & Backend)", "Blockchain & Crypto", "Cloud Computing (AWS, Azure, GCP)", "Cybersecurity & Ethical Hacking", "Data Science & Analytics"]
  }
}, {
  id: "events",
  icon: Target,
  title: "Live Events & Workshops",
  description: "Participate in hackathons, webinars, and interactive sessions with industry experts",
  details: {
    highlights: ["Monthly hackathons with prizes", "Weekly webinars with industry leaders", "Hands-on workshops every week", "Networking opportunities with peers", "Certificate for participation"],
    items: ["AI Innovation Hackathon 2025", "Web3 Development Workshop", "Cloud Security Masterclass", "Data Science Competition"]
  }
}, {
  id: "certifications",
  icon: Trophy,
  title: "Industry Certifications",
  description: "Earn recognized certifications that boost your career and validate your skills",
  details: {
    highlights: ["Industry-recognized certificates", "Shareable digital credentials", "LinkedIn profile enhancement", "Portfolio-ready proof of skills", "Verified by industry partners"],
    items: ["Professional Full Stack Developer", "Certified AI/ML Specialist", "Cloud Solutions Architect", "Cybersecurity Expert", "Blockchain Developer Professional"]
  }
}, {
  id: "learning",
  icon: Star,
  title: "Personalized Learning",
  description: "Follow customized learning paths tailored to your goals and skill level",
  details: {
    highlights: ["Personalized learning roadmaps", "Skill assessment and gap analysis", "Adaptive difficulty levels", "Progress tracking dashboard", "Customized recommendations"],
    items: ["Beginner to Advanced paths", "Self-paced learning modules", "Interactive coding challenges", "Real-time progress analytics", "Personalized mentor guidance"]
  }
}, {
  id: "career",
  icon: Briefcase,
  title: "Career Support",
  description: "Get mentorship, portfolio guidance, and industry connections for your tech career",
  details: {
    highlights: ["One-on-one career mentorship", "Resume and portfolio review", "Interview preparation sessions", "Industry networking events", "Job placement assistance"],
    items: ["Career counseling sessions", "Portfolio development workshops", "Mock interview preparation", "LinkedIn profile optimization", "Industry referral network"]
  }
}];
const ExploreSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-primary">Seeds of Learning</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="text-lg text-muted-foreground mb-3 max-w-3xl mx-auto font-extrabold"
          >
            Every domain starts as a seed. Plant it, nurture it, watch it branch into your future.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }} 
            className="text-xl italic text-muted-foreground mb-2 font-bold"
          >
            "You're not just learning — you're blooming." 🌿
          </motion.p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{offering.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Explore More Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 1 }} 
          className="flex justify-center"
        >
          <Link 
            to="/learning-path" 
            className="group inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-all duration-300"
          >
            <span className="relative">
              Explore More
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default ExploreSection;