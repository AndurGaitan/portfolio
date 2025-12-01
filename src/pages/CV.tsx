import React from "react";
import { motion } from "framer-motion";
import {
  DownloadIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
} from "lucide-react";

import CVFile from '../assets/cv.pdf'

export function CV() {
  const experience = [
    {
      title: "Kinesiólogo en Unidad Cuidados Críticos",
      company: "Hospital Centro de Salud Zenón J. Santillán – SIPROSA",
      period: "2020 - Actualidad",
      description:
        "Atención de pacientes críticos en unidades de cuidados intensivos, con foco en ventilación mecánica, movilización precoz, rehabilitación respiratoria y calidad asistencial.",
    },
    {
      title: "Kinesiólogo en Unidad de Cuidados Intensivos",
      company: "Sanatorio Rivadavia",
      period: "2021 - Actualidad",
      description:
        "Trabajo en equipo interdisciplinario en UCI, participando en la toma de decisiones sobre ventilación mecánica, estrategias de movilización y seguimiento funcional del paciente crítico.",
    },
    {
      title: "Coordinador del Área de Kinesiología",
      company: "Sanity Care – Internación Domiciliaria",
      period: "2023 - 2024",
      description:
        "Coordinación y liderazgo del equipo de kinesiólogos, reestructuración de procesos asistenciales, organización de la atención y puesta en marcha de sistemas de registro kinésico para mejorar la trazabilidad.",
    },
  ];

  const education = [
    {
      degree: "Doctorando en Bioingeniería (en curso)",
      institution:
        "Instituto Universitario Hospital Italiano de Buenos Aires (IUHIBA)",
      period: "2025 - Actualidad",
    },
    {
      degree: "Licenciatura en Kinesiología",
      institution: "Universidad Nacional de Tucumán (UNT)",
      period: "2015 - 2020",
    },
  ];

  const skills = [
        "Desarrollo web Full Stack (JavaScript / React / Node.js)",
        "Diseño de herramientas digitales para UCI",
    "Liderazgo, coordinación y trabajo interdisciplinario",
     "Inteligencia artificial aplicada a la salud",
    "Kinesiología intensiva y manejo del paciente crítico",
    "Programación en Python",
    "Análisis de datos clínicos (SQL / BigQuery / MIMIC-IV)",
    "Integraciones HL7 y RS-232 con dispositivos médicos",
   
  ];

  const projects = [
    "SmartVent AI – Sistema de IA para detección de asincronías paciente–ventilador y monitorización inteligente de ventilación mecánica.",
    "CarePass – Asistente digital multiperfil para flujos clínicos, cálculo de scores y registro ágil en UCI.",
    "NeumoTrack – Registro estructurado de parámetros ventilatorios para auditoría, seguimiento y generación de datasets de calidad.",
    "Critical Connect – Herramienta de comunicación asistida para pacientes críticos con limitaciones para expresarse.",
  ];

  return (
    <div className="min-h-screen w-full pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Currículum Vitae
              </h1>
              <p className="text-lg text-[rgb(var(--secondary))]">
                Licenciado en Kinesiología ·  Doctorando en Bioingeniería · HealthTech & AI Developer ·
               
              </p>
            </div>
            <a
              href={CVFile}
              download="Andres_Gaitan_CV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-[rgb(var(--primary))] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <DownloadIcon className="w-4 h-4" />
              Descargar
            </a>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <BriefcaseIcon className="w-6 h-6 text-[rgb(var(--primary))]" />
            <h2 className="text-2xl font-bold">Experiencia profesional</h2>
          </div>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-[rgb(var(--card))] rounded-xl p-6 border border-[rgb(var(--border))]"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-[rgb(var(--secondary))]">
                    {item.period}
                  </span>
                </div>
                <p className="text-[rgb(var(--primary))] mb-3">
                  {item.company}
                </p>
                <p className="text-sm text-[rgb(var(--secondary))]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCapIcon className="w-6 h-6 text-[rgb(var(--primary))]" />
            <h2 className="text-2xl font-bold">Formación académica</h2>
          </div>
          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-[rgb(var(--card))] rounded-xl p-6 border border-[rgb(var(--border))]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-[rgb(var(--secondary))]">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-sm text-[rgb(var(--secondary))]">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <AwardIcon className="w-6 h-6 text-[rgb(var(--primary))]" />
            <h2 className="text-2xl font-bold">Habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="px-4 py-2 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-lg text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Proyectos seleccionados</h2>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-[rgb(var(--primary))] rounded-full mt-2" />
                <p className="text-[rgb(var(--secondary))]">{project}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
