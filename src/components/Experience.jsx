import { motion } from "framer-motion";

// import logos
import transcom from "../assets/transcom.jpg";
import outlier from "../assets/outlier.jpg";
import kelly from "../assets/kelly.jpg";
import optima from "../assets/optima.jpg";

export default function Experience() {
  const experiences = [
    {
      company: "Transcom",
      role: "Technical Support Engineer",
      duration: "July 2024 – Present",
      highlight: "98%+ SLA Compliance",
      logo: transcom,
      points: [
        "Handled 20–25 daily support tickets across multiple channels",
        "Reduced repeat issues by ~20% through root cause analysis",
        "Troubleshot REST API integrations, reducing escalations by ~30%",
        "Collaborated with engineering teams on product improvements",
      ],
    },
    {
      company: "Outlier AI",
      role: "AI Data Annotation Specialist",
      duration: "Nov 2025 – Present",
      highlight: "AI Workflow Quality",
      logo: outlier,
      points: [
        "Annotated and reviewed AI training data",
        "Identified edge cases to improve model performance",
        "Provided structured feedback for system improvements",
      ],
    },
    {
      company: "Kelly Services",
      role: "Technical Support Engineer",
      duration: "July 2022 – March 2024",
      highlight: "15% Faster Resolution",
      logo: kelly,
      points: [
        "Resolved SaaS platform issues including APIs and workflows",
        "Improved first-contact resolution rate by ~15%",
        "Created documentation reducing repeat queries",
      ],
    },
    {
      company: "Optima Communications",
      role: "Services Support Representative",
      duration: "March 2024 – July 2024",
      highlight: "99% Data Accuracy",
      logo: optima,
      points: [
        "Resolved billing discrepancies across client accounts",
        "Reduced invoicing errors by ~15%",
        "Improved data integrity through cross-team collaboration",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
        Experience
      </h2>

      <div className="space-y-10">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden 
            bg-white/5 backdrop-blur-xl border border-white/10"
          >

            {/* Highlight */}
            <div className="px-6 py-2 text-sm 
              bg-gradient-to-r from-purple-500/20 to-pink-500/20 
              text-purple-200 font-medium">
              {exp.highlight}
            </div>

            <div className="grid md:grid-cols-3 gap-6 p-6">

              {/* LEFT */}
              <div className="flex items-start gap-4">

                {/* LOGO */}
                <div className="w-12 h-12 rounded-lg 
                  bg-white/10 flex items-center justify-center 
                  p-2 border border-white/10">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-purple-300 text-sm">
                    {exp.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {exp.duration}
                  </p>
                </div>

              </div>

              {/* RIGHT */}
              <div className="md:col-span-2">
                <ul className="space-y-3 text-purple-200 text-sm leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}