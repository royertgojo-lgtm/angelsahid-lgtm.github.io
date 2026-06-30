import { FaGithub,FaInstagram, FaFacebookF } from "react-icons/fa";
import { Heart } from "lucide-react";

const socialLinks = [
    { icon: FaGithub , href: "https://github.com/royertgojo-lgtm", label: "Github" },
    { icon: FaInstagram, href: "https://www.instagram.com/abdiel_bonilla20?igsh=MWlubXZ0OWc5dzBoMA==", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1CozA9HFFV/", label: "Facebook" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            PM<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Angel Sahid. All rights reserved
                        </p>
                    </div>

                    {/* links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors"> {link.label} </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} aria-label={social.label} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
