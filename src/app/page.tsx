
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code, Mail, Linkedin, Github, Info } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const topProjectSlugs = ["wellmed", "promptforge", "gemini-powered-bot"];
const topProjects = projects.filter(p => topProjectSlugs.includes(p.slug));

const achievements = [
    {
        title: "1st Runner-up",
        event: "Smart Street Light System, Rajabazar Science College",
        description: "Awarded for the innovative Auralis project, an IoT-based smart street lighting solution.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M10.5 8.5L8 12l2.5 3.5" /><path d="M13.5 8.5L16 12l-2.5 3.5" /></svg>
    },
    {
        title: "2nd Runner-up",
        event: "Jadavpur University Tech Fest",
        description: "Recognized for the Auralis project's potential in smart city infrastructure.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
    },
];

const MotionSection = motion.section;

const skillsLogos = [
    { name: "TypeScript", logo: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" },
    { name: "React", logo: "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" },
    { name: "Next.js", logo: "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" },
    { name: "Node.js", logo: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" },
    { name: "Python", logo: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" },
    { name: "Firebase", logo: "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" },
    { name: "TailwindCSS", logo: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" },
    { name: "Framer Motion", logo: "https://img.shields.io/badge/Framer_Motion-E428C1?logo=framer&logoColor=white" },
    { name: "Git", logo: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" },
    { name: "Docker", logo: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" }
];

export default function Page() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">MrTG1B</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section ref={heroRef} id="hero" className="relative w-full h-[80vh] overflow-hidden">
          <motion.div
            style={{ y: heroImageY }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://picsum.photos/seed/1/1920/1080"
              alt="Abstract background"
              fill
              priority
              className="object-cover"
              data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline"
            >
              Tirthankar Dasgupta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80"
            >
              Full-Stack Developer | AI & Robotics Enthusiast | Innovator
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="#projects">
                  <Briefcase className="mr-2" /> View My Work
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">
                  <Mail className="mr-2" /> Get in Touch
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex space-x-6"
            >
              <Link href="https://github.com/MrTG1B" target="_blank" aria-label="GitHub" className="text-primary-foreground/80 hover:text-primary transition-colors"><Github size={28} /></Link>
              <Link href="https://www.linkedin.com/in/tirthankar-dasgupta-310b67202" target="_blank" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary transition-colors"><Linkedin size={28} /></Link>
            </motion.div>
          </div>
        </section>
                
        <MotionSection
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full py-16 md:py-24 lg:py-32"
        >
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">About Me</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  I am a passionate full-stack developer and AI enthusiast with a knack for building innovative solutions to complex problems. My journey in tech has been driven by a curiosity for how things work, from intricate software systems to intelligent robots.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  With a strong foundation in both hardware and software, I enjoy bringing ideas to life, whether it's a dynamic web application, a smart IoT device, or an autonomous robot powered by cloud AI. I thrive on challenges and am always eager to learn and apply new technologies.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://picsum.photos/seed/2/600/600"
                  alt="Tirthankar Dasgupta"
                  width={600}
                  height={600}
                  className="rounded-full object-cover shadow-lg mx-auto"
                  data-ai-hint="profile photo"
                />
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full py-16 md:py-24 lg:py-32 bg-card"
        >
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                A selection of projects that showcase my skills and passion for building.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {topProjects.map((project) => (
                <Card key={project.slug} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full object-cover" data-ai-hint={project.aiHint} />
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="bg-secondary/20 p-4 mt-auto">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/projects/${project.slug}`}>
                          <Info className="mr-2 h-4 w-4" />
                          Learn More
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionSection>

        <MotionSection
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full py-16 md:py-24 lg:py-32"
        >
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills & Expertise</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        A glimpse into the technologies and tools I work with.
                    </p>
                </div>
                 <Carousel 
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {skillsLogos.map((skill, index) => (
                            <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                                <div className="p-1">
                                    <div className="flex aspect-video items-center justify-center p-2 rounded-lg bg-muted">
                                        <Image 
                                            src={skill.logo} 
                                            alt={skill.name} 
                                            width={120} 
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </MotionSection>

        <MotionSection
            id="achievements"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full py-16 md:py-24 lg:py-32 bg-card"
        >
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Awards & Recognition</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        Proud moments from my journey in technology and innovation.
                    </p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    {achievements.map((item, index) => (
                       <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-background/50">
                           <div className="flex-shrink-0">{item.icon}</div>
                           <div>
                               <h3 className="text-xl font-bold">{item.title}</h3>
                               <p className="font-semibold text-muted-foreground">{item.event}</p>
                               <p className="mt-2 text-muted-foreground">{item.description}</p>
                           </div>
                       </div>
                   ))}
                </div>
            </div>
        </MotionSection>

        <MotionSection
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full py-16 md:py-24 lg:py-32"
        >
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Get In Touch</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        Have a question, a project idea, or just want to connect? Send me a message!
                    </p>
                </div>
                <div className="mx-auto max-w-2xl">
                   <ContactForm />
                </div>
            </div>
        </MotionSection>

      </main>
      <footer className="w-full bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-8 text-center">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
