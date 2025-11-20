"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code, Mail, Linkedin, Github, Info, Cpu, Smartphone, Cog, Award, Menu } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

const topProjectSlugs = ["auralis", "resuai", "dgen-technologies", "wellmed"];
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

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="X"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      fill="currentColor"
    />
  </svg>
);


export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Code className="relative h-8 w-8 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">MrTG1B</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="relative text-muted-foreground hover:text-primary transition-colors group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <Button asChild variant="default" size="sm" className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black/95 border-r border-white/10">
                <div className="p-6">
                  <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl">MrTG1B</span>
                  </Link>
                  <nav className="flex flex-col gap-6 text-lg">
                    {["About", "Projects", "Skills", "Contact"].map((item) => (
                      <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                    ))}
                  </nav>
                  <Separator className="my-8 bg-white/10" />
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full py-24 md:py-32 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/5 -z-10"></div>
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors">About Me</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">Crafting Digital Experiences</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I am a passionate full-stack developer and AI enthusiast with a knack for building innovative solutions to complex problems. My journey in tech has been driven by a curiosity for how things work, from intricate software systems to intelligent robots.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    With a strong foundation in both hardware and software, I enjoy bringing ideas to life, whether it's a dynamic web application, a smart IoT device, or an autonomous robot powered by cloud AI. I thrive on challenges and am always eager to learn and apply new technologies.
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src="https://picsum.photos/seed/2/800/800"
                      alt="Tirthankar Dasgupta"
                      width={800}
                      height={800}
                      className="object-cover transform group-hover:scale-105 transition duration-700"
                      data-ai-hint="profile photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-24 md:py-32 bg-black/20"
          >
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">Portfolio</Badge>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground text-xl">
                  A selection of projects that showcase my skills and passion for building.
                </p>
              </div>
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass flex flex-col overflow-hidden h-full border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] group">
                      <div className="relative w-full h-[240px] bg-secondary/10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <Button asChild size="sm" className="w-full bg-white text-black hover:bg-white/90">
                            <Link href={`/projects/${project.slug}`}>View Project</Link>
                          </Button>
                        </div>
                        {project.links?.live ? (
                          <div className="w-full h-full relative flex justify-center items-center">
                            <iframe
                              src={project.links.live}
                              className="absolute w-[1920px] h-[1080px] transform scale-[0.185] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 pointer-events-none"
                              title={project.title}
                            />
                          </div>
                        ) : (
                          project.image && <Image src={project.image} alt={project.title} fill className={`w-full h-full ${project.imageFit === 'cover' ? 'object-cover' : 'object-contain'} transition-transform duration-700 group-hover:scale-110`} data-ai-hint={project.aiHint} />
                        )}
                      </div>
                      <div className="flex flex-col flex-grow p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>
                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                          <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-24 md:py-32 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge className="bg-accent/20 text-accent hover:bg-accent/30 transition-colors">Expertise</Badge>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Skills &amp; Tools</h2>
                <p className="max-w-[900px] text-muted-foreground text-xl">
                  My technical arsenal for building digital solutions.
                </p>
              </div>

              <div className="relative w-full overflow-hidden group mb-20">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
                <div className="flex animate-scroll group-hover:pause">
                  {[...skillsLogos, ...skillsLogos].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 w-[180px] h-[80px] mx-6 flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all cursor-default">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={140}
                        height={50}
                        className="object-contain max-h-full max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                {otherSkills.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.category}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.skills}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionSection>

          <MotionSection
            id="achievements"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-24 md:py-32 bg-black/20"
          >
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 transition-colors">Recognition</Badge>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Awards &amp; Honors</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                {allAchievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 transition-all"
                  >
                    <div className="flex-shrink-0 p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="font-semibold text-primary mb-2">{item.event}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionSection>

          <MotionSection
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-24 md:py-32 relative overflow-hidden"
          >
            <div className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-colors">Contact</Badge>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's Work Together</h2>
                <p className="max-w-[900px] text-muted-foreground text-xl">
                  Have a question, a project idea, or just want to connect? Send me a message!
                </p>
              </div>
              <div className="mx-auto max-w-2xl glass p-8 md:p-12 rounded-3xl border-white/10">
                <ContactForm />
              </div>
            </div>
          </MotionSection>

        </main>
        <footer className="w-full border-t border-white/10 bg-black text-muted-foreground">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-white">MrTG1B</span>
            </div>
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="https://github.com/MrTG1B" target="_blank" className="hover:text-white transition-colors"><Github size={20} /></Link>
              <Link href="https://www.linkedin.com/in/tirthankardasguptaprofile" target="_blank" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="https://x.com/TIRTHAN20755732" target="_blank" className="hover:text-white transition-colors"><XIcon className="h-5 w-5" /></Link>
            </div>
          </div>
        </footer>
    </div>
  );
}
