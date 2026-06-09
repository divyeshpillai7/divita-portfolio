import { motion } from "framer-motion";

export default function Projects() {
  const work = [
    {
      title: "Reducing Repeated Support Issues",
      context:
        "Worked in a high-volume SaaS support environment handling complex technical issues across APIs and backend systems.",
      impact: "Reduced repeat issues by ~20%",
      contributions: [
        "Analyzed logs, backend data, and error patterns to identify recurring failures",
        "Performed root cause analysis across multiple system layers",
        "Collaborated with engineering teams to implement long-term fixes",
      ],
      tech: ["REST APIs", "Logs Analysis", "SQL", "Debugging"],
    },
    {
      title: "API Integration Troubleshooting",
      context:
        "Resolved integration issues affecting customer systems by analyzing request-response cycles and authentication flows.",
      impact: "Reduced escalations by ~30%",
      contributions: [
        "Debugged REST API issues including payload validation and auth failures",
        "Used tools like Postman and cURL to simulate and test integrations",
        "Improved integration success rate through structured troubleshooting",
      ],
      tech: ["REST APIs", "Postman", "cURL", "JSON"],
    },
    {
      title: "AI Data Quality Improvement",
      context:
        "Worked on AI training workflows to improve model performance and reliability through data annotation and validation.",
      impact: "Improved model output quality",
      contributions: [
        "Reviewed and annotated large datasets across multiple formats",
        "Identified edge cases and inconsistencies in model outputs",
        "Provided structured feedback to improve AI system performance",
      ],
      tech: ["AI Workflows", "Data Annotation", "Quality Analysis"],
    },
    {
      title: "Knowledge Base & Documentation System",
      context:
        "Developed internal documentation to streamline issue resolution and reduce repetitive queries.",
      impact: "Reduced handling time & repeat tickets",
      contributions: [
        "Created troubleshooting guides and knowledge base articles",
        "Standardized issue resolution processes across teams",
        "Enabled faster onboarding and improved team efficiency",
      ],
      tech: ["Confluence", "Documentation", "Process Optimization"],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
        Work Highlights
      </h2>

      <div className="space-y-12">

        {work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl 
            bg-white/5 backdrop-blur-xl 
            border border-white/10"
          >

            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Impact Badge */}
              <span className="px-4 py-1 text-sm rounded-full 
                bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                text-purple-200 border border-purple-400/20">
                {item.impact}
              </span>

            </div>

            {/* CONTEXT */}
            <p className="text-purple-300 text-sm leading-relaxed mb-6">
              {item.context}
            </p>

            {/* CONTRIBUTIONS */}
            <ul className="space-y-3 text-purple-200 text-sm leading-relaxed mb-6">
              {item.contributions.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-3">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full 
                  bg-purple-500/10 border border-purple-400/20 
                  text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}