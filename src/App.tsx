/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Cpu,
  Lock,
  Zap,
  Activity,
  Network,
  Layers,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Check,
  AlertTriangle,
  ClipboardList,
  Gauge,
  UserCheck,
  Award
} from 'lucide-react';
import { cn } from './lib/utils';
import { 
  CORE_CAPABILITIES, 
  PRODUCTS, 
  CATEGORIES, 
  SERVICES, 
  WHY_FEATURES, 
  TESTIMONIALS, 
  TRUSTED_BY 
} from './constants';

const ProductModal = ({ product, isOpen, onClose }: { product: any, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-surface-bright rounded-[3rem] tonal-shadow overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center flex-shrink-0">
              <product.icon className="w-12 h-12 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="label-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {product.category}
                </span>
                <span className={cn(
                  "label-sm px-3 py-1 rounded-full flex items-center gap-2",
                  product.status === "Live" ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-yellow-500/10 text-yellow-600"
                )}>
                  {product.status === "Live" && <div className="w-2 h-2 rounded-full bg-on-tertiary-fixed animate-pulse-dot" />}
                  {product.status}
                </span>
              </div>
              <h2 className="headline-md mb-2">{product.name}</h2>
              <p className="text-primary font-semibold text-lg">{product.fullName}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="label-sm text-on-surface-variant mb-6 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Overview
                </h3>
                <p className="body-md">
                  {product.tagline}
                </p>
              </div>

              <div>
                <h3 className="label-sm text-on-surface-variant mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Key Features
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {product.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-surface-container-low">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="body-md text-on-surface font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="label-sm text-on-surface-variant mb-6 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Compliance & Standards
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.compliance.map((item: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-primary/5">
                <h3 className="title-lg mb-4">Ready to implement?</h3>
                <p className="body-md mb-8">
                  Schedule a technical deep-dive with our engineers to see how {product.name} can secure your AI infrastructure.
                </p>
                <button 
                  onClick={() => {
                    onClose();
                    const element = document.getElementById('request-access');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full btn-primary"
                >
                  Request Technical Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-12">
    <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
  </div>
);

const SkeletonCard = () => (
  <div className="glass-card rounded-3xl p-6 animate-pulse">
    <div className="w-12 h-12 bg-slate-800 rounded-xl mb-4" />
    <div className="h-6 bg-slate-800 rounded w-3/4 mb-2" />
    <div className="h-4 bg-slate-800 rounded w-1/2 mb-4" />
    <div className="space-y-2">
      <div className="h-3 bg-slate-800 rounded w-full" />
      <div className="h-3 bg-slate-800 rounded w-full" />
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'why-defenai' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "backdrop-blur-md tonal-shadow" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/DefenAI.png" alt="DefenAI Labs" className="h-20 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('request-access')}
            className="btn-tertiary text-sm"
          >
            Request Demo
          </button>
          <button 
            onClick={() => scrollToSection('request-access')}
            className="btn-primary !px-6 !py-2.5 !text-sm"
          >
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface-container-lowest tonal-shadow p-8 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-medium text-on-surface-variant text-left"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('request-access')}
              className="text-lg font-medium text-on-surface-variant text-left"
            >
              Request Demo
            </button>
            <button 
              onClick={() => scrollToSection('request-access')}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-sm px-5 py-2 rounded-full bg-primary/5 text-primary mb-10 inline-block">
            Next-Gen AI Governance
          </span>
          <h1 className="display-lg mb-10">
            Full-Stack AI <br />
            <span className="text-primary">Governance & Security</span>
          </h1>
          <p className="max-w-2xl mx-auto body-md text-xl mb-12">
            The central nervous system for enterprise AI. Enabling trust, compliance, 
            and operational resilience through our Secure Language Model (SLM) ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('request-access');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Request Technical Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-24 relative"
        >
          <div className="bg-surface-container-lowest rounded-[3rem] p-6 md:p-10 max-w-5xl mx-auto tonal-shadow">
            <div className="flex items-center gap-3 mb-8 border-b border-surface-container-low pb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-on-surface/10" />
                <div className="w-3 h-3 rounded-full bg-on-surface/10" />
                <div className="w-3 h-3 rounded-full bg-on-surface/10" />
              </div>
              <div className="ml-4 label-sm text-on-surface-variant">defenai-slm-dashboard v1.0.4</div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-surface-container-low rounded-[2rem] p-8 animate-pulse">
                    <div className="w-10 h-10 bg-surface-container-high rounded-xl mb-6" />
                    <div className="h-8 bg-surface-container-high rounded-lg w-1/2 mb-4" />
                    <div className="h-4 bg-surface-container-high rounded-lg w-1/3" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Threat Protection', value: '99.9%', icon: Shield, color: 'text-primary' },
                  { label: 'Privacy Compliance', value: 'Active', icon: Lock, color: 'text-primary' },
                  { label: 'Model Drift', value: '0.02%', icon: Activity, color: 'text-primary' },
                ].map((stat, i) => (
                  <div key={i} className="bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-lowest hover:tonal-shadow group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center border border-primary/5 group-hover:border-primary/20 transition-all">
                          <stat.icon className={cn("w-6 h-6", stat.color)} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse-dot" />
                        <span className="label-sm text-on-surface-variant">Live</span>
                      </div>
                    </div>
                    <div className="headline-md text-on-surface mb-1">{stat.value}</div>
                    <div className="label-sm text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FrameworkSection = () => {
  return (
    <section id="framework" className="section-padding bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-24 max-w-3xl">
          <span className="label-sm text-primary mb-6 inline-block">The SLM Standard</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Core SLM Capability Framework</h2>
          <p className="body-md text-lg">
            Mandatory baseline capabilities integrated into every DefenAI product to ensure 
            maximum security and regulatory alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="surface-card group hover:bg-surface-container-low transition-all duration-500"
            >
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-1 shadow-sm group-hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                  <cap.icon className="w-8 h-8 text-primary relative z-10" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="title-lg mb-6">{cap.title}</h3>
              <ul className="space-y-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 body-md group/li">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/li:bg-primary/20 transition-colors">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setIsLoading(true);
    setActiveCategory(cat);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <section id="products" className="section-padding bg-[#eef0f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="label-sm text-primary mb-6 inline-block">Our Platforms</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Comprehensive Security Suite</h2>
          <p className="body-md max-w-2xl mx-auto text-lg">
            11 integrated platforms covering AI security, governance, forensics, and sovereign technology - 
            built for enterprises, government, and defense sectors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                activeCategory === cat 
                  ? "bg-primary text-on-primary tonal-shadow" 
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="surface-card animate-pulse">
                    <div className="w-14 h-14 bg-surface-container-low rounded-2xl mb-8" />
                    <div className="h-8 bg-surface-container-low rounded-lg w-3/4 mb-4" />
                    <div className="h-4 bg-surface-container-low rounded-lg w-1/2 mb-8" />
                    <div className="space-y-3">
                      <div className="h-3 bg-surface-container-low rounded-lg w-full" />
                      <div className="h-3 bg-surface-container-low rounded-lg w-full" />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "surface-card flex flex-col group hover:scale-[1.02]",
                      product.id === 'ffai' && "ring-2 ring-primary/30 shadow-[0_0_40px_rgba(79,70,229,0.12)] lg:col-span-3"
                    )}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="relative group/icon">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center border border-primary/10 group-hover/icon:border-primary/30 transition-all duration-500 group-hover/icon:-translate-y-1 shadow-sm group-hover/icon:shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                          <product.icon className="w-7 h-7 text-primary relative z-10" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {product.id === 'ffai' && (
                          <span className="label-sm px-3 py-1 rounded-full bg-primary text-on-primary">
                            Flagship
                          </span>
                        )}
                        <span className={cn(
                          "label-sm px-3 py-1 rounded-full flex items-center gap-2",
                          product.status === "Live" ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-yellow-500/10 text-yellow-600"
                        )}>
                          {product.status === "Live" && <div className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed animate-pulse-dot" />}
                          {product.status}
                        </span>
                        <span className="label-sm text-on-surface-variant/60">{product.category}</span>
                      </div>
                    </div>

                    <h3 className="title-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="label-sm text-on-surface-variant mb-6">{product.fullName}</p>
                    <p className="body-md mb-8 line-clamp-3">{product.tagline}</p>

                    <div className="space-y-4 mb-10 flex-grow">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 body-md text-xs group/li">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/li:bg-primary/20 transition-colors">
                            <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-on-surface">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="btn-primary w-full !py-3 !text-sm flex items-center justify-center gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section id="compliance" className="section-padding bg-[#eef0f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="label-sm text-primary mb-6 inline-block">Global Readiness</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Regulatory Alignment</h2>
          <p className="body-md max-w-2xl mx-auto text-lg">
            Our ecosystem is built to align with the world's most stringent AI regulations 
            and security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {[
            { name: 'EU AI Act', desc: 'High-Risk Systems', icon: AlertTriangle },
            { name: 'ISO 42001', desc: 'AI Management', icon: ClipboardList },
            { name: 'NIST AI RMF', desc: 'Tier 3+ Maturity', icon: Gauge },
            { name: 'DPDP Act', desc: 'India Compliance', icon: UserCheck },
            { name: 'SOC2 / ISO 27001', desc: 'Security Standards', icon: Award },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-20 h-20 bg-surface-container-low rounded-[2rem] flex items-center justify-center border border-primary/5 group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem]" />
                  <item.icon className="w-9 h-9 text-primary relative z-10" strokeWidth={1.5} />
                </div>
              </div>
              <h4 className="title-lg text-base mb-2">{item.name}</h4>
              <p className="label-sm text-on-surface-variant/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 surface-card p-16 text-center max-w-4xl mx-auto bg-primary/5">
          <h3 className="headline-md mb-8">Ready to Secure Your AI Future?</h3>
          <p className="body-md text-lg mb-12 max-w-2xl mx-auto">
            Join leading enterprises in building a trust-first AI ecosystem. 
            DefenAI Labs provides the tools you need to innovate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Contact Sales
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 divide-y lg:divide-y-0 lg:divide-x divide-on-surface/10">
          <div className="space-y-8 lg:pr-16">
            <div className="flex items-center gap-3">
              <img src="/DefenAI.png" alt="DefenAI Labs" className="h-24 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <p className="body-md">
              Building indigenous, sovereign AI security solutions for enterprises, 
              government agencies, and defense organizations.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', icon: Twitter },
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'GitHub', icon: Github }
              ].map(social => (
                <a key={social.name} href="#" className="w-12 h-12 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-primary hover:tonal-shadow transition-all group/social">
                  <social.icon className="w-5 h-5 transition-transform group-hover/social:scale-110" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3 body-md text-xs">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@defenailabs.com</span>
              </div>
              <div className="flex items-center gap-3 body-md text-xs">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 96997 45141</span>
              </div>
              <div className="flex items-center gap-3 body-md text-xs">
                <Globe className="w-4 h-4 text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="lg:px-16">
            <h4 className="label-sm text-on-surface mb-8">Platforms</h4>
            <ul className="space-y-5">
              {PRODUCTS.slice(0, 5).map(p => (
                <li key={p.id}>
                  <button onClick={() => scrollToSection('products')} className="body-md hover:text-primary transition-colors">{p.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:px-16">
            <h4 className="label-sm text-on-surface mb-8">Company</h4>
            <ul className="space-y-5">
              {[
                { label: 'About Us', id: 'why-defenai' },
                { label: 'Services', id: 'services' },
                { label: 'Framework', id: 'framework' },
                { label: 'Contact', id: 'contact' }
              ].map(item => (
                <li key={item.label}>
                  <button onClick={() => scrollToSection(item.id)} className="body-md hover:text-primary transition-colors">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-16">
            <h4 className="label-sm text-on-surface mb-8">Newsletter</h4>
            <p className="body-md mb-6">Stay updated with the latest in AI security.</p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="bg-surface-container-lowest rounded-2xl px-5 py-3 text-sm text-on-surface w-full outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              <button className="btn-primary !p-3 !rounded-2xl">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="label-sm text-on-surface-variant/40 normal-case font-medium">
            &copy; {new Date().getFullYear()} DefenAI Labs. All rights reserved.
          </p>
          <div className="flex gap-10 label-sm text-on-surface-variant/40 normal-case font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const IntegrationSection = () => {
  return (
    <section id="integration" className="section-padding bg-[#eef0f4] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="label-sm text-primary mb-6 inline-block">Unified Ecosystem</span>
            <h2 className="headline-md text-4xl md:text-5xl mb-10 leading-tight">
              Unified AI <br />
              <span className="text-primary">Governance Layer</span>
            </h2>
            <p className="body-md text-lg mb-12">
              Our ecosystem acts as a central nervous system, ensuring that every AI interaction 
              is trust-verified, compliant, and secure across all your enterprise products.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Central AI Risk Dashboard', desc: 'Unified visibility through GVT360 integration.' },
                { title: 'Shared Audit Logs', desc: 'Immutable trails across all products in the ecosystem.' },
                { title: 'Common Policy Engine', desc: 'Define once, enforce everywhere at runtime.' },
                { title: 'API-First Architecture', desc: 'Seamless integration with existing SIEM/SOAR tools.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="title-lg text-base mb-2">{item.title}</h4>
                    <p className="body-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-16">
                <div className="surface-card p-8 animate-float group/card">
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center border border-primary/5 group-hover/card:border-primary/20 transition-all">
                      <Network className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="title-lg text-sm mb-2">Interoperability</div>
                  <div className="label-sm text-on-surface-variant/40">Standard Schemas</div>
                </div>
                <div className="surface-card p-8 animate-float [animation-delay:1s] group/card">
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center border border-primary/5 group-hover/card:border-primary/20 transition-all">
                      <Activity className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="title-lg text-sm mb-2">Continuous Monitoring</div>
                  <div className="label-sm text-on-surface-variant/40">Real-time Scoring</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="surface-card p-8 animate-float [animation-delay:0.5s] group/card">
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center border border-primary/5 group-hover/card:border-primary/20 transition-all">
                      <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="title-lg text-sm mb-2">Zero-Trust</div>
                  <div className="label-sm text-on-surface-variant/40">AI Architecture</div>
                </div>
                <div className="surface-card p-8 animate-float [animation-delay:1.5s] group/card">
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center border border-primary/5 group-hover/card:border-primary/20 transition-all">
                      <Layers className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="title-lg text-sm mb-2">Unified Governance</div>
                  <div className="label-sm text-on-surface-variant/40">Policy Enforcement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="label-sm text-primary mb-6 inline-block">Expert Solutions</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Our Services</h2>
          <p className="body-md max-w-2xl mx-auto text-lg">
            From AI security to digital forensics, we provide comprehensive solutions trusted by 
            government agencies, defense organizations, and Fortune 500 companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="surface-card group hover:scale-[1.02]"
            >
              <div className="relative mb-8 group/icon">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center border border-primary/10 group-hover/icon:border-primary/30 transition-all duration-500 group-hover/icon:-translate-y-1 shadow-sm group-hover/icon:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                  <service.icon className="w-8 h-8 text-primary relative z-10" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="title-lg mb-6">{service.title}</h3>
              <p className="body-md mb-8">{service.desc}</p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 body-md text-xs group/li">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/li:bg-primary/20 transition-colors">
                      <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-tertiary text-sm flex items-center gap-2 group-hover:gap-3"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhySection = () => {
  return (
    <section id="why-defenai" className="section-padding bg-[#eef0f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="label-sm text-primary mb-6 inline-block">The DefenAI Advantage</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Built for Enterprise Scale</h2>
          <p className="body-md max-w-2xl mx-auto text-lg">
            Our platform is designed to handle the most demanding security requirements 
            with features that enterprises and governments need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_FEATURES.map((feature, i) => (
            <div key={i} className="surface-card p-8 hover:bg-surface-container-low">
              <h4 className="title-lg text-base mb-4">{feature.title}</h4>
              <p className="body-md text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/5 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="Cybersecurity" 
              className="relative rounded-[3rem] tonal-shadow"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left">
            <h3 className="headline-md text-3xl mb-10 leading-tight">
              The Central Nervous System for <span className="text-primary">Enterprise AI</span>
            </h3>
            <p className="body-md text-lg mb-12">
              DefenAI Labs isn't just a collection of tools; it's a unified ecosystem designed 
              to solve the most critical challenges of the AI era: Trust, Compliance, Security, and Intelligence.
            </p>
            <div className="space-y-8">
              {[
                { title: 'Trust', desc: 'Verified AI outputs with zero hallucination layers.' },
                { title: 'Compliance', desc: 'Automated alignment with global regulations.' },
                { title: 'Security', desc: 'Kernel-level protection and adversarial defense.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="title-lg text-sm mb-2">{item.title}</h4>
                    <p className="body-md text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="label-sm text-primary mb-6 inline-block">Our Network</span>
          <h2 className="headline-md text-4xl md:text-5xl mb-8">Trusted By Industry Leaders</h2>
          <p className="body-md max-w-2xl mx-auto text-lg">
            From government agencies to Fortune 500 companies, organizations worldwide trust 
            DefenAI Labs to secure their AI infrastructure and digital assets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-32">
          {TRUSTED_BY.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-lowest rounded-[2rem] flex items-center justify-center mb-6 tonal-shadow transition-all group-hover:scale-110">
                <item.icon className="w-8 h-8 text-on-surface-variant/40 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="label-sm text-on-surface mb-1">{item.name}</h4>
              <p className="label-sm text-[9px] text-on-surface-variant/40">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => {
            const initials = t.company.split(' ').slice(0, 2).map((w: string) => w[0]).join('');
            const colors = [
              { bg: 'bg-primary/10', text: 'text-primary' },
              { bg: 'bg-indigo-100', text: 'text-indigo-600' },
              { bg: 'bg-violet-100', text: 'text-violet-600' },
            ];
            const c = colors[i % colors.length];
            return (
              <div key={i} className="surface-card p-10 relative">
                <div className="text-primary text-6xl font-serif absolute top-6 left-6 opacity-5">"</div>
                <p className="body-md italic mb-8 relative z-10 text-on-surface leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm flex-shrink-0", c.bg, c.text)}>
                    {initials}
                  </div>
                  <div>
                    <div className="title-lg text-sm mb-0.5">{t.author}</div>
                    <div className="label-sm text-on-surface-variant/60">{t.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('defenai_contacts') || '[]');
      localStorage.setItem('defenai_contacts', JSON.stringify([...existing, { ...data, date: new Date().toISOString() }]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-[#eef0f4]">
      <div className="max-w-7xl mx-auto">
        <div className="surface-card p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -mr-64 -mt-64" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <span className="label-sm text-primary mb-8 inline-block">Get in Touch</span>
              <h2 className="headline-md text-4xl md:text-5xl mb-10 leading-tight">
                Let's Build a <br />
                <span className="text-primary">Secure AI Future</span>
              </h2>
              <p className="body-md text-lg mb-12">
                Ready to integrate the DefenAI ecosystem into your enterprise? 
                Our team of experts is here to help you navigate the complex landscape 
                of AI governance and security.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Globe, label: 'Global Headquarters', value: 'Mumbai, India' },
                  { icon: Phone, label: 'Phone', value: '+91 96997 45141' },
                  { icon: Mail, label: 'Email', value: 'contact@defenailabs.com' },
                  { icon: Shield, label: 'Security Operations', value: '24/7 Monitoring Active' },
                  { icon: Lock, label: 'Data Privacy', value: 'GDPR / DPDP Compliant' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group/contact">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover/contact:opacity-100 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover/contact:border-primary/20 transition-all shadow-sm group-hover/contact:shadow-md">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <div className="label-sm text-on-surface-variant/60 mb-1">{item.label}</div>
                      <div className="title-lg text-base group-hover/contact:text-primary transition-colors">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-surface-container-high relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center bg-surface-container-low rounded-[2.5rem] z-20"
                  >
                    <div className="w-20 h-20 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-on-tertiary-fixed" />
                    </div>
                    <h3 className="title-lg mb-2">Message Sent!</h3>
                    <p className="body-md">Thank you for reaching out. We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="label-sm">Full Name</label>
                        <input required name="name" type="text" className="w-full bg-surface-container-lowest rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="label-sm">Work Email</label>
                        <input required name="email" type="email" className="w-full bg-surface-container-lowest rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="label-sm">Company</label>
                      <input required name="company" type="text" className="w-full bg-surface-container-lowest rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Acme Corp" />
                    </div>
                    <div className="space-y-3">
                      <label className="label-sm">Message</label>
                      <textarea required name="message" rows={4} className="w-full bg-surface-container-lowest rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help you?" />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className={cn(
                        "btn-primary w-full flex items-center justify-center gap-3",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RequestAccessForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Store in local storage as mock storage
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      const existing = JSON.parse(localStorage.getItem('defenai_requests') || '[]');
      localStorage.setItem('defenai_requests', JSON.stringify([...existing, { ...data, date: new Date().toISOString() }]));
    }, 1500);
  };

  return (
    <section id="request-access" className="section-padding bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="surface-card p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -mr-64 -mt-64" />
          
          <div className="relative z-10 text-center mb-16">
            <span className="label-sm text-primary mb-6 inline-block">Platform Access</span>
            <h2 className="headline-md text-4xl md:text-5xl mb-8">Join the Registry</h2>
            <p className="body-md text-lg">
              Join the waitlist for our upcoming SLM and enterprise security tools. 
              Your data will be stored securely in our registry.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-on-tertiary-fixed" />
                </div>
                <h3 className="headline-md mb-4">Request Received!</h3>
                <p className="body-md mb-10">We've added you to our secure registry. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-tertiary"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="label-sm">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-surface-container-low rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-sm">Work Email</label>
                    <input required name="email" type="email" className="w-full bg-surface-container-low rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="label-sm">Organization</label>
                    <input required name="org" type="text" className="w-full bg-surface-container-low rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Acme Defense" />
                  </div>
                  <div className="space-y-3">
                    <label className="label-sm">Platform of Interest</label>
                    <select name="platform" className="w-full bg-surface-container-low rounded-2xl px-5 py-4 text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                      {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-3"
                >
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-on-primary/20 border-t-on-primary rounded-full animate-spin" /> : "Submit Request"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <FrameworkSection />
        <ProductSection />
        <ServicesSection />
        <IntegrationSection />
        <TrustedBySection />
        <ComplianceSection />
        <RequestAccessForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
