import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Search, ArrowLeft, Share2, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// Sample product data - in a real app this would come from an API
const productData = {
  id: 1,
  title: "Abstract Horizon",
  price: 89,
  originalPrice: 120,
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  rating: 4.8,
  reviews: 124,
  category: "Abstract",
  style: "Modern",
  description: "A stunning abstract piece that captures the essence of a horizon where sky meets earth. This artwork uses bold strokes and vibrant colors to create a sense of movement and depth.",
  details: {
    medium: "Digital Print",
    dimensions: "24\" x 18\"",
    weight: "2 lbs",
    frame: "Not included",
    style: "Contemporary Abstract",
    orientation: "Landscape"
  },
  artist_bio: "This piece is part of my ongoing exploration of abstract compositions that examine the relationship between color and emotion. Created in my Barcelona studio.",
  shipping: "Free shipping on orders over $75",
  returns: "30-day return policy",
  inStock: true,
  sizes: ["Small (12\" x 16\")", "Medium (18\" x 24\")", "Large (24\" x 32\")"],
  frames: ["No Frame", "Black Frame (+$25)", "White Frame (+$25)", "Natural Wood (+$35)"]
};

const relatedProducts = [
  {
    id: 2,
    title: "Urban Dreams",
    price: 145,
    image: "/placeholder.svg",
    rating: 4.9
  },
  {
    id: 3,
    title: "Botanical Serenity",
    price: 67,
    image: "/placeholder.svg",
    rating: 4.7
  },
  {
    id: 4,
    title: "Midnight Reflection",
    price: 199,
    image: "/placeholder.svg",
    rating: 4.9
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [quantity, setQuantity] = useState(1);

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
          <Link to="/gallery" className="hover:text-foreground">Gallery</Link>
          <span>/</span>
          <span className="text-foreground">{productData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg border">
              <img
                src={productData.images[selectedImage]}
                alt={productData.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-accent" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{productData.category}</Badge>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <h1 className="text-3xl font-bold mb-2">{productData.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">Original Artwork</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(productData.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">{productData.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({productData.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">${productData.price}</span>
                {productData.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${productData.originalPrice}
                    </span>
                    <Badge className="bg-accent text-accent-foreground">
                      Save ${productData.originalPrice - productData.price}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.sizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Frame</label>
                <Select value={selectedFrame} onValueChange={setSelectedFrame}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frame option" />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.frames.map((frame) => (
                      <SelectItem key={frame} value={frame}>{frame}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - ${productData.price * quantity}
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders $75+</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day policy</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-accent" />
                <p className="text-xs font-medium">Secure</p>
                <p className="text-xs text-muted-foreground">Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="artist">About This Piece</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {productData.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(productData.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50">
                        <span className="font-medium capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="artist" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {productData.artist_bio}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Original Artwork</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">${product.price}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
