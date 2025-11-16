
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Code, Github, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">MrTG1B</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {project.links?.live ? (
                <div className="relative w-full aspect-video bg-secondary border rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 bg-muted p-2 flex items-center gap-1.5 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="w-full h-full pt-[34px] flex items-center justify-center">
                    <div className="w-full h-full relative">
                        <iframe
                            src={project.links.live}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ transform: 'scale(0.5)', transformOrigin: 'center center' }}
                            sandbox="allow-scripts allow-same-origin"
                            loading="lazy"
                            title={project.title}
                        />
                    </div>
                  </div>
                </div>
              ) : (
                project.image && <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="rounded-lg object-cover shadow-2xl w-full"
                  data-ai-hint={project.aiHint}
                />
              )}
               <div className="mt-6 flex flex-col sm:flex-row gap-4">
                {project.links?.github && (
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.links?.live && (
                  <Button asChild variant="secondary" className="w-full smw-auto">
                    <Link href={project.links.live} target="_blank">
                      <ExternalLink className="mr-2" /> Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-primary">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-8">{project.longDescription}</p>
            </div>
          </div>
        </section>

        {project.achievements && project.achievements.length > 0 && (
          <section id="achievements" className="w-full py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Key Achievements</h2>
                <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                  Key milestones and successes from the {project.title} project.
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="w-full bg-secondary text-secondary-foreground mt-16">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-8 text-center">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Tirthankar Dasgupta. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
