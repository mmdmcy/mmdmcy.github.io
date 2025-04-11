import React from 'react';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';
import type { Education } from '../types';

const education: Education[] = [
  {
    school: {
      en: 'Hogeschool Utrecht',
      nl: 'Hogeschool Utrecht',
      fr: 'Université des Sciences Appliquées d\'Utrecht',
      de: 'Hochschule Utrecht',
      el: 'Πανεπιστήμιο Εφαρμοσμένων Επιστημών της Ουτρέχτης',
      sq: 'Universiteti i Shkencave të Aplikuara Utrecht'
    },
    degree: {
      en: 'Bachelor of Science - BS, HBO-ICT (Artificial Intelligence)',
      nl: 'Bachelor of Science - BS, HBO-ICT (Kunstmatige Intelligentie)',
      fr: 'Licence en Sciences - BS, TIC (Intelligence Artificielle)',
      de: 'Bachelor of Science - BS, HBO-ICT (Künstliche Intelligenz)',
      el: 'Πτυχίο Επιστημών - BS, ΤΠΕ (Τεχνητή Νοημοσύνη)',
      sq: 'Bachelor i Shkencave - BS, TIK (Inteligjencë Artificiale)'
    },
    period: {
      en: 'Sep 2023 - Jun 2027',
      nl: 'Sep 2023 - Jun 2027',
      fr: 'Sep 2023 - Juin 2027',
      de: 'Sep 2023 - Jun 2027',
      el: 'Σεπ 2023 - Ιούν 2027',
      sq: 'Shta 2023 - Qer 2027'
    },
    specialization: {
      en: 'Specialisation in Artificial Intelligence (AI), HBO-ICT',
      nl: 'Specialisatie in Kunstmatige Intelligentie (AI), HBO-ICT',
      fr: 'Spécialisation en Intelligence Artificielle (IA), TIC',
      de: 'Spezialisierung in Künstlicher Intelligenz (KI), HBO-ICT',
      el: 'Εξειδίκευση στην Τεχνητή Νοημοσύνη (ΤΝ), ΤΠΕ',
      sq: 'Specializim në Inteligjencë Artificiale (IA), TIK'
    },
    logo: '/hu.png',
    skills: ['C++', 'Python', 'Machine Learning', 'AI', 'Mathematics', 'Computer Science', 'SQL', 'Data Visualization', 'Data Analytics', 'Scientific Research'],
  },
  {
    school: {
      en: 'HKU',
      nl: 'HKU',
      fr: 'HKU',
      de: 'HKU',
      el: 'HKU',
      sq: 'HKU'
    },
    degree: {
      en: 'Bachelor of Science - BS, Bachelor Creative Media and Game Technologies',
      nl: 'Bachelor of Science - BS, Bachelor Creatieve Media en Game Technologieën',
      fr: 'Licence en Sciences - BS, Technologies des Médias Créatifs et des Jeux',
      de: 'Bachelor of Science - BS, Bachelor Kreative Medien und Spieltechnologien',
      el: 'Πτυχίο Επιστημών - BS, Δημιουργικά Μέσα και Τεχνολογίες Παιχνιδιών',
      sq: 'Bachelor i Shkencave - BS, Teknologji të Mediave Kreative dhe Lojërave'
    },
    period: {
      en: 'Sep 2022 - Aug 2023',
      nl: 'Sep 2022 - Aug 2023',
      fr: 'Sep 2022 - Août 2023',
      de: 'Sep 2022 - Aug 2023',
      el: 'Σεπ 2022 - Αύγ 2023',
      sq: 'Shta 2022 - Gus 2023'
    },
    specialization: {
      en: 'Specialisation in Game Development',
      nl: 'Specialisatie in Game Development',
      fr: 'Spécialisation en Développement de Jeux',
      de: 'Spezialisierung in Spieleentwicklung',
      el: 'Εξειδίκευση στην Ανάπτυξη Παιχνιδιών',
      sq: 'Specializim në Zhvillimin e Lojërave'
    },
    logo: '/hku.png',
    skills: ['C#', 'Game Development', 'Unity', '3D Modeling', 'Teamleadership', 'Problem Solving', 'Game Design', 'Game Art', 'Scrum'],
  },
];

export const Education: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t.education}
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 flex"
            >
              <div className="flex-shrink-0 mr-6">
                <img
                  src={edu.logo}
                  alt={edu.school[language]}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.school[language]}
                </h3>
                <p className="text-gray-900 dark:text-white mt-1">{edu.degree[language]}</p>
                <p className="text-gray-900 dark:text-white">{edu.period[language]}</p>
                <p className="text-gray-900 dark:text-white mt-2">
                  {edu.specialization[language]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};