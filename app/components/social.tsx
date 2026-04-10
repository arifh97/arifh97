
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Social({ className }: { className?: string }) {
    return (
        <div className={`flex gap-4 ${className}`}>
            {[
                { icon: FaGithub, href: "https://github.com/arifh97" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/arifh97" },
                { icon: FaFacebook, href: "https://facebook.com/arif.h97" },
            ].map(({ icon: Icon, href }, i) => (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                    <Icon size={20} />
                </a>
            ))}
        </div>
    )
}