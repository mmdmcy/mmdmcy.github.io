import React from 'react';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: {
      en: 'Hogeschool Utrecht',
      nl: 'Hogeschool Utrecht',
      fr: 'Université des Sciences Appliquées d\'Utrecht',
      de: 'Hochschule Utrecht',
      el: 'Πανεπιστήμιο Εφαρμοσμένων Επιστημών της Ουτρέχτης',
      sq: 'Universiteti i Shkencave të Aplikuara Utrecht'
    },
    position: {
      en: 'Geo Machine Learning Engineer',
      nl: 'Geo Machine Learning Engineer',
      fr: 'Ingénieur en Machine Learning Géographique',
      de: 'Geo Machine Learning Ingenieur',
      el: 'Μηχανικός Γεωγραφικής Μηχανικής Μάθησης',
      sq: 'Inxhinier i Machine Learning Gjeografik'
    },
    period: {
      en: 'Feb 2025 - Present',
      nl: 'Feb 2025 - Heden',
      fr: 'Fév 2025 - Présent',
      de: 'Feb 2025 - Heute',
      el: 'Φεβ 2025 - Παρόν',
      sq: 'Shku 2025 - Tani'
    },
    location: {
      en: 'Utrecht, Netherlands',
      nl: 'Utrecht, Nederland',
      fr: 'Utrecht, Pays-Bas',
      de: 'Utrecht, Niederlande',
      el: 'Ουτρέχτη, Ολλανδία',
      sq: 'Utrecht, Holandë'
    },
    logo: '/hu.png',
    achievements: {
      en: [
        'Enhanced Housing Analysis: Trained machine learning models to detect rooftops, increasing the accuracy of sustainable solutions by 60%.',
        'Efficient Performance: Developed visual machine learning systems integrated with geospatial data, achieving a 55% improvement in precision for roof analysis.',
        'Faster Results: Converted geospatial data into actionable insights, reducing design time by 50%.'
      ],
      nl: [
        'Verbeterde Woninganalyse: Getrainde machine learning modellen om daken te detecteren, waardoor de nauwkeurigheid van duurzame oplossingen met 60% is verhoogd.',
        'Efficiënte Prestaties: Ontwikkelde visuele machine learning systemen geïntegreerd met geografische data, wat resulteerde in 55% verbetering in precisie voor dakanalyse.',
        'Snellere Resultaten: Geografische data omgezet in bruikbare inzichten, waardoor de ontwerptijd met 50% is verminderd.'
      ],
      fr: [
        'Analyse Améliorée du Logement : Modèles de machine learning entraînés pour détecter les toits, augmentant la précision des solutions durables de 60%.',
        'Performance Efficace : Développement de systèmes de machine learning visuel intégrés aux données géospatiales, atteignant une amélioration de 55% de la précision pour l\'analyse des toits.',
        'Résultats Plus Rapides : Conversion des données géospatiales en insights actionnables, réduisant le temps de conception de 50%.'
      ],
      de: [
        'Verbesserte Wohnungsanalyse: Trainierte Machine-Learning-Modelle zur Erkennung von Dächern, wodurch die Genauigkeit nachhaltiger Lösungen um 60% gesteigert wurde.',
        'Effiziente Leistung: Entwickelte visuelle Machine-Learning-Systeme integriert mit Geodaten, was zu einer 55%igen Verbesserung der Präzision bei der Dachanalyse führte.',
        'Schnellere Ergebnisse: Umwandlung von Geodaten in umsetzbare Erkenntnisse, wodurch die Designzeit um 50% reduziert wurde.'
      ],
      el: [
        'Βελτιωμένη Ανάλυση Κατοικιών: Εκπαιδευμένα μοντέλα μηχανικής μάθησης για την ανίχνευση στεγών, αυξάνοντας την ακρίβεια των βιώσιμων λύσεων κατά 60%.',
        'Αποδοτική Απόδοση: Ανάπτυξη οπτικών συστημάτων μηχανικής μάθησης ενσωματωμένων με γεωχωρικά δεδομένα, επιτυγχάνοντας 55% βελτίωση στην ακρίβεια για την ανάλυση στεγών.',
        'Ταχύτερα Αποτελέσματα: Μετατροπή γεωχωρικών δεδομένων σε αξιοποιήσιμες πληροφορίες, μειώνοντας τον χρόνο σχεδιασμού κατά 50%.'
      ],
      sq: [
        'Analizë e Përmirësuar e Banesave: Modele të trajnuara të machine learning për të zbuluar çatitë, duke rritur saktësinë e zgjidhjeve të qëndrueshme me 60%.',
        'Performancë Efikase: Zhvillimi i sistemeve vizuale të machine learning të integruara me të dhëna gjeohapësinore, duke arritur 55% përmirësim në saktësi për analizën e çative.',
        'Rezultate më të Shpejta: Konvertimi i të dhënave gjeohapësinore në njohuri të veprueshme, duke reduktuar kohën e dizajnit me 50%.'
      ]
    }
  },
  {
    company: {
      en: 'Studentaanhuis',
      nl: 'Studentaanhuis',
      fr: 'Studentaanhuis',
      de: 'Studentaanhuis',
      el: 'Studentaanhuis',
      sq: 'Studentaanhuis'
    },
    position: {
      en: 'ICT Specialist',
      nl: 'ICT Specialist',
      fr: 'Spécialiste en TIC',
      de: 'IKT-Spezialist',
      el: 'Ειδικός ΤΠΕ',
      sq: 'Specialist ICT'
    },
    period: {
      en: 'Sep 2024 - Present',
      nl: 'Sep 2024 - Heden',
      fr: 'Sep 2024 - Présent',
      de: 'Sep 2024 - Heute',
      el: 'Σεπ 2024 - Παρόν',
      sq: 'Shta 2024 - Tani'
    },
    location: {
      en: 'Amersfoort, Netherlands',
      nl: 'Amersfoort, Nederland',
      fr: 'Amersfoort, Pays-Bas',
      de: 'Amersfoort, Niederlande',
      el: 'Άμερσφορτ, Ολλανδία',
      sq: 'Amersfoort, Holandë'
    },
    logo: '/studentaanhuis.png',
    achievements: {
      en: [
        'Resolving complex technical challenges with a 98% success rate through smart analysis and optimization.',
        'Providing high-quality support with analytical insight, resulting in a satisfaction score of 9.2/10.',
        'Implementing AI and ML techniques for efficient solutions, 85% faster than the standard due to automation.'
      ],
      nl: [
        'Oplossen van complexe technische uitdagingen met een slagingspercentage van 98% door slimme analyse en optimalisatie.',
        'Leveren van hoogwaardige ondersteuning met analytisch inzicht, resulterend in een tevredenheidsscore van 9,2/10.',
        'Implementeren van AI- en ML-technieken voor efficiënte oplossingen, 85% sneller dan de standaard door automatisering.'
      ],
      fr: [
        'Résolution de défis techniques complexes avec un taux de réussite de 98% grâce à l\'analyse et l\'optimisation intelligentes.',
        'Fourniture d\'un support de haute qualité avec une perspective analytique, résultant en un score de satisfaction de 9,2/10.',
        'Implémentation de techniques d\'IA et de ML pour des solutions efficaces, 85% plus rapides que la norme grâce à l\'automatisation.'
      ],
      de: [
        'Lösung komplexer technischer Herausforderungen mit einer Erfolgsquote von 98% durch intelligente Analyse und Optimierung.',
        'Bereitstellung hochwertiger Unterstützung mit analytischer Einsicht, resultierend in einer Zufriedenheitsbewertung von 9,2/10.',
        'Implementierung von KI- und ML-Techniken für effiziente Lösungen, 85% schneller als der Standard durch Automatisierung.'
      ],
      el: [
        'Επίλυση σύνθετων τεχνικών προκλήσεων με ποσοστό επιτυχίας 98% μέσω έξυπνης ανάλυσης και βελτιστοποίησης.',
        'Παροχή υψηλής ποιότητας υποστήριξης με αναλυτική διορατικότητα, με αποτέλεσμα βαθμολογία ικανοποίησης 9,2/10.',
        'Εφαρμογή τεχνικών AI και ML για αποδοτικές λύσεις, 85% ταχύτερα από το πρότυπο λόγω αυτοματοποίησης.'
      ],
      sq: [
        'Zgjidhja e sfidave komplekse teknike me një normë suksesi 98% përmes analizës dhe optimizimit të zgjuar.',
        'Ofrimi i mbështetjes së cilësisë së lartë me njohuri analitike, duke rezultuar në një vlerësim kënaqësie 9.2/10.',
        'Implementimi i teknikave AI dhe ML për zgjidhje efikase, 85% më shpejt se standardi për shkak të automatizimit.'
      ]
    }
  }
];

export const Experience: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t.experience}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={exp.logo}
                    alt={exp.company[language]}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position[language]}
                  </h3>
                  <h4 className="text-lg text-gray-900 dark:text-white mt-1">
                    {exp.company[language]}
                  </h4>
                  <p className="text-gray-900 dark:text-white mt-1">
                    {exp.period[language]} | {exp.location[language]}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements[language].map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-900 dark:text-white flex items-start"
                      >
                        <span className="mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};