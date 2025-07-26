import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for featured artworks
const featuredArtworks = [
  {
    id: 1,
    title: "Abstract Horizon",
    artist: "Luna Martinez",
    price: 89,
    originalPrice: 120,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    category: "Abstract",
    featured: true
  },
  {
    id: 2,
    title: "Urban Dreams",
    artist: "Alex Chen",
    price: 145,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    category: "Photography",
    featured: true
  },
  {
    id: 3,
    title: "Botanical Serenity",
    artist: "Maya Rodriguez",
    price: 67,
    originalPrice: 85,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 156,
    category: "Nature",
    featured: true
  },
  {
    id: 4,
    title: "Midnight Reflection",
    artist: "James Park",
    price: 199,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 67,
    category: "Landscape",
    featured: true
  }
];

const categories = [
  { name: "Abstract", count: 234, image: "/placeholder.svg" },
  { name: "Photography", count: 456, image: "/placeholder.svg" },
  { name: "Nature", count: 189, image: "/placeholder.svg" },
  { name: "Portraits", count: 167, image: "/placeholder.svg" },
  { name: "Landscape", count: 298, image: "/placeholder.svg" },
  { name: "Digital Art", count: 324, image: "/placeholder.svg" }
];

export default function Index() {
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
              <Link to="/categories" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Categories
              </Link>
              <Link to="/artists" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Artists
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
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-xs flex items-center justify-center text-accent-foreground">
                  2
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-24 sm:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              ✨ New Collection Available
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Discover
              <span className="text-accent"> Extraordinary </span>
              Art & Prints
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transform your space with curated artwork from talented artists worldwide. From abstract masterpieces to stunning photography.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Artists
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
              <p className="text-muted-foreground mt-2">Discover art that speaks to you</p>
            </div>
            <Button variant="outline">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} prints</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Artworks</h2>
              <p className="text-muted-foreground mt-2">Hand-picked pieces from our curators</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <Card key={artwork.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {artwork.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm truncate">{artwork.title}</h3>
                        <p className="text-xs text-muted-foreground">{artwork.artist}</p>
                      </div>
                      <Badge variant="outline" className="text-xs ml-2">
                        {artwork.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="text-xs ml-1">{artwork.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({artwork.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${artwork.price}</span>
                        {artwork.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${artwork.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Stay Inspired</h2>
            <p className="mt-4 text-muted-foreground">
              Get the latest artworks, artist spotlights, and exclusive offers delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">A</span>
                </div>
                <span className="font-bold text-xl">Artistry</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Discover and collect extraordinary art from talented artists around the world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/gallery" className="hover:text-foreground">All Artworks</Link></li>
                <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
                <li><Link to="/artists" className="hover:text-foreground">Artists</Link></li>
                <li><Link to="/new-arrivals" className="hover:text-foreground">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
                <li><Link to="/shipping" className="hover:text-foreground">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-foreground">Returns</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">Pinterest</a></li>
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Artistry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
