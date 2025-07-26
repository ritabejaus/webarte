import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Search, ArrowRight, Palette, Camera, Leaf, Mountain, Monitor, User } from "lucide-react";
import { Link } from "react-router-dom";

// Categories data with detailed information
const categories = [
  {
    id: "abstract",
    name: "Abstract",
    description: "Non-representational art that uses color, form, and line to create compositions independent of visual references.",
    icon: Palette,
    artworkCount: 234,
    featured: true,
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
    examples: [
      { id: 1, title: "Abstract Horizon", image: "/placeholder.svg", price: 89 },
      { id: 2, title: "Color Symphony", image: "/placeholder.svg", price: 145 },
      { id: 3, title: "Geometric Dreams", image: "/placeholder.svg", price: 78 }
    ]
  },
  {
    id: "photography",
    name: "Photography",
    description: "Captured moments and artistic vision through the lens, from landscapes to street photography.",
    icon: Camera,
    artworkCount: 456,
    featured: true,
    image: "/placeholder.svg",
    color: "from-blue-500 to-cyan-500",
    examples: [
      { id: 4, title: "Urban Dreams", artist: "Alex Chen", image: "/placeholder.svg", price: 145 },
      { id: 5, title: "Street Life", artist: "Maria Lopez", image: "/placeholder.svg", price: 92 },
      { id: 6, title: "City Lights", artist: "David Kim", image: "/placeholder.svg", price: 158 }
    ]
  },
  {
    id: "nature",
    name: "Nature",
    description: "Beautiful representations of the natural world, including botanical art and wildlife illustrations.",
    icon: Leaf,
    artworkCount: 189,
    featured: false,
    image: "/placeholder.svg",
    color: "from-green-500 to-emerald-500",
    examples: [
      { id: 7, title: "Botanical Serenity", artist: "Maya Rodriguez", image: "/placeholder.svg", price: 67 },
      { id: 8, title: "Forest Path", artist: "Emma Wilson", image: "/placeholder.svg", price: 89 },
      { id: 9, title: "Wildflower Field", artist: "Jake Thompson", image: "/placeholder.svg", price: 76 }
    ]
  },
  {
    id: "landscape",
    name: "Landscape",
    description: "Stunning vistas and scenic views that capture the beauty of our natural environment.",
    icon: Mountain,
    artworkCount: 298,
    featured: true,
    image: "/placeholder.svg",
    color: "from-orange-500 to-red-500",
    examples: [
      { id: 10, title: "Midnight Reflection", artist: "James Park", image: "/placeholder.svg", price: 199 },
      { id: 11, title: "Mountain Vista", artist: "Sarah Johnson", image: "/placeholder.svg", price: 134 },
      { id: 12, title: "Ocean Sunset", artist: "Carlos Rivera", image: "/placeholder.svg", price: 167 }
    ]
  },
  {
    id: "digital-art",
    name: "Digital Art",
    description: "Contemporary digital creations and computer-generated artwork pushing creative boundaries.",
    icon: Monitor,
    artworkCount: 324,
    featured: false,
    image: "/placeholder.svg",
    color: "from-violet-500 to-purple-500",
    examples: [
      { id: 13, title: "Digital Waves", artist: "Sofia Kim", image: "/placeholder.svg", price: 78 },
      { id: 14, title: "Cyber Dreams", artist: "Alex Park", image: "/placeholder.svg", price: 95 },
      { id: 15, title: "Neon Future", artist: "Lisa Chang", image: "/placeholder.svg", price: 112 }
    ]
  },
  {
    id: "portraits",
    name: "Portraits",
    description: "Artistic representations of people, capturing personality, emotion, and human expression.",
    icon: User,
    artworkCount: 167,
    featured: false,
    image: "/placeholder.svg",
    color: "from-rose-500 to-pink-500",
    examples: [
      { id: 16, title: "Portrait in Blue", artist: "Marcus Johnson", image: "/placeholder.svg", price: 156 },
      { id: 17, title: "Modern Face", artist: "Nina Garcia", image: "/placeholder.svg", price: 123 },
      { id: 18, title: "Expression Study", artist: "Tom Anderson", image: "/placeholder.svg", price: 89 }
    ]
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">Artistry</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/gallery" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Gallery
              </Link>
              <Link to="/categories" className="transition-colors hover:text-foreground/80 text-foreground">
                Categories
              </Link>
              <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About Me
              </Link>
              <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
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
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">Categories</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">My Art Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my artwork organized by style and theme.
            Each category represents a different aspect of my creative journey and artistic vision.
          </p>
        </div>

        {/* Featured Categories */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Collections</h2>
            <Button variant="outline" asChild>
              <Link to="/gallery">
                Browse All Artworks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat.featured).map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Category Header */}
                    <div className={`relative h-32 bg-gradient-to-br ${category.color} p-6 text-white`}>
                      <div className="flex items-center justify-between h-full">
                        <div>
                          <Icon className="h-8 w-8 mb-2" />
                          <h3 className="text-xl font-bold">{category.name}</h3>
                          <p className="text-white/80 text-sm">{category.artworkCount} artworks</p>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Category Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Example Artworks */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {category.examples.map((artwork) => (
                          <div key={artwork.id} className="aspect-square bg-muted rounded overflow-hidden">
                            <img 
                              src={artwork.image} 
                              alt={artwork.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link to={`/gallery?category=${category.id}`}>
                          Explore {category.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* All Categories Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <Link to={`/gallery?category=${category.id}`} className="block">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white flex-shrink-0`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold group-hover:text-accent transition-colors">
                              {category.name}
                            </h3>
                            {category.featured && (
                              <Badge variant="outline" className="text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {category.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {category.artworkCount} artworks
                            </span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            My collection is constantly evolving. Browse my complete gallery or get in touch
            for custom commissions and personalized artwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/gallery">
                Browse All Artworks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Contact Me
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
