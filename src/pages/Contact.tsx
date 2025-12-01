import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, SendIcon } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Acá más adelante podés integrar un servicio de email o backend
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen w-full pt-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(var(--primary))]/10 rounded-full mb-6">
            <MailIcon className="w-8 h-8 text-[rgb(var(--primary))]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="text-lg text-[rgb(var(--secondary))]">
            Si te interesa colaborar, desarrollar un proyecto en salud digital,
            explorar ideas en inteligencia artificial aplicada a cuidados
            críticos o simplemente conectar, podés escribirme a través de este
            formulario.
          </p>
        </motion.div>

        <motion.form
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          onSubmit={handleSubmit}
          className="bg-[rgb(var(--card))] rounded-2xl p-8 border border-[rgb(var(--border))]"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] transition-all"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] transition-all resize-none"
                placeholder="Contame brevemente en qué te gustaría que trabajemos o cómo puedo ayudarte..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[rgb(var(--primary))] text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <SendIcon className="w-4 h-4" />
              Enviar mensaje
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[rgb(var(--secondary))]">
            También estoy abierto a propuestas de colaboración en investigación,
            desarrollo de productos digitales en salud y participación en
            proyectos vinculados a UCI, IA y tecnología aplicada a la medicina
            crítica.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
