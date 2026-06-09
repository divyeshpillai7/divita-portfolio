export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - STORY */}
        <div className="space-y-6">

          <h3 className="text-2xl md:text-3xl font-semibold text-purple-200 leading-snug">
            I solve complex software problems by connecting users, data, and systems.
          </h3>

          <p className="text-purple-300 leading-relaxed">
            With over 4 years of experience in SaaS environments, I specialize in 
            diagnosing and resolving complex technical issues across APIs, data systems, 
            and application workflows.
          </p>

          <p className="text-purple-400 leading-relaxed">
            My work goes beyond support — I analyze patterns in large datasets, 
            identify root causes, and collaborate with engineering and product teams 
            to improve system reliability and user experience.
          </p>

          {/* Highlight */}
          <div className="mt-6 p-5 rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur-xl">
            <p className="text-purple-200 font-medium">
              I focus on solving issues at their root to improve long-term system reliability.
            </p>
          </div>

        </div>

        {/* RIGHT - EXPERIENCE CARDS */}
        <div className="grid gap-6">

          {[
            {
              title: "SaaS & Technical Support",
              desc: "Handled high-volume support systems with 98%+ SLA compliance while maintaining strong customer satisfaction."
            },
            {
              title: "API & Data Troubleshooting",
              desc: "Debugged REST APIs, validated JSON payloads, and reduced integration escalations significantly."
            },
            {
              title: "Root Cause Analysis",
              desc: "Analyzed logs, datasets, and error patterns to reduce recurring issues and improve system stability."
            },
            {
              title: "AI & Data Annotation",
              desc: "Worked on AI workflows, identifying edge cases and improving model output quality."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl 
              bg-white/10 backdrop-blur-xl 
              border border-white/20 
              hover:bg-purple-500/10 
              transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-purple-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}