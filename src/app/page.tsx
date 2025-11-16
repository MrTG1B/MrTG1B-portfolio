

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code, Mail, Linkedin, Github, Info, Cpu, Smartphone, Cog, Award } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const topProjectSlugs = ["wellmed", "promptforge", "gemini-powered-bot"];
const topProjects = projects.filter(p => topProjectSlugs.includes(p.slug));

const allAchievements = [
    {
      title: "1st Runner-up, Smart Street Light System",
      event: "Auralis @ Rajabazar Science College",
      description: "Won 1st Runner-up for the Smart Street Light System at Rajabazar Science College.",
      icon: <Award className="h-8 w-8 text-accent" />
    },
    {
      title: "2nd Runner-up, Project Innovation",
      event: "Auralis @ Jadavpur University",
      description: "Awarded 2nd Runner-up at Jadavpur University for the project's innovation.",
      icon: <Award className="h-8 w-8 text-accent" />
    },
    {
      title: "'Best Approach' Award",
      event: "Handy @ Hacksprint, IIEST Shibpur",
      description: "Won 'Best Approach' award with a cash prize at Hacksprint, organized by IIEST Shibpur.",
      icon: <Award className="h-8 w-8 text-accent" />
    },
    {
      title: "2nd Position, Regional Round",
      event: "Handy with Team Lumen",
      description: "Secured 2nd position and a cash prize in the regional round with Team Lumen.",
      icon: <Award className="h-8 w-8 text-accent" />
    }
];


const MotionSection = motion.section;

const skillsLogos = [
    { name: "Java", logo: "https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white" },
    { name: "C", logo: "https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=white" },
    { name: "C++", logo: "https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white" },
    { name: "Python", logo: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" },
    { name: "JavaScript", logo: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" },
    { name: "HTML5", logo: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" },
    { name: "CSS3", logo: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" },
    { name: "Node.js", logo: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" },
    { name: "Express", logo: "https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" },
    { name: "Android Studio", logo: "https://img.shields.io/badge/Android_Studio-3DDC84?logo=androidstudio&logoColor=white" },
    { name: "Git", logo: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" },
    { name: "GitHub", logo: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" },
    { name: "Figma", logo: "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white" },
    { name: "AutoCAD", logo: "https://img.shields.io/badge/AutoCAD-F29B0C?logo=autocad&logoColor=white" },
    { name: "VS Code", logo: "https://img.shields.io/badge/VS_Code-007ACC?logo=visualstudiocode&logoColor=white" },
    { name: "Firebase", logo: "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" },
    { name: "Altium Designer", logo: "https://img.shields.io/badge/Altium_Designer-A59162?logo=altiumdesigner&logoColor=white" },
    { name: "KiCad", logo: "https://img.shields.io/badge/KiCad-2F2F2F?logo=kicad&logoColor=white" }
];

const otherSkills = [
    {
        category: "Hardware",
        skills: "ESP32, Arduino, Sensors, Actuators, 3D Printing (Ender 3)",
        icon: <Cpu className="h-8 w-8 text-accent" />
    },
    {
        category: "Design & Mobile",
        skills: "Fusion360, XML",
        icon: <Smartphone className="h-8 w-8 text-accent" />
    },
    {
        category: "Other Technologies",
        skills: "Google Generative AI, Flask, Flask-SocketIO, API Integrations",
        icon: <Cog className="h-8 w-8 text-accent" />
    }
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
                  <div className="relative w-full h-[225px] bg-secondary border-b overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 bg-muted p-2 flex items-center gap-1.5 z-10">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {project.links?.live ? (
                      <div className="w-full h-full pt-[34px] flex items-center justify-center">
                        <div className="relative aspect-video w-full">
                           <iframe
                              className="absolute top-0 left-0 w-[1920px] h-[1080px] origin-[0_0]"
                              style={{ transform: 'scale(calc(1/4))', transformOrigin: 'top left' }}
                              src={project.links.live}
                              sandbox="allow-scripts allow-same-origin"
                              loading="lazy"
                              title={project.title}
                          />
                        </div>
                      </div>
                    ) : (
                      project.image && <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-full object-cover pt-[34px]" data-ai-hint={project.aiHint} />
                    )}
                  </div>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills &amp; Expertise</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        A glimpse into the technologies and tools I work with.
                    </p>
                </div>
                
                <div className="relative w-full overflow-hidden group mb-16">
                    <div className="flex animate-scroll group-hover:pause">
                        {[...skillsLogos, ...skillsLogos].map((skill, index) => (
                           <div key={index} className="flex-shrink-0 w-[160px] h-[60px] mx-4 flex items-center justify-center p-2 rounded-lg bg-muted">
                               <Image 
                                   src={skill.logo} 
                                   alt={skill.name} 
                                   width={120} 
                                   height={40}
                                   className="object-contain max-h-full max-w-full"
                               />
                           </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
                    {otherSkills.map((item, index) => (
                       <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card">
                           <div className="flex-shrink-0 mt-1">{item.icon}</div>
                           <div>
                               <h3 className="text-xl font-bold">{item.category}</h3>
                               <p className="mt-2 text-muted-foreground leading-relaxed">{item.skills}</p>
                           </div>
                       </div>
                   ))}
                </div>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Awards &amp; Recognition</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        Proud moments from my journey in technology and innovation.
                    </p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    {allAchievements.map((item, index) => (
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
