import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/src/components/ui/button"
import { Icons } from "@/src/components/icons"
import { MainNav } from "@/src/components/main-nav"
import { ThemeToggle } from "@/src/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}
