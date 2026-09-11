import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Codes", href: "#codes" },
  { label: "Education", href: "#education" },
  { label: "About", href: "/about", route: true as const },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Detect header scroll state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Detect currently visible section
  useEffect(() => {
    // If we are on About page, no section should be active
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = navItems
      .filter((item) => !item.route)
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  // Handle navigation
  const scrollTo = (href: string) => {
    setMobileOpen(false);

    // Route navigation
    if (href.startsWith("/")) {
      navigate(href);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Section navigation from another page
    if (location.pathname !== "/") {
      navigate("/");

      // Wait for homepage to render
      setTimeout(() => {
        document
          .querySelector(href)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);

      return;
    }

    // Section navigation from homepage
    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // Check if navigation item is active
  const isActive = (item: (typeof navItems)[number]) => {
    // About page
    if (item.route) {
      return location.pathname === item.href;
    }

    // Homepage sections
    if (location.pathname === "/") {
      return activeSection === item.href;
    }

    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="V.Thamilarasi — home"
        >
          <BrandMark withWordmark />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`px-3 py-1.5 text-sm rounded-sm transition-all duration-300 ${
                isActive(item)
                  ? "text-primary font-semibold bg-primary/10 shadow-[0_0_12px_hsl(var(--primary)/0.25)]"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Discuss a Project */}
          <Button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm text-xs font-semibold tracking-wide"
          >
            Discuss a Project
          </Button>

          {/* Mobile Menu */}
          <Sheet
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 bg-card border-border"
            >
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`text-left text-base transition-all duration-300 py-3 px-3 rounded-sm border-b border-border/50 ${
                      isActive(item)
                        ? "text-primary font-semibold bg-primary/10 shadow-[0_0_12px_hsl(var(--primary)/0.2)]"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile CTA */}
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="mt-4 bg-primary text-primary-foreground rounded-sm"
                >
                  Discuss a Project
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}