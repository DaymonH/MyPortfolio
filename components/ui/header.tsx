import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
export default function Header() {
  
  return (
    <div className="w-full">
      <header
        className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* Logo */}
        <Link href="#" className="flex items-center" prefetch={false}>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg border"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
            }}
          >
            D.H.
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="#"
            className="group flex items-center text-sm hover:text-primary"
            prefetch={false}
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="mr-2" style={{ color: "var(--primary)" }}>
              01.
            </span>
            About
          </Link>
          <Link
            href="#"
            className="group flex items-center text-sm hover:text-primary"
            prefetch={false}
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="mr-2" style={{ color: "var(--primary)" }}>
              02.
            </span>
            Experience
          </Link>
          <Link
            href="#"
            className="group flex items-center text-sm hover:text-primary"
            prefetch={false}
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="mr-2" style={{ color: "var(--primary)" }}>
              03.
            </span>
            Work
          </Link>
          <Link
            href="#"
            className="group flex items-center text-sm hover:text-primary"
            prefetch={false}
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="mr-2" style={{ color: "var(--primary)" }}>
              04.
            </span>
            Contact
          </Link>
        </nav>

        {/* Theme toggle and Resume button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch/>
          </div>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Resume
          </Button>
        </div>
      </header>
    </div>
  );
}
