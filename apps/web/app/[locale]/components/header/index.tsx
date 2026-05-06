"use client";

import { Button } from "@repo/design-system/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/design-system/components/ui/navigation-menu";
import {
  Calendar,
  ChevronDown,
  Cpu,
  Factory,
  HandCoins,
  Menu,
  MoveRight,
  Newspaper,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PrinterDropdownContent } from "./printer-dropdown";

export const Header = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    {
      title: "Direct Object Printer",
      customDropdown: true,
    },
    {
      title: "Services",
      items: [
        { title: "All Services", href: "/services", icon: Wrench },
        { title: "Leasing Options", href: "/services/leasing", icon: HandCoins },
        { title: "Contract Manufacturing", href: "/services/contract-manufacturing", icon: Factory },
        { title: "Engineering Services", href: "/services/engineering", icon: Cpu },
        { title: "Upcoming Events", href: "/services/events", icon: Calendar },
      ],
    },
    { title: "Press", href: "/press" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container relative mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/lsinc-logo.png" alt="LSINC - Ideas to Reality" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-0.5">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-medium">
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    </NavigationMenuLink>
                  ) : item.customDropdown ? (
                    <>
                      <NavigationMenuTrigger className="h-8 bg-transparent text-xs font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground data-[state=open]:hover:bg-muted data-[state=open]:focus:bg-muted">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-[560px]!">
                        <PrinterDropdownContent />
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="h-8 bg-transparent text-xs font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground data-[state=open]:hover:bg-muted data-[state=open]:focus:bg-muted">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-[400px]! p-3">
                        <div className="flex flex-col gap-0.5">
                          {item.items?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <NavigationMenuLink
                                className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-muted"
                                href={subItem.href}
                                key={subItem.href}
                              >
                                <Icon className="size-4 text-accent" />
                                <span className="text-sm">{subItem.title}</span>
                              </NavigationMenuLink>
                            );
                          })}
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-8 rounded-md px-4 text-xs font-semibold sm:inline-flex">
            <Link href="/contact">
              Get a Quote
              <MoveRight className="ml-1.5 size-3" />
            </Link>
          </Button>

          <Button
            onClick={() => setOpen(!isOpen)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 lg:hidden"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 left-0 flex flex-col gap-1 border-b bg-background p-4 shadow-xl lg:hidden">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.href ? (
                  <Link
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : item.customDropdown ? (
                  <details className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted [&::-webkit-details-marker]:hidden">
                      <span>{item.title}</span>
                      <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="mt-0.5 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                      <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" href="/products" onClick={() => setOpen(false)}>All Printers</Link>
                      <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" href="/products/perivallo360" onClick={() => setOpen(false)}>Perivallo360</Link>
                      <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" href="/products/perivallo360m" onClick={() => setOpen(false)}>Perivallo360m</Link>
                      <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" href="/products/periq360" onClick={() => setOpen(false)}>PeriQ360</Link>
                      <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" href="/products/perijet360s" onClick={() => setOpen(false)}>PeriJet360s</Link>
                    </div>
                  </details>
                ) : (
                  <details className="group rounded-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted [&::-webkit-details-marker]:hidden">
                      <span>{item.title}</span>
                      <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="mt-0.5 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                      {item.items?.map((subItem) => (
                        <Link
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                          href={subItem.href}
                          key={subItem.title}
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
            <Button asChild className="mt-3">
              <Link href="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
