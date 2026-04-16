'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  MessageCircle,
  ChevronDown,
  Play,
  Quote,
  Users,
  Target,
  Lightbulb,
  Heart,
  ThumbsUp,
  Clock4,
  DollarSign,
  Calendar,
  Hammer,
  DoorOpen,
  Cable,
  Spring,
  RollerCoaster,
  Gauge,
  Lock,
  Eye,
  Image as ImageIcon,
  Grid,
  ChevronLeft,
  ExternalLink,
  Facebook,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

// Types
interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  price?: string;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  image?: string;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Services Data
const services: Service[] = [
  {
    id: 'garage-door-repair',
    icon: Wrench,
    title: 'Residential Garage Door Repair',
    shortDescription: 'Fast, reliable repairs for your home garage door. Springs, cables, rollers, and more fixed the same day.',
    fullDescription: `Your home's garage door is essential for your family's security and convenience. When it breaks, you need it fixed fast. Our residential repair specialists understand the urgency and arrive prepared to fix most problems in a single visit.

We repair all residential garage door brands and models common in Orange County and Long Beach homes. From broken torsion springs to worn rollers, misaligned tracks to damaged panels, our technicians have the parts and expertise to get your garage door working safely again. We never try to sell you a new door when a repair will do the job.`,
    features: ['Spring Replacement', 'Cable Repair', 'Roller Replacement', 'Track Alignment', 'Panel Replacement', 'Hinge Repair'],
    benefits: ['Same-day service available', 'All residential brands', 'Upfront pricing', '90-day labor warranty', 'Emergency 24/7 service'],
    image: '/service-repair-new.png',
    price: 'Starting at $89'
  },
  {
    id: 'new-installation',
    icon: HomeIcon,
    title: 'New Garage Door Installation',
    shortDescription: 'Beautiful new garage doors that enhance your home\'s curb appeal and value.',
    fullDescription: `A new garage door is one of the best investments you can make for your home. It dramatically improves curb appeal, increases home value, and provides better security and energy efficiency. We offer a wide selection of residential garage doors perfect for Southern California homes.

From classic raised panel steel doors to charming carriage house styles, modern aluminum with glass panels to traditional wood-look designs – we have options to match every home style. Our expert installers ensure perfect fit and operation, backed by comprehensive warranties.`,
    features: ['Raised Panel Doors', 'Carriage House Style', 'Modern Aluminum', 'Insulated Steel', 'Faux Wood Grain', 'Custom Colors'],
    benefits: ['Free in-home consultation', 'Boost home value', 'Energy efficient options', '5-year parts warranty', 'Professional removal & install'],
    image: '/service-install-new.png',
    price: 'Starting at $599'
  },
  {
    id: 'opener-services',
    icon: Settings,
    title: 'Garage Door Opener Services',
    shortDescription: 'Installation, repair, and programming of garage door openers from all major brands.',
    fullDescription: `A reliable garage door opener is essential for convenience and security. We service and install all major opener brands including LiftMaster, Chamberlain, Genie, and Craftsman. Whether you need a simple repair, a new installation, or want to upgrade to a smart opener, our technicians have the training and experience to do the job right.

Modern garage door openers offer incredible features like smartphone control, battery backup, and ultra-quiet operation. We'll help you choose the right opener for your needs and budget, then install it properly to ensure years of trouble-free operation.`,
    features: ['LiftMaster', 'Chamberlain', 'Genie', 'Craftsman', 'Smart Home Integration', 'Remote Programming'],
    benefits: ['Wi-Fi enabled options', 'Ultra-quiet motors', 'Battery backup available', 'Smartphone control', 'Safety sensor alignment'],
    image: '/service-repair-new.png',
    price: 'Starting at $199'
  },
  {
    id: 'spring-replacement',
    icon: Zap,
    title: 'Spring Replacement',
    shortDescription: 'High-quality torsion and extension spring replacement with long-lasting high-cycle options.',
    fullDescription: `Broken garage door springs are the #1 reason homeowners call us. A broken spring makes your garage door impossible to lift safely and can damage your opener if you try. Our spring replacement service uses premium high-cycle springs designed for the daily use typical of busy families.

We replace both torsion springs (above the door) and extension springs (along the sides). Our technicians always replace springs in pairs to ensure balanced, smooth operation. Every spring replacement includes a full safety inspection of your entire garage door system.`,
    features: ['Torsion Springs', 'Extension Springs', 'High-Cycle Springs (25,000+ cycles)', 'Galvanized Rust-Resistant', 'Both Springs Replaced', 'Safety Inspection'],
    benefits: ['Longer-lasting springs', 'Same-day replacement', '2-year warranty', 'Full safety check', 'Smoother, quieter operation'],
    image: '/service-repair-new.png',
    price: 'Starting at $149'
  },
  {
    id: 'emergency-service',
    icon: Truck,
    title: '24/7 Emergency Service',
    shortDescription: 'Round-the-clock emergency garage door services when you need them most.',
    fullDescription: `Garage door emergencies don't wait for business hours. That's why Osman Garage Doors offers true 24/7 emergency service throughout Long Beach and surrounding communities. Whether your door is stuck open, won't close, or has come off its tracks, our emergency response team is ready to help.

Our emergency technicians are on call around the clock, including nights, weekends, and holidays. We prioritize emergency calls and typically arrive within 60 minutes. We'll assess the situation, provide emergency repairs to secure your home, and discuss any follow-up work needed.`,
    features: ['24/7 Available', 'Fast Response', 'Same-Day Service', 'Weekend Service', 'Holiday Service', 'Security Solutions'],
    benefits: ['60-minute response time', 'No extra charge for nights', 'Full diagnostic included', 'Temporary solutions available', 'Follow-up scheduling'],
    image: '/service-repair-new.png',
    price: 'Call for pricing'
  },
  {
    id: 'maintenance',
    icon: Shield,
    title: 'Preventive Maintenance',
    shortDescription: 'Regular maintenance to extend the life of your garage door and prevent costly repairs.',
    fullDescription: `Preventive maintenance is the key to avoiding unexpected garage door failures and extending the life of your system. Our comprehensive maintenance service includes lubrication of all moving parts, hardware tightening, spring tension adjustment, safety sensor testing, and a thorough inspection of all components.

We recommend annual maintenance for most residential garage doors, or more frequently for doors that see heavy daily use. Our maintenance plans can save you money by catching small issues before they become major problems.`,
    features: ['Lubrication', 'Hardware Check', 'Spring Adjustment', 'Safety Testing', 'Balance Check', 'Opener Inspection'],
    benefits: ['Prevents breakdowns', 'Extends door life', 'Improves safety', 'Maintains warranty', 'Priority service'],
    image: '/service-install.png',
    price: 'Starting at $79'
  }
];

