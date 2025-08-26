import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter, CheckCircle, Info, User, GraduationCap, Star, Trophy, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ContactForm } from "@/components/contact-form";

export const projects = [
  {
    slug: "wellmed",
    title: "WellMed",
    description: "A feature-rich medicine information & management Progressive Web App.",
    longDescription: "WellMed is a comprehensive Progressive Web App designed to provide users with detailed information about medicines, manage their prescriptions, and set reminders for their doses. It aims to be a one-stop solution for personal healthcare management, built with modern web technologies for a seamless experience on any device.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["PWA", "JavaScript", "Firebase", "Health"],
    aiHint: "medicine health",
    achievements: [
      "Successfully implemented real-time database synchronization with Firebase.",
      "Developed a user-friendly interface that received positive feedback for its ease of use.",
      "Integrated a powerful search feature for quick medicine lookup."
    ],
    links: {
      github: "https://github.com/MrT-G-1-B/WellMed",
      live: "https://wellmed-mrt-g-1-b.web.app/"
    }
  },
  {
    slug: "promptforge",
    title: "PromptForge",
    description: "A prompt generator tool for AI enthusiasts & content creators.",
    longDescription: "PromptForge is a creative tool designed to help AI enthusiasts, writers, and content creators generate high-quality, diverse prompts for various generative AI models. It uses advanced algorithms to craft prompts that can be used for generating text, images, and more, sparking creativity and streamlining the content creation process.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["AI", "Next.js", "Content Creation"],
    aiHint: "artificial intelligence",
    achievements: [
      "Built with a sophisticated prompt generation engine.",
      "Designed an intuitive UI that allows for easy customization of prompts.",
      "Used by a growing community of AI art and content creators."
    ],
    links: {
      github: "https://github.com/MrT-G-1-B/PromptForge",
      live: "https://prompt-forge-ui.web.app/"
    }
  },
  {
    slug: "affordable-3d-scanner",
    title: "Affordable 3D Scanner",
    description: "A low-cost 360° 3D scanner for monitoring pipe health and structural analysis.",
    longDescription: "This project focuses on creating a cost-effective 3D scanning solution using accessible hardware. The scanner is capable of capturing 360-degree models of objects, with a primary application in monitoring the structural integrity of pipes and other industrial components. It provides a valuable tool for preventative maintenance and analysis.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["3D Scanning", "Hardware", "IoT", "Python"],
    aiHint: "3d model scanner",
    achievements: [
      "Developed a working prototype for under $100.",
      "Achieved high-resolution scans suitable for structural analysis.",
      "Wrote custom software for processing and visualizing the 3D data."
    ],
    links: {}
  },
   {
    slug: "gemini-powered-bot",
    title: "Gemini-powered Bot",
    description: "An autonomous robot powered by Google's Gemini API for smart navigation and decision making.",
    longDescription: "This project showcases the integration of cutting-edge AI with robotics. The robot utilizes Google's Gemini API to process sensory information, understand its environment, and make intelligent decisions for autonomous navigation and task execution. It's a step towards more capable and intelligent autonomous systems.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["Robotics", "AI", "Gemini API", "Python"],
    aiHint: "robot technology",
    achievements: [
      "Successfully integrated the Gemini API for real-time decision making.",
      "Implemented advanced navigation algorithms for obstacle avoidance.",
      "Demonstrated the robot's ability to perform complex tasks autonomously."
    ],
    links: {}
  },
  {
    slug: "smart-street-light-fault-detection",
    title: "Smart Street Light Fault Detection System",
    description: "An IoT network with a dashboard for proactive maintenance.",
    longDescription: "This IoT-based system monitors a network of street lights in real-time. It automatically detects faults such as bulb failures or power issues and reports them to a central dashboard. This enables maintenance teams to be proactive, reducing downtime and improving city-wide safety and efficiency.",
    image: "https://picsum.photos/600/400?random=5",
    tags: ["IoT", "ESP32", "Firebase", "Dashboard"],
    aiHint: "smart city light",
    achievements: [
      "Designed a scalable IoT network capable of monitoring hundreds of lights.",
      "Developed a real-time dashboard for visualization and alerting.",
      "Presented the project at Rajabazar Science College, winning 1st Runner-up."
    ],
    links: {
      github: "https://github.com/MrT-G-1-B/Auralis"
    }
  },
  {
    slug: "handy",
    title: "Handy",
    description: "An affordable myoelectric prosthetic hand with a companion mobile app.",
    longDescription: "Handy is a project aimed at creating a low-cost, highly functional myoelectric prosthetic hand. It uses muscle sensors to control the hand's movements, providing a more intuitive experience for the user. A companion mobile app allows for calibration and customization of the prosthetic.",
    image: "https://picsum.photos/600/400?random=6",
    tags: ["Prosthetics", "3D Printing", "Android", "Arduino"],
    aiHint: "robotic hand",
    achievements: [
      "3D printed and assembled a fully functional prototype.",
      "Developed custom firmware for processing myoelectric signals.",
      "Created an Android app for controlling and configuring the hand."
    ],
    links: {
      github: "https://github.com/MrT-G-1-B/Handy"
    }
  },
  {
    slug: "agridrone",
    title: "AgriDrone",
    description: "A cost-efficient drone for precision pesticide spraying.",
    longDescription: "AgriDrone is an agricultural drone designed for precision pesticide spraying. It aims to reduce chemical waste and improve crop health by targeting specific areas. The drone is built with cost-effective components, making it accessible for small to medium-sized farms.",
    image: "https://picsum.photos/600/400?random=7",
    tags: ["Drone", "Agriculture", "Hardware", "IoT"],
    aiHint: "agriculture drone",
    achievements: [],
    links: {}
  },
  {
    slug: "nova",
    title: "N.O.V.A.",
    description: "A voice-activated personal AI assistant, similar to Jarvis.",
    longDescription: "N.O.V.A. (Neural Operating & Voice Assistant) is a personal AI assistant inspired by Jarvis from Iron Man. It can perform various tasks through voice commands, such as controlling smart home devices, providing information, and managing schedules. It integrates with multiple APIs to extend its capabilities.",
    image: "https://picsum.photos/600/400?random=8",
    tags: ["AI", "Python", "Voice Assistant"],
    aiHint: "ai assistant robot",
    achievements: [],
    links: {
      github: "https://github.com/MrT-G-1-B/N.O.V.A",
      live: "https://mr-t-g-1-b.github.io/N.O.V.A/"
    }
  }
];

