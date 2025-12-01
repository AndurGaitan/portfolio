import React from 'react';
import { motion } from 'framer-motion';
import { FileTextIcon, ExternalLinkIcon } from 'lucide-react';
interface ResearchCardProps {
  title: string;
  year: string;
  description: string;
  index: number;
}
export function ResearchCard({
  title,
  year,
  description,
  index
}: ResearchCardProps) {
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    delay: index * 0.1
  }} className="bg-[rgb(var(--card))] rounded-xl p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[rgb(var(--muted))] rounded-lg">
          <FileTextIcon className="w-6 h-6 text-[rgb(var(--primary))]" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-sm text-[rgb(var(--secondary))] whitespace-nowrap">
              {year}
            </span>
          </div>
          <p className="text-sm text-[rgb(var(--secondary))] mb-4">
            {description}
          </p>
          <div className="flex gap-3">
            {/* <button className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--primary))] hover:underline">
              Read More
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))]">
              View PDF
              <ExternalLinkIcon className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </div>
    </motion.div>;
}