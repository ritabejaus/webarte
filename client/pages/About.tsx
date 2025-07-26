import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Heart,
  Search,
  Mail,
  MapPin,
  Palette,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
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
                to="/about"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                About Me
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search artworks..."
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[300px]"
                />
              </div>
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-xs flex items-center justify-center text-accent-foreground">
                    2
                  </span>
                  <span className="sr-only">Cart</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">About Me</span>
        </div>

        {/* Hero Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Hello, I'm an Artist
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to my creative world. I'm passionate about creating art
                that connects with people and transforms spaces. My work spans
                multiple styles and mediums, from abstract compositions to
                detailed studies of nature and urban life.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each piece I create is born from a moment of inspiration,
                whether it's the play of light on a city street, the organic
                patterns in nature, or the pure expression of color and form. I
                believe art should evoke emotion and spark conversation.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/gallery">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Artist in studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-muted-foreground">
                Artworks Created
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">
                Happy Collectors
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">15</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">8+</div>
              <div className="text-sm text-muted-foreground">
                Years Creating
              </div>
            </div>
          </div>
        </section>

        {/* My Process */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Creative Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every piece begins with observation and inspiration. Here's how I
              transform ideas into artwork.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-semibold mb-2">Inspiration</h3>
                <p className="text-sm text-muted-foreground">
                  Finding beauty in everyday moments, nature, and human
                  experiences that spark creative energy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-semibold mb-2">Creation</h3>
                <p className="text-sm text-muted-foreground">
                  Translating emotions and ideas into visual form through
                  various mediums and techniques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-semibold mb-2">Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing my work with collectors who appreciate the story and
                  emotion behind each piece.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Art Philosophy */}
        <section className="py-16 bg-muted/30 rounded-lg">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">My Art Philosophy</h2>
            <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
              "Art is not what you see, but what you make others see. My goal is
              to create pieces that resonate deeply, evoke emotion, and become a
              meaningful part of someone's life and space."
            </blockquote>
            <p className="text-muted-foreground">
              I believe that art has the power to transform not just spaces, but
              perspectives. Each piece I create is an invitation to see the
              world through a different lens.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in commissioning a piece, collaborating, or just want
              to chat about art? I'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-accent" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{" "}
                    artist@example.com
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> +1 (555)
                    123-4567
                  </p>
                  <p className="text-sm flex items-start">
                    <MapPin className="mr-2 h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">Studio:</span> Barcelona,
                      Spain
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Commission Work</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I accept custom commissions for original artwork. Whether you
                  have a specific vision or want me to create something unique
                  for your space, let's discuss your ideas.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  Inquire About Commissions
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
