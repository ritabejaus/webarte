import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  A
                </span>
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">
                Artistry
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/gallery"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Gallery
              </Link>
              <Link
                to="/categories"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Categories
              </Link>
              <Link
                to="/artists"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Artists
              </Link>
              <Link
                to="/about"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12">
            <CardContent className="space-y-6">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Construction className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-muted-foreground text-lg mb-6">
                  {description}
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  This page is coming soon! Continue exploring or return to see
                  more amazing art.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/gallery">Explore Gallery</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