// Testimonials Data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Long Beach',
    rating: 5,
    text: 'Osman Garage Doors saved the day! My garage door spring broke on a Sunday morning, and they had someone out within 2 hours. Professional, efficient, and fairly priced. The technician explained everything and even showed me how to maintain the door. Highly recommend!',
    service: 'Emergency Spring Repair',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Michael R.',
    location: 'Signal Hill',
    rating: 5,
    text: 'Excellent service from start to finish. They installed a new garage door for us and it looks amazing. The technician was knowledgeable and took time to explain everything. The price was exactly as quoted with no surprises. Very happy with the result!',
    service: 'New Door Installation',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Jennifer L.',
    location: 'Lakewood',
    rating: 5,
    text: 'Best garage door company in the area! Fast response, fair pricing, and quality work. They fixed my garage door opener quickly and even programmed my car remote for free. I\'ve already recommended them to my neighbors.',
    service: 'Opener Repair',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'David K.',
    location: 'Long Beach',
    rating: 5,
    text: 'Very professional service. They arrived on time, diagnosed the problem quickly, and had the parts needed to fix it same day. The technician was friendly and cleaned up after the work was done. Great experience overall.',
    service: 'Cable Replacement',
    date: '1 week ago'
  },
  {
    id: '5',
    name: 'Maria G.',
    location: 'Carson',
    rating: 5,
    text: 'I called several companies and Osman had the best prices and fastest response. They installed a new opener with WiFi and now I can control my garage from my phone. The technician was patient and showed me how everything works.',
    service: 'Opener Installation',
    date: '2 months ago'
  },
  {
    id: '6',
    name: 'Robert T.',
    location: 'Bellflower',
    rating: 5,
    text: 'These guys are the real deal. Honest, reliable, and skilled. They could have sold me a new door but instead fixed my old one at a fraction of the cost. I appreciate their integrity and will definitely use them again.',
    service: 'Door Repair',
    date: '1 month ago'
  }
];

