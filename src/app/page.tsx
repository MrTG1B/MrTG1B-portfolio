"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter, CheckCircle, Info, Menu, Instagram, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/lib/projects";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const topProjects = projects.slice(0, 3);

const techStack = [
  { name: "C", logo: "https://img.shields.io/badge/-C-00599C?style=for-the-badge&logo=c&logoColor=white" },
  { name: "C++", logo: "https://img.shields.io/badge/-C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
  { name: "Python", logo: "https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "JavaScript", logo: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
  { name: "HTML5", logo: "https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
  { name: "CSS3", logo: "https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
  { name: "Fusion360", logo: "https://img.shields.io/badge/-Fusion360-1797ED?style=for-the-badge&logo=autodesk&logoColor=white" },
  { name: "Firebase", logo: "https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
  { name: "Node.js", logo: "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" },
  { name: "Git", logo: "https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
  { name: "GitHub", logo: "https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
  { name: "Figma", logo: "https://img.shields.io/badge/-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
];

const otherSkills = {
    "Web": ["Flask", "Express"],
    "Mobile": ["XML", "Android Studio"],
    "Hardware": ["ESP32", "Arduino", "Sensors", "Actuators", "3D Printing (Ender 3)"],
    "Tools": ["AutoCAD", "VS Code"],
    "Others": ["Google Generative AI", "Flask-SocketIO", "API Integrations"]
}

const achievements = [
    "2nd Position — Hackfest State & Regional Round (SAP & Techno International New Town, April 2025)",
    "1st Runner-up — Smart Street Light System at Rajabazar Science College (13th March 2025)",
    "2nd Runner-up at Jadavpur University (17th March 2025)"
];

const MotionSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};


export default function Home() {
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
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="/projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="flex items-center space-x-2">
                     <Code className="h-6 w-6 text-primary" />
                     <span className="font-bold text-lg">MrTG1B</span>
                  </Link>
                  <Link href="#about" className="flex w-full items-center py-2 text-lg font-semibold">About</Link>
                  <Link href="/projects" className="flex w-full items-center py-2 text-lg font-semibold">Projects</Link>
                  <Link href="#skills" className="flex w-full items-center py-2 text-lg font-semibold">Skills</Link>
                  <Link href="#contact" className="flex w-full items-center py-2 text-lg font-semibold">Contact</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section ref={heroRef} id="hero" className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div 
              className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="w-fit text-accent font-semibold border-accent">Tirthankar Dasgupta</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
                Bridging Hardware and Software
              </h1>
               <p className="text-2xl font-semibold text-muted-foreground">ECE Student | Full-Stack Developer | Hardware Innovator</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm an Electronics and Communication Engineering student passionate about building complete solutions—from firmware on a circuit board to a polished web application.
              </p>
               <div className="flex space-x-4">
                <Link href="mailto:tirthankardasgupta913913@gmail.com" className="text-muted-foreground transition-colors hover:text-primary"><Mail /></Link>
                <Link href="https://www.linkedin.com/in/tirthankardasguptaprofile" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin /></Link>
                <Link href="https://github.com/MrTG1B" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Github /></Link>
                <Link href="https://twitter.com/TIRTHAN20755732" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Twitter /></Link>
                <Link href="https://www.instagram.com/marveltea__" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Instagram /></Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="secondary" asChild size="lg">
                   <Link href="/projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <motion.div
                style={{ y: heroImageY }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="https://picsum.photos/id/237/500/500"
                  width={500}
                  height={500}
                  alt="Tirthankar Dasgupta"
                  className="rounded-full object-cover aspect-square shadow-lg border-4 border-primary/50 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                  data-ai-hint="professional portrait"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        <MotionSection>
          <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
               <div className="grid md:grid-cols-2 gap-12">
                  <div>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary mb-6">About Me</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>Currently pursuing Electronics and Communication Engineering at Techno International New Town.</p>
                        <p>Passionate about IoT, Embedded Systems, Robotics, and Full Stack Development.</p>
                        <p>Constantly learning and building innovative projects that bridge hardware and software.</p>
                        <p>Actively exploring open-source contributions and collaborative projects.</p>
                        <p>I also develop Android apps using XML and Android Studio.</p>
                      </div>
                  </div>
                  <div>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary mb-6">Education</h2>
                      <div className="space-y-4">
                          <div>
                              <h3 className="font-semibold">Techno International New Town, Kolkata</h3>
                              <p className="text-sm text-muted-foreground">B.Tech, Electronics & Communication Engineering | 2022 – Present (4th Year)</p>
                          </div>
                          <div>
                              <h3 className="font-semibold">Rishi Aurobindo Memorial Academy</h3>
                              <p className="text-sm text-muted-foreground">Higher Secondary (ISC), Pure Science with Computer Science | 2020 – 2022 (Distinction)</p>
                          </div>
                           <div>
                              <h3 className="font-semibold">Calcutta Airport English High School (H.S.)</h3>
                              <p className="text-sm text-muted-foreground">Madhyamik | 2008 – 2020 (First Division)</p>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </section>
        </MotionSection>

        <MotionSection>
          <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Featured Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {topProjects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full object-cover" data-ai-hint={project.aiHint} />
                      <div className="flex flex-col flex-grow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="bg-secondary/20 p-4 mt-auto flex-col items-start gap-4">
                          <Button asChild variant="outline" className="w-full">
                              <Link href={`/projects/${project.slug}`}>
                                <Info className="mr-2 h-4 w-4" />
                                More Info
                              </Link>
                          </Button>
                          <div className="flex w-full gap-4">
                            {project.links?.github && (
                              <Button asChild variant="code" className="w-full">
                                <Link href={project.links.github} target="_blank">
                                  <Github className="mr-2 h-4 w-4" /> Code
                                </Link>
                              </Button>
                            )}
                            {project.links?.live && (
                              <Button asChild variant="live" className="w-full">
                                <Link href={project.links.live} target="_blank">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Live
                                </Link>
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
               <div className="mt-12 text-center">
                  <Button asChild size="lg">
                    <Link href="/projects">View All Projects</Link>
                  </Button>
              </div>
            </div>
          </section>
        </MotionSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <MotionSection>
              <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 h-full">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">My Skillset</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I continuously strive to learn and master new technologies.
                    </p>
                  </div>
                  
                  <div className="w-full overflow-hidden relative group [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                      {techStack.map((skill) => (
                        <div key={skill.name} className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg p-2 mx-4 h-12">
                          <Image src={skill.logo} alt={skill.name} width={120} height={30} className="h-full w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl">
                    {Object.entries(otherSkills).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="font-bold text-xl mb-4 text-accent">{category}</h3>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>

                </div>
              </section>
            </MotionSection>

            <MotionSection>
              <section id="achievements" className="w-full py-16 md:py-24 lg:py-32 bg-card">
                <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 h-full">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Achievements</h2>
                     <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Awards and recognition I've received for my work.
                    </p>
                  </div>
                   <div className="mx-auto grid max-w-4xl gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </MotionSection>
        </div>


        <MotionSection>
          <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Contact Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
              </div>
              <div className="mx-auto w-full max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </section>
        </MotionSection>
      </main>
      
      <footer className="w-full bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/TIRTHAN20755732" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="https://github.com/MrTG1B" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-6 w-6" /></Link>
            <Link href="https://www.linkedin.com/in/tirthankardasguptaprofile" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
            <Link href="https://www.instagram.com/marveltea__" target="_blank" className="text-muted-foreground transition-colors hover:text-primary"><Instagram className="h-6 w-6" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
