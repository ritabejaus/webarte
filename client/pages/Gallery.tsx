import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star, ShoppingCart, Heart, Search, Filter, Grid3X3, List, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample data for artworks
const artworks = [
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
    style: "Modern",
    size: "Medium"
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
    style: "Contemporary",
    size: "Large"
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
    style: "Minimalist",
    size: "Small"
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
    style: "Realistic",
    size: "Large"
  },
  {
    id: 5,
    title: "Digital Waves",
    artist: "Sofia Kim",
    price: 78,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 203,
    category: "Digital Art",
    style: "Modern",
    size: "Medium"
  },
  {
    id: 6,
    title: "Portrait in Blue",
    artist: "Marcus Johnson",
    price: 156,
    originalPrice: 180,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 91,
    category: "Portraits",
    style: "Classical",
    size: "Medium"
  }
];

const categories = ["All", "Abstract", "Photography", "Nature", "Landscape", "Digital Art", "Portraits"];
const styles = ["All", "Modern", "Contemporary", "Minimalist", "Realistic", "Classical"];
const sizes = ["All", "Small", "Medium", "Large"];

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredArtworks = artworks.filter(artwork => {
    return (
      (selectedCategory === "All" || artwork.category === selectedCategory) &&
      (selectedStyle === "All" || artwork.style === selectedStyle) &&
      (selectedSize === "All" || artwork.size === selectedSize) &&
      artwork.price >= priceRange[0] && artwork.price <= priceRange[1]
    );
  });

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
              <Link to="/gallery" className="transition-colors hover:text-foreground/80 text-foreground">
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
          <span className="text-foreground">Gallery</span>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-80 space-y-6 hidden lg:block">
            <div>
              <h3 className="font-semibold mb-4">Filters</h3>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div>
              <h4 className="font-medium mb-3">Style</h4>
              <div className="space-y-2">
                {styles.map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox
                      id={style}
                      checked={selectedStyle === style}
                      onCheckedChange={() => setSelectedStyle(style)}
                    />
                    <label htmlFor={style} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {style}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h4 className="font-medium mb-3">Size</h4>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={selectedSize === size}
                      onCheckedChange={() => setSelectedSize(size)}
                    />
                    <label htmlFor={size} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={300}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header with sort and view options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Gallery</h1>
                <span className="text-muted-foreground">
                  {filteredArtworks.length} artworks
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-6">
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Artworks Grid/List */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-6"
            }>
              {filteredArtworks.map((artwork) => (
              <Link key={artwork.id} to={`/product/${artwork.id}`}>
                <Card className={`group cursor-pointer hover:shadow-xl transition-all duration-300 ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}>
                  <CardContent className="p-0">
                    <div className={`relative ${
                      viewMode === "list" ? "w-48 h-48" : "aspect-[4/5]"
                    } overflow-hidden ${viewMode === "list" ? "rounded-l-lg" : "rounded-t-lg"}`}>
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
                    <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
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
              </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More Artworks
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