// Gallery Data
const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Traditional Raised Panel Door', category: 'Installation', image: '/hero-residential.png', description: 'Classic raised panel door perfect for Orange County homes' },
  { id: '2', title: 'Spring Replacement', category: 'Repair', image: '/service-repair-new.png', description: 'High-cycle torsion spring replacement for residential door' },
  { id: '3', title: 'Carriage House Style Door', category: 'Installation', image: '/service-install-new.png', description: 'Beautiful carriage house style door installed' },
  { id: '4', title: 'Smart Opener Installation', category: 'Installation', image: '/service-repair-new.png', description: 'WiFi-enabled garage door opener setup' },
  { id: '5', title: 'Track Realignment', category: 'Repair', image: '/service-repair-new.png', description: 'Professional track alignment service' },
  { id: '6', title: 'Panel Replacement', category: 'Repair', image: '/service-install-new.png', description: 'Damaged panel replacement on residential door' },
  { id: '7', title: 'Insulated Steel Door', category: 'Installation', image: '/hero-residential.png', description: 'Energy efficient insulated garage door' },
  { id: '8', title: 'Cable Replacement', category: 'Repair', image: '/service-repair-new.png', description: 'Safety cable replacement for family security' },
];

// Process Steps
const processSteps = [
  {
    number: '01',
    title: 'Schedule Service',
    description: 'Call us or fill out our online form. We\'ll schedule a convenient time and provide a free estimate.',
    icon: Calendar
  },
  {
    number: '02',
    title: 'Expert Diagnosis',
    description: 'Our certified technician arrives on time, inspects your garage door, and explains all options.',
    icon: Target
  },
  {
    number: '03',
    title: 'Transparent Quote',
    description: 'Receive a detailed, upfront quote with no hidden fees. You approve before any work begins.',
    icon: DollarSign
  },
  {
    number: '04',
    title: 'Professional Service',
    description: 'We complete the work efficiently using quality parts, with attention to safety and detail.',
    icon: Hammer
  },
  {
    number: '05',
    title: 'Final Inspection',
    description: 'We test everything thoroughly, clean up the work area, and ensure your complete satisfaction.',
    icon: CheckCircle2
  },
  {
    number: '06',
    title: 'Warranty & Support',
    description: 'All work is backed by our warranty. Call us anytime for questions or follow-up service.',
    icon: Shield
  }
];

