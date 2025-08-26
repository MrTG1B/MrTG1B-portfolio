import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ContactForm } from "@/components/contact-form";

export const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product galleries, a shopping cart, and a secure checkout process, built with Next.js and Stripe.",
    longDescription: "Developed a comprehensive e-commerce platform from the ground up, providing a seamless shopping experience. The platform includes features like dynamic product catalogs, a persistent shopping cart, user authentication, and a secure payment gateway integrated with Stripe. The front-end is built with Next.js for server-side rendering and optimal performance, while the backend is powered by Node.js and Firebase for data management.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS", "Firebase"],
    aiHint: "online shopping",
    achievements: [
      "Reduced page load time by 40% through server-side rendering and image optimization.",
      "Implemented a secure and reliable checkout process using Stripe Elements.",
      "Designed a fully responsive UI that works flawlessly on all devices.",
      "Achieved a 99.9% uptime with a scalable cloud architecture."
    ]
  },
  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring a real-time Kanban board.",
    longDescription: "This project management tool is designed to enhance team productivity and streamline workflow. It features a real-time, drag-and-drop Kanban board, task assignments, deadline tracking, and threaded conversations. Built with React and Firebase's Firestore, it ensures that all data is synchronized across clients in real-time. GraphQL was used to create an efficient and flexible API for data fetching.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["React", "Firebase", "Node.js", "GraphQL", "Real-time"],
    aiHint: "team collaboration",
    achievements: [
      "Enabled real-time collaboration for distributed teams, improving project completion rates by 25%.",
      "Developed an intuitive and user-friendly interface that received highly positive feedback.",
      "Built a flexible GraphQL API to efficiently handle complex data queries.",
      "Ensured data consistency and real-time updates using Firestore listeners."
    ]
  },
  {
    slug: "personal-blog",
    title: "Personal Blog",
    description: "A sleek, modern blog with a custom CMS for easy content management and a focus on readability and performance.",
    longDescription: "Created a high-performance personal blog using Gatsby for static site generation, ensuring fast load times and an excellent user experience. The blog is integrated with Contentful, a headless CMS, allowing for easy content creation and management without needing to touch the code. The design is minimalistic, focusing on readability, with styling implemented using Styled Components.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Gatsby", "Contentful", "Styled Components", "Jamstack"],
    aiHint: "writing reading",
    achievements: [
      "Achieved perfect Lighthouse scores for performance, accessibility, and SEO.",
      "Designed a custom, headless CMS workflow for seamless content updates.",
      "Built with a Jamstack architecture for enhanced security and scalability.",
      "Crafted a unique and personal brand identity through custom design and typography."
    ]
  },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "Firebase / GCP", level: 88 },
  { name: "Tailwind CSS", level: 98 },
  { name: "UI/UX Design", level: 80 },
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
        <section id="about" className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <Badge variant="outline" className="w-fit text-accent font-semibold border-accent">Tirthankar Dasgupta</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
                Full-Stack Developer & Innovator
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm a passionate web developer with a knack for building beautiful, functional, and user-centric applications. With a background in computer science and years of hands-on experience, I turn complex problems into elegant digital solutions.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch <Mail className="ml-2 h-4 w-4" /></Link>
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

        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project) => (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <Card className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <Image src={project.image} alt={project.title} width={600} height={400} className="w-full object-cover" data-ai-hint={project.aiHint} />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">My Skillset</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I continuously strive to learn and master new technologies. Here's a snapshot of my current capabilities.
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

        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
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
            <Link href="#" className="hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-primary"><Github className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
