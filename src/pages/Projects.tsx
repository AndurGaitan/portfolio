import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

import smartventImg from '../assets/projects/smartventImg.webp';
import carepassImg from '../assets/projects/carePass.png';
import criticalConnectImg from '../assets/projects/criticalConnectImg.webp';
//import icuToolsImg from '../assets/projects/icu-tools.webp';

export function Projects() {
  const projects = [
    {
      title: 'SmartVent AI',
      description:
        'Plataforma de inteligencia artificial orientada a la detección automática de asincronías paciente–ventilador. Integra datos de ventiladores Neumovent/Tecme vía HL7/RS-232, análisis de curvas y dashboards clínicos para soporte a la toma de decisiones en UCI.',
      tags: ['IA', 'Ventilación mecánica', 'HL7', 'RS-232', 'UCI'],
      image: smartventImg
    },
     {
       title: 'CarePass – Clinical Workflow Assistant',
       description:
         'Asistente digital multiperfil (médico, enfermería, kinesiología) para registro rápido, cálculo de scores, ingreso por voz y organización del flujo clínico. Diseñado para reducir fricción en la documentación y mejorar la trazabilidad en pacientes críticos.',
       tags: ['HealthTech', 'Workflow clínico', 'Voice input', 'Scores UCI'],
       image: carepassImg
     },
    // {
    //   title: 'NeumoTrack – Ventilator Data Recorder',
    //   description:
    //     'Aplicación web para el registro estructurado de parámetros ventilatorios, modos, alarmas y eventos relevantes. Pensada para auditoría, seguimiento longitudinal y construcción de datasets de alta calidad en ventilación mecánica.',
    //   tags: ['Registro ventilatorio', 'Full-Stack', 'Auditoría', 'Data UCI'],
    //   image: neumotrackImg
    // },
    {
      title: 'Critical Connect – Comunicación en UCI',
      description:
        'Herramienta de comunicación asistida para pacientes críticos con limitaciones para expresarse verbalmente. Permite comunicar necesidades básicas y malestares mediante una interfaz simple, accesible y adaptable al contexto de UCI.',
      tags: ['UX en salud', 'Comunicación paciente', 'UCI', 'Accesibilidad'],
      image: criticalConnectImg
    },
    // {
    //   title: 'MIMIC-IV Sepsis Pipeline',
    //   description:
    //     'Pipeline modular en SQL/BigQuery para definir cohortes de sepsis, calcular SOFA y otros scores, y generar tablas wide para análisis avanzado. Enfocado en reproducibilidad, documentación clara y colaboración entre clínicos y data scientists.',
    //   tags: ['BigQuery', 'MIMIC-IV', 'Sepsis', 'SQL', 'Data Science'],
    //   image: mimicImg
    // },
    // {
    //   title: 'ICU Tools – Scores & Utilities',
    //   description:
    //     'Suite de utilidades digitales para UCI que centraliza el cálculo de scores clínicos, recursos de consulta rápida y herramientas de apoyo para el equipo interdisciplinario. Pensada como puerta de entrada a un ecosistema de herramientas críticas.',
    //   tags: ['UCI', 'Scores', 'HealthTech', 'Utilities'],
    //   image: icuToolsImg
    // }
  ];

  return (
    <div className="min-h-screen w-full pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos
          </h1>
          <p className="text-lg text-[rgb(var(--secondary))] max-w-2xl">
            Una selección de proyectos que combinan desarrollo de software, datos clínicos,
            ventilación mecánica e inteligencia artificial aplicada a cuidados críticos.
            Cada uno nace de problemas reales observados en la práctica diaria en UCI.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