// Navigation Component
function Navigation({ activeSection }: { activeSection: string }) {
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
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#process', label: 'Our Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-primary/10">
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
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  activeSection === link.href.slice(1) 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:5623356674" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(562) 335-6674</span>
            </a>
            <a href="#contact">
              <Button className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Free Estimate
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 transition-colors ${
                    activeSection === link.href.slice(1) ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:5623356674" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="w-5 h-5" />
                (562) 335-6674
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full mt-2">
                  Free Estimate
                </Button>
              </a>
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-residential.png"
          alt="Beautiful Residential Home with Modern Garage Door"
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
            <HomeIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Orange County Homeowners</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Expert Garage Door
            <span className="gradient-text block">Services for Your Home</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Fast, reliable garage door repair and installation for Long Beach 
            and Orange County homeowners. Same-day service, honest pricing, 
            and work that lasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <a href="#contact">
              <Button size="lg" className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg group">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
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
              <span className="text-sm font-medium">5.0 Homeowner Rating</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Residential Garage Door Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From quick repairs to beautiful new installations, we keep your home&apos;s 
            garage door working perfectly. Click on any service to learn more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <Card className="card-hover border-0 shadow-lg bg-card overflow-hidden group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-primary text-sm font-medium">
                          <span>Learn more</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6 space-y-6">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        What We Offer
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5 text-primary" />
                        Why Choose Us
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting Price</span>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </div>
                    <a href="#contact">
                      <Button className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                        Get Free Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure what service you need?</p>
          <a href="tel:5623356674">
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2">
              <Phone className="mr-2 w-5 h-5" />
              Call Us for Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
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

  const stats = [
    { value: '10+', label: 'Years Serving Homeowners' },
    { value: '5000+', label: 'Homes Serviced' },
    { value: '24/7', label: 'Emergency Service' },
    { value: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/service-install-new.png"
                alt="Professional Garage Door Service for Your Home"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Years Experience</p>
                  <p className="text-muted-foreground text-sm">Serving Homeowners</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-card rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                <div>
                  <p className="font-bold text-xl">5.0</p>
                  <p className="text-muted-foreground text-xs">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
              About Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Neighborhood Garage Door Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Osman Garage Doors has been serving Orange County and Long Beach homeowners 
              for over a decade. We understand that your garage door is an essential part 
              of your home – it protects your family, your vehicles, and your belongings.
            </p>
            <p className="text-muted-foreground mb-8">
              As a family-owned business, we treat every home like it&apos;s our own. We show up 
              on time, explain our work clearly, and never push unnecessary services. Our 
              reputation is built on honest service and quality workmanship at fair prices.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact">
              <Button size="lg" className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-8 group">
                Contact Us Today
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            From your first call to the final handshake, we make the process simple, 
            transparent, and stress-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">Ready to get started?</p>
          <a href="#contact">
            <Button size="lg" className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              Schedule Your Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service.toLowerCase().includes(activeTab));

  return (
    <section id="testimonials" className="py-24">
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

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="repair">Repairs</TabsTrigger>
            <TabsTrigger value="installation">Install</TabsTrigger>
            <TabsTrigger value="opener">Openers</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="card-hover border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
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
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs mb-1">
                      {testimonial.service}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Links */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Read more reviews on</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.yelp.com/biz/osman-garage-doors-long-beach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border hover:border-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Yelp
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61567384634322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border hover:border-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Installation', 'Repair'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Gallery
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            See examples of our quality workmanship across various garage door projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              className={`rounded-full ${filter === category ? 'bg-primary text-white' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="card-hover border-0 shadow-lg bg-card overflow-hidden cursor-pointer group">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </DialogContent>
            </Dialog>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
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
                  <p className="text-sm text-muted-foreground">Including Signal Hill, Lakewood, Carson, Bellflower</p>
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

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Connect With Us</p>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61567384634322" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.yelp.com/biz/osman-garage-doors-long-beach" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone *</label>
                      <Input
                        placeholder="Your phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl"
                        required
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
                    <label className="text-sm font-medium mb-2 block">Service Needed *</label>
                    <select
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
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
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full btn-shine bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
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
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.yelp.com/biz/osman-garage-doors-long-beach" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map(service => (
                <li key={service.id}>
                  <a href={`#services`} className="text-background/70 hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-background/70 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#process" className="text-background/70 hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="text-background/70 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#gallery" className="text-background/70 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5623356674" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(562) 335-6674</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">Long Beach, CA &amp; Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-3">
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
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'process', 'testimonials', 'gallery', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
