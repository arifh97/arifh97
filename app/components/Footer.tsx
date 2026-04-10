import React from 'react'

export default function Footer() {
    return (
        <div className="container mx-auto py-5 lg:py-6 border-t border-border text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground font-medium">
                <span>© {new Date().getFullYear()} Arif. All rights reserved.</span>
            </div>
        </div>
    )
}
