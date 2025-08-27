import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Briefcase, Code, Info, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { projects } from "@/lib/projects";

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">MrTG1B</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="flex-1">
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">All Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Browse through all of my projects. Each one represents a unique challenge and learning opportunity.
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
                ))}
              </div>
            </div>
          </section>
      </main>

      <footer className="w-full bg-secondary text-secondary-foreground mt-auto">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-8 text-center">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