const skills = [
  { name: "C / C++", level: 90 },
  { name: "Python", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Web (HTML, CSS, Node.js, Flask, Express)", level: 88 },
  { name: "Hardware (ESP32, Arduino, 3D Printing)", level: 92 },
  { name: "Mobile (Android Studio, XML)", level: 75 },
  { name: "Cloud & APIs (Firebase, GenAI, REST)", level: 80 },
  { name: "Tools (Git, GitHub, Figma, AutoCAD, Fusion 360)", level: 90 },
];

const achievements = [
    "2nd Position — Hackfest State & Regional Round (SAP & Techno International New Town, April 2025)",
    "1st Runner-up — Smart Street Light System at Rajabazar Science College (13th March 2025)",
    "2nd Runner-up at Jadavpur University (17th March 2025)"
];


export default function Home() {
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
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <Badge variant="outline" className="w-fit text-accent font-semibold border-accent">Tirthankar Dasgupta</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
                Hi there, I'm Tirthankar Dasgupta 👋
              </h1>
               <p className="text-2xl font-semibold text-muted-foreground">Aspiring Engineer | Problem Solver | Tech Enthusiast</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Aspiring Electronics and Communication Engineering student with a passion for IoT, Embedded Systems, Robotics, and Full‑Stack Development.
              </p>
               <div className="flex space-x-2">
                <Link href="mailto:tirthankardasgupta913913@gmail.com" className="text-muted-foreground hover:text-primary"><Mail /></Link>
                <Link href="https://www.linkedin.com/in/tirthankar-dasgupta-1b1a1b1b1/" target="_blank" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="https://github.com/MrT-G-1-B" target="_blank" className="text-muted-foreground hover:text-primary"><Github /></Link>
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="secondary" asChild>
                   <Link href="#projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://picsum.photos/id/237/500/500"
                width={500}
                height={500}
                alt="Tirthankar Dasgupta"
                className="rounded-full object-cover aspect-square shadow-lg border-4 border-primary/50"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary mb-6 flex items-center"><User className="mr-3"/> About Me</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>🎓 Currently pursuing Electronics and Communication Engineering at Techno International New Town.</p>
                      <p>💡 Passionate about IoT, Embedded Systems, Robotics, and Full Stack Development.</p>
                      <p>🚀 Constantly learning and building innovative projects that bridge hardware and software.</p>
                      <p>🌐 Actively exploring open-source contributions and collaborative projects.</p>
                      <p>📱 I also develop Android apps using XML and Android Studio.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary mb-6 flex items-center"><GraduationCap className="mr-3"/> Education</h2>
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

        <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center justify-center"><Briefcase className="mr-3"/> My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project) => (
                <Card key={project.slug} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
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
                    <CardFooter className="bg-secondary/20 p-4 mt-auto">
                     <Button asChild variant="outline" className="w-full">
                        <Link href={`/projects/${project.slug}`}>
                           <Info className="mr-2 h-4 w-4" />
                           More Info
                        </Link>
                     </Button>
                  </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
              <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 h-full">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center"><Star className="mr-3"/> My Skillset</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I continuously strive to learn and master new technologies.
                  </p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-accent font-semibold">{skill.level}%</p>
                      </div>
                      <Progress value={skill.level} className="h-3 [&>div]:bg-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="achievements" className="w-full py-16 md:py-24 lg:py-32 bg-card">
              <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 h-full">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center"><Trophy className="mr-3"/> Achievements</h2>
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
        </div>


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
      </main>
      
      <footer className="w-full bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" className="hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="https://github.com/MrT-G-1-B" target="_blank" className="hover:text-primary"><Github className="h-6 w-6" /></Link>
            <Link href="https://www.linkedin.com/in/tirthankar-dasgupta-1b1a1b1b1/" target="_blank" className="hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
