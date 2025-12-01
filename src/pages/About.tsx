import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const timeline = [
    {
      year: '2025 – Actualidad',
      title: 'Doctorando en Bioingeniería',
      company: 'Instituto Universitario Hospital Italiano de Buenos Aires (IUHIBA)'
    },
    {
      year: '2023 – 2024',
      title: 'Coordinador del Área de Kinesiología',
      company: 'Sanity Care – Internación Domiciliaria'
    },
    {
      year: '2021 – Actualidad',
      title: 'Kinesiólogo en Unidades de Cuidados Intensivos',
      company: 'Sanatorio Rivadavia'
    },
    {
      year: '2020 – Actualidad',
      title: 'Kinesiólogo en Cuidados Críticos',
      company: 'Hospital Centro de Salud Zenón J. Santillán – SIPROSA'
    },
    {
      year: '2015 – 2020',
      title: 'Licenciatura en Kinesiología',
      company: 'Universidad Nacional de Tucumán (UNT)'
    }
  ];

  const skills = [
        'Liderazgo y coordinación de equipos de salud',
    'Desarrollo web Full Stack (JavaScript / React)',
    'Programación en Python',
    'Inteligencia artificial aplicada a la salud',
    'Kinesiología intensiva y manejo del paciente crítico',
    'Diseño y aplicación de protocolos en UCI',

  ];

  const values = [
    {
      title: 'Innovación en salud',
      description:
        'Integro clínica, tecnología y datos para diseñar soluciones que tengan impacto real en la práctica diaria de cuidados críticos.'
    },
    {
      title: 'Calidad y seguridad del paciente',
      description:
        'Cada decisión de diseño, desarrollo o investigación está orientada a mejorar la seguridad, la trazabilidad y los resultados clínicos.'
    },
    {
      title: 'Trabajo interdisciplinario',
      description:
        'Colaboro con médicos, enfermería, kinesiólogos, ingenieros y equipos técnicos para construir soluciones robustas y viables.'
    },
    {
      title: 'Aprendizaje continuo',
      description:
        'Mantengo una formación activa en IA, programación y terapia intensiva para evolucionar junto con la tecnología y la evidencia científica.'
    }
  ];

  return (
    <div className="min-h-screen w-full pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-3xl mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre mí</h1>
          <p className="text-lg text-[rgb(var(--secondary))]">
            Soy Licenciado en Kinesiología con experiencia en cuidados intensivos y formación
            en inteligencia artificial y programación. Mi interés se centra en la innovación
            en salud y el desarrollo de software, con foco en medicina personalizada, análisis
            avanzado de datos y tecnología aplicada a la ventilación mecánica y al paciente
            crítico.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Trayectoria</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-28 flex-shrink-0 text-[rgb(var(--primary))] font-semibold">
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-b border-[rgb(var(--border))]">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-[rgb(var(--secondary))]">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Habilidades clave</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-lg text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Valores profesionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[rgb(var(--card))] rounded-xl border border-[rgb(var(--border))]"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-[rgb(var(--secondary))]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
