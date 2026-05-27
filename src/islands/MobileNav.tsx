import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export type NavItem = { href: string; label: string };

type MobileNavProps = {
  brand: string;
  items: NavItem[];
  langHref: string;
  langLabel: string;
  mainSiteHref: string;
  mainSiteLabel: string;
  trialHref: string;
  trialLabel: string;
};

export default function MobileNav({
  brand,
  items,
  langHref,
  langLabel,
  mainSiteHref,
  mainSiteLabel,
  trialHref,
  trialLabel,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{brand}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <SheetClose key={item.href} asChild>
              <a href={item.href} className="text-lg text-temple-snow/90 hover:text-temple-accent">
                {item.label}
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <a href={langHref} className="text-temple-accent">
              {langLabel}
            </a>
          </SheetClose>
          <a
            href={mainSiteHref}
            data-track="cta_main_site"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--link focus-ring"
          >
            {mainSiteLabel}
          </a>
          <SheetClose asChild>
            <a href={trialHref} data-track="cta_free_class" className="cta-btn cta-btn--primary focus-ring">
              {trialLabel}
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
