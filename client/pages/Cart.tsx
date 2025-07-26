import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, Search, Minus, Plus, X, Truck, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartItemsCount } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  );
  const shipping = subtotal > 25 ? 0 : 2.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

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
                    {cartItems.length}
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
          <span className="text-foreground">Shopping Cart</span>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any artwork to your cart yet.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/gallery">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <span className="text-muted-foreground">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
              </div>

              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold truncate">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">Original Artwork</p>
                            <div className="mt-1 space-y-1">
                              <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                              <p className="text-xs text-muted-foreground">Frame: {item.frame}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">${item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" asChild>
                  <Link to="/gallery">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Savings</span>
                        <span>-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-1">
                        Shipping
                        {shipping === 0 && <Badge variant="outline" className="text-xs">Free</Badge>}
                      </span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {subtotal < 25 && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Truck className="h-4 w-4 text-accent" />
                        <span>Add ${(25 - subtotal).toFixed(2)} more for free shipping!</span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">Promo Code</h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Why shop with us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium">Free Shipping</p>
                        <p className="text-xs text-muted-foreground">On orders over $25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium">Easy Returns</p>
                        <p className="text-xs text-muted-foreground">30-day return policy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium">Curated Selection</p>
                        <p className="text-xs text-muted-foreground">Hand-picked by experts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
