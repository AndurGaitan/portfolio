import React from 'react';
import { motion } from 'framer-motion';
import { ResearchCard } from '../components/ResearchCard';
export function Research() {
  const research = [
    {
      title: 'SmartVent AI: Detección automática de asincronías paciente-ventilador mediante inteligencia artificial',
      year: '2025',
      description:
        'Proyecto doctoral centrado en el análisis de señales de ventilación mecánica invasiva (Neumovent/Tecme) para identificar asincronías en tiempo real. Integra extracción de datos vía HL7/RS-232, ingeniería de características y modelos de clasificación orientados a soporte clínico en UCI.'
    },
    // {
    //   title: 'Cohortes de sepsis en MIMIC-IV: pipeline reproducible en BigQuery para investigación en cuidados críticos',
    //   year: '2024',
    //   description:
    //     'Desarrollo de un pipeline modular en SQL/BigQuery para definir cohortes de sepsis, calcular SOFA, delta-SOFA y outcomes clínicos. El enfoque incluye buenas prácticas de ingeniería de datos y documentación clara para facilitar la replicabilidad y el trabajo colaborativo en investigación clínica.'
    // },
    // {
    //   title: 'Integración de datos de ventiladores Neumovent/Tecme: HL7, RS-232 y monitoreo avanzado de ventilación mecánica',
    //   year: '2023',
    //   description:
    //     'Estudio de la arquitectura de integración entre ventiladores Neumovent/Tecme y sistemas de información clínica. Incluye mapeo de mensajes HL7, parsing de tramas vía RS-232 y diseño de un modelo de datos orientado a la monitorización continua y análisis posterior de parámetros ventilatorios.'
    // },
    // {
    //   title: 'Indicadores de calidad en UCI y rol de las herramientas digitales en la trazabilidad de la ventilación mecánica',
    //   year: '2023',
    //   description:
    //     'Trabajo enfocado en vincular indicadores de calidad asistencial en UCI con la documentación estructurada de la ventilación mecánica. Explora cómo los registros digitales, dashboards y sistemas de soporte pueden mejorar la seguridad, la auditoría y la toma de decisiones del equipo interdisciplinario.'
    // },
    // {
    //   title: 'Plataformas digitales para registro kinésico y monitorización funcional del paciente crítico',
    //   year: '2022',
    //   description:
    //     'Diseño conceptual y prototipos de aplicaciones web/mobile para unificar el registro kinésico en UCI, incluyendo ventilación, movilización precoz y funcionalidad. El objetivo es generar datos estructurados que permitan investigación, evaluación de procesos y mejora continua de la calidad asistencial.'
    // }
  ];
  return <div className="min-h-screen w-full pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Línea de Investigación Principal
          </h1>
          <p className="text-lg text-[rgb(var(--secondary))]">
            Inteligencia artificial aplicada a ventilación mecánica y detección automática de asincronías paciente-ventilador
          </p>
        </motion.div>
        <div className="space-y-6">
          {research.map((item, index) => <ResearchCard key={index} {...item} index={index} />)}
        </div>
      </div>
    </div>;
}