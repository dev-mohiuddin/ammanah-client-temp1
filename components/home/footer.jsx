// app/components/footer.tsx
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-foreground">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Amaanah</h3>
          <p className="text-muted-foreground text-sm">
            All-in-one restaurant management software for smart food businesses.
            From kitchen to customer — manage everything, effortlessly.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-base font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#home" className="hover:text-primary">Home</Link></li>
            <li><Link href="#features" className="hover:text-primary">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-base font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#demo" className="hover:text-primary">Book a Demo</Link></li>
            <li><a href="mailto:support@restomanage.com" className="hover:text-primary">Email Support</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-base font-medium">Contact Us</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p className="flex items-center gap-2"><Phone size={16} /> +880 1234-567890</p>
            <p className="flex items-center gap-2"><Mail size={16} /> support@restomanage.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram size={18} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-border text-sm text-muted-foreground text-center py-6">
        © {new Date().getFullYear()} Amaanah. All rights reserved.
      </div>
    </footer>
  )
}
