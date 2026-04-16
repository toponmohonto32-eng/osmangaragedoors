'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  Shield, 
  Zap, 
  Award,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowRight,
  Settings,
  Home as HomeIcon,
  Truck,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl">
              <Image 
                src="/logo.png" 
                alt="Osman Garage Doors" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">Osman</span>
              <span className="text-xl font-bold text-primary ml-1">Garage Doors</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:5623356674" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(562) 335-6674</span>
            </a>
            <Button className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:5623356674" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="w-5 h-5" />
                (562) 335-6674
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full mt-2">
                Free Estimate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-garage.png"
          alt="Modern Garage Door"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Long Beach&apos;s Trusted Garage Door Experts</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Premium Garage Door
            <span className="gradient-text block">Repair & Installation</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Professional garage door services for Long Beach and surrounding areas. 
            Fast response, expert technicians, and guaranteed satisfaction since day one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:5623356674">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2 hover:bg-primary/5">
                <Phone className="mr-2 w-5 h-5" />
                (562) 335-6674
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Garage Door Repair',
      description: 'Expert repair services for all garage door issues including broken springs, cables, rollers, and more.',
      features: ['Spring Replacement', 'Cable Repair', 'Roller Replacement', 'Track Alignment']
    },
    {
      icon: HomeIcon,
      title: 'New Installation',
      description: 'Professional installation of new garage doors with a wide selection of styles and materials.',
      features: ['Custom Designs', 'Modern Styles', 'Energy Efficient', 'Smart Home Ready']
    },
    {
      icon: Settings,
      title: 'Opener Services',
      description: 'Installation, repair, and programming of garage door openers from all major brands.',
      features: ['LiftMaster', 'Chamberlain', 'Genie', 'Remote Programming']
    },
    {
      icon: Truck,
      title: 'Emergency Service',
      description: '24/7 emergency garage door services for urgent repairs when you need them most.',
      features: ['24/7 Available', 'Fast Response', 'Same-Day Service', 'Weekend Service']
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Garage Door Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From quick repairs to complete installations, we provide expert services 
            tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-card overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image Side */}
                  <div className="w-full sm:w-1/3 bg-primary/5 p-6 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  {/* Content Side */}
                  <div className="w-full sm:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// About/Why Choose Us Section
function AboutSection() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Same-day service available for most repairs. We arrive on time, every time.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All our work comes with a satisfaction guarantee and warranty on parts and labor.'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Fully licensed, insured, and trained professionals with years of experience.'
    },
    {
      icon: CheckCircle2,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get upfront quotes before any work begins.'
    }
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/service-repair.png"
                alt="Professional Garage Door Service"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Years Experience</p>
                  <p className="text-muted-foreground text-sm">Serving Long Beach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Long Beach&apos;s Most Trusted Garage Door Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Osman Garage Doors, we combine years of expertise with a commitment to 
              excellence. Our team delivers top-quality garage door solutions with 
              professionalism and care that our customers have come to trust.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8 btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-8 group">
              Learn More About Us
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Long Beach',
      rating: 5,
      text: 'Osman Garage Doors saved the day! My garage door spring broke on a Sunday morning, and they had someone out within 2 hours. Professional, efficient, and fairly priced. Highly recommend!',
      service: 'Emergency Spring Repair'
    },
    {
      name: 'Michael R.',
      location: 'Signal Hill',
      rating: 5,
      text: 'Excellent service from start to finish. They installed a new garage door for us and it looks amazing. The technician was knowledgeable and took time to explain everything.',
      service: 'New Door Installation'
    },
    {
      name: 'Jennifer L.',
      location: 'Lakewood',
      rating: 5,
      text: 'Best garage door company in the area! Fast response, fair pricing, and quality work. They fixed my garage door opener quickly and even programmed my car remote for free.',
      service: 'Opener Repair'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Side */}
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
              Contact Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get Your Free Estimate Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to upgrade or repair your garage door? Contact us for a free, 
              no-obligation estimate. We&apos;re here to help!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a href="tel:5623356674" className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Call Us</p>
                  <p className="text-primary text-xl font-bold">(562) 335-6674</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Service Area</p>
                  <p className="text-muted-foreground">Long Beach, CA & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Business Hours</p>
                  <p className="text-muted-foreground">Mon - Sat: 7AM - 7PM</p>
                  <p className="text-sm text-primary font-medium">Emergency Service: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      placeholder="Your phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    placeholder="Your email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Needed</label>
                  <select
                    className="w-full h-12 rounded-xl border border-input bg-background px-4 text-foreground"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="repair">Garage Door Repair</option>
                    <option value="installation">New Installation</option>
                    <option value="opener">Opener Service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your garage door needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full btn-shine bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white/10">
                <Image 
                  src="/logo.png" 
                  alt="Osman Garage Doors" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Osman</span>
                <span className="text-xl font-bold text-primary ml-1">Garage Doors</span>
              </div>
            </div>
            <p className="text-background/70 mb-6">
              Professional garage door services for Long Beach and surrounding areas. 
              Quality work, fair prices, guaranteed satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61567384634322" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.yelp.com/biz/osman-garage-doors-long-beach" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Garage Door Repair</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">New Installation</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Opener Services</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Emergency Service</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Maintenance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-background/70 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:5623356674" className="text-background/70 hover:text-primary transition-colors">(562) 335-6674</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">Long Beach, CA &amp; Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">Mon - Sat: 7AM - 7PM<br/>Emergency: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Osman Garage Doors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function OsmanGarageDoors() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
