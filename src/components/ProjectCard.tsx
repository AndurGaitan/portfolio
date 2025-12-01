import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, GithubIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
  status?: string;
  role?: string;
  link?: string;   
  github?: string;  
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  index,
  status,
  role,
  link,
  github
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-[rgb(var(--card))] rounded-2xl overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-all duration-300"
    >
      {/* Imagen */}
      <div className="aspect-video bg-[rgb(var(--muted))] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        {/* Status badge */}
        {status && (
          <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-[rgb(var(--muted))] text-[rgb(var(--primary))]">
            {status}
          </span>
        )}

        {/* Título */}
        <h3 className="text-xl font-semibold mb-1">{title}</h3>

        {/* Rol */}
        {role && (
          <p className="text-xs uppercase tracking-wide text-[rgb(var(--secondary))] mb-2">
            {role}
          </p>
        )}

        {/* Descripción */}
        <p className="text-sm text-[rgb(var(--secondary))] mb-4 line-clamp-3">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-[rgb(var(--muted))] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">

          {/* Botón Demo */}
          {link && link.trim() !== '' && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(var(--primary))] text-white rounded-lg text-sm font-medium hover:opacity-90 hover:gap-3 transition-all"
            >
              Ver demo
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          )}

          {/* Botón GitHub (estilo footer) */}
          {github && github.trim() !== '' && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--foreground))] text-sm font-medium hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Código
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
}
