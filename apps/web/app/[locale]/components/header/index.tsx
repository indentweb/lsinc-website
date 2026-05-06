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
  Cpu,
  Factory,
  Menu,
  MoveRight,
  Printer,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    {
      title: "Capabilities",
      description: "Engineering, printing & manufacturing.",
      items: [
        { title: "Engineering & Product Dev", href: "/capabilities#engineering", icon: Cpu },
        { title: "OEM Specialty Printers", href: "/capabilities#printers", icon: Printer },
        { title: "Contract Manufacturing", href: "/capabilities#manufacturing", icon: Factory },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container relative mx-auto flex h-14 items-center justify-between">
        {/* Logo — minimal */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-black tracking-tight">LSINC</span>
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:block">
            Ideas to Reality
          </span>
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
                  ) : (
                    <>
                      <NavigationMenuTrigger className="h-8 text-xs font-medium">
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

          {/* Mobile toggle */}
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
                ) : (
                  <div className="flex flex-col">
                    <span className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {item.title}
                    </span>
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
