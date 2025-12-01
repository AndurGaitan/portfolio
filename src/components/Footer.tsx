import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand / Claim */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Andrés Gaitán</h3>
            <p className="text-sm text-[rgb(var(--secondary))] max-w-md mb-4">
              HealthTech Developer · ICU Researcher · Bioengineering PhD Candidate.
              Construyendo soluciones digitales y sistemas basados en IA para mejorar la atención en cuidados críticos.
            </p>

            {/* Tagline */}
            <p className="text-sm font-medium text-[rgb(var(--primary))] italic">
              “Where ICU meets AI & Engineering.”
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/about"
                className="text-sm text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                Sobre mí
              </Link>
              <Link
                to="/projects"
                className="text-sm text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                Proyectos
              </Link>
              <Link
                to="/research"
                className="text-sm text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                Investigación
              </Link>
              <Link
                to="/contact"
                className="text-sm text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Conectar</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/AndurGaitan"
                className="text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9s-david-gait%C3%A1n-469864239/"
                className="text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="andresgaitandev@gmail.com"
                className="text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))] transition-colors"
                aria-label="Email"
                target="_blank"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-[rgb(var(--border))] text-center">
          <p className="text-sm text-[rgb(var(--secondary))]">
            © {new Date().getFullYear()} Andrés Gaitán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
  