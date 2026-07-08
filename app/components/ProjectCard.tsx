import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title?: string;
  description?: string;
  result?: string;
}

export function ProjectCard({ image, title }: ProjectCardProps) {
  return (
    <a href={`https://${title}.${(!image.includes('vercel')) ? 'netlify' : 'vercel'}.app`} target='_blank' className="group glass rounded-2xl p-0 overflow-hidden hover-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-[1/.6] overflow-hidden">
        <Image
          src={image === "" ? '/demo.webp' : image}
          alt={`${title} project screenshot`}
          className={`w-full h-auto absolute top-0 left-0 max-h-full object-cover transition-transform duration-500 ${!image ? 'animate-pulse' : ''}`}
          width={500}
          height={300}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-2 capitalize">{title?.replace('-', ' ')}</h3>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <div className="flex items-center justify-start gap-2 text-primary">
          <span className="text-sm font-medium text-current">View Project</span>
          <ArrowRight className="size-4 text-current group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
