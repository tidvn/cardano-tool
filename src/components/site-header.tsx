import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CardanoWallet } from '@meshsdk/react';
import { useTheme } from "next-themes"

export function SiteHeader() {
  const {theme } = useTheme()

  return (
    // bg-background 
    <header className="sticky top-0 z-40 w-full border-b">  
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          <CardanoWallet isDark={theme === "dark"}/>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
