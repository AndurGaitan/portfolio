import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  DatabaseZapIcon,
  BrushIcon,
  FlaskRoundIcon,
  CodeIcon,
  DatabaseIcon,
  BrainIcon,
} from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import smartventImg from "../assets/projects/smartventImg.webp";
import carepassImg from "../assets/projects/carePass.png";
import criticalConnectImg from "../assets/projects/criticalConnectImg.webp";
import KineTrackImg from '../assets/projects/KineTrack.png'

export function Landing() {
  const projects = [
    {
  "title": "KineTrack – Respiratory Monitor",
  "description": "Aplicación web mobile-first para kinesiólogos intensivistas, diseñada para el registro estructurado y la monitorización objetiva de pacientes críticos. Permite documentar soporte respiratorio (VMI, VNI, HFNC), calcular scores clínicos (ROX, HACOR), visualizar parámetros avanzados y generar pases de guardia listos para compartir. Versión demo enfocada en flujos reales de UCI con aislamiento.",
  "tags": ["HealthTech", "UCI", "Ventilación Mecánica", "Kinesiología", "Scores Respiratorios"],
  "image": KineTrackImg,
  "github": "https://github.com/AndurGaitan/KineTrack",
  "link": "https://kine-track.vercel.app/"
},
    {
      title: "CarePass",
      description:
        "Asistente clínico multiperfil (médicos, enfermería, kinesiología) para registro rápido, cálculo de scores, ingreso por voz y flujos dinámicos de atención.",
      tags: [
        "Clinical Workflow",
        "Medical Scoring",
        "Voice Input",
        "Multiprofile Support",
      ],
      image: carepassImg,
      github:"https://github.com/AndurGaitan/CarePassDemo",
       link: "https://care-pass-demo.vercel.app",
    },
    // {
    //   title: "Critical Connect",
    //   description:
    //     "Aplicación de comunicación alternativa diseñada para pacientes en UCI con sedación, intubación o barreras comunicativas. Permite expresar necesidades básicas mediante gestos, voz o selección rápida.",
    //   tags: [
    //     "Assistive Communication",
    //     "ICU Care",
    //     "Accessibility",
    //     "Patient-Centered",
    //   ],
    //   image: criticalConnectImg,
    // },
{
      title: "SmartVent AI",
      description: `Plataforma de inteligencia artificial para análisis en tiempo real de señales ventilatorias y detección automática de asincronías paciente-ventilador.
Integra HL7/RS-232, análisis avanzado de curvas, dashboards clínicos y modelos predictivos.`,
      tags: [
        "AI in Healthcare",
        "Mechanical Ventilation",
        "HL7/RS-232",
        "Real-Time Monitoring",
      ],
      image: smartventImg,
      github:"https://github.com/AndurGaitan/SmartVent",
       link: "https://smart-vent-ruddy.vercel.app/",
    }
  ];
  const techStack = [
    {
      name: "Frontend",
      icon: <BrushIcon className="w-6 h-6" />,
    },
    {
      name: "Backend",
      icon: <FlaskRoundIcon className="w-6 h-6" />,
    },
    {
      name: "Databases",
      icon: <DatabaseIcon className="w-6 h-6" />,
    },
    {
      name: "Machine Learning",
      icon: <BrainIcon className="w-6 h-6" />,
    },
    {
      name: "Cloud",
      icon: <DatabaseZapIcon className="w-6 h-6" />,
    },
    {
      name: "Testing & QA",
      icon: <ArrowRightIcon className="w-6 h-6" />,
    },
  ];
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--foreground))] to-[rgb(var(--secondary))] bg-clip-text text-transparent"
          >
            HealthTech Developer & ICU Researcher
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-xl text-[rgb(var(--secondary))] mb-8 max-w-2xl mx-auto"
          >
            Construyendo soluciones digitales para
            transformar la atención en Unidades de Cuidados Intensivos.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-[rgb(var(--primary))] text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Ver Proyectos
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/cv"
              className="px-8 py-3 border border-[rgb(var(--border))] rounded-lg font-medium hover:bg-[rgb(var(--muted))] transition-colors"
            >
              Descargar CV
            </Link>
          </motion.div>
        </div>
      </section>
       {/* Featured Projects Section */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-3xl font-bold mb-12">Proyectos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} index={index} />
                ))}
              </div>
            </motion.div>
      </section> 
      {/* About Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="bg-[rgb(var(--card))] rounded-3xl p-12 border border-[rgb(var(--border))]"
        >
          <h2 className="text-3xl font-bold mb-6">Mini-About</h2>
          <p className="text-lg text-[rgb(var(--secondary))] mb-4">
            Combino desarrollo de software, investigación y práctica clínica en cuidados críticos para crear soluciones digitales que realmente respondan a los desafíos de la UCI. Mi trabajo se orienta a fortalecer la toma de decisiones, optimizar la seguridad del paciente y elevar la calidad asistencial.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[rgb(var(--primary))] font-medium hover:gap-3 transition-all"
          >
            VER MAS
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
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
                  delay: index * 0.1,
                }}
                className="flex flex-col items-center gap-3 p-6 bg-[rgb(var(--card))] rounded-xl border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-all"
              >
                <div className="text-[rgb(var(--primary))]">{tech.icon}</div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
