import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

export default function Resume() {
    return (
        <div className="min-h-screen px-6 py-20 max-w-7xl mx-auto text-white">

            {/* Back */}
            <Link
                to="/"
                className="fixed top-6 left-6 z-50
        px-4 py-2 rounded-full text-sm
        bg-white/10 backdrop-blur-md 
        border border-white/20 
        hover:bg-white/20 transition"
            >
                ← Back
            </Link>

            <div className="grid md:grid-cols-4 gap-12">

                {/* LEFT */}
                <div className="md:col-span-1 space-y-6">

                    <h1 className="text-2xl font-semibold">
                        Philomina Divita
                    </h1>

                    <p className="text-purple-300 text-sm">
                        Technical Support Engineer
                    </p>

                    <div className="text-sm text-gray-400 space-y-1">
                        <p>Kitchener, Ontario</p>
                        <p>divitap1281@gmail.com</p>
                    </div>

                    <a
                        href={resume}
                        download
                        className="block text-center px-5 py-3 rounded-full
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white text-sm font-medium
            hover:scale-105 transition"
                    >
                        Download Resume
                    </a>

                </div>

                {/* RIGHT */}
                <div className="md:col-span-3 space-y-14">

                    {/* SKILLS (MAIN SECTION) */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-8 text-white">
                            Skills
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Block 1 */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-purple-300 text-sm mb-4">Programming & APIs</p>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {["Python", "SQL", "REST APIs", "JSON", "cURL", "HTTP"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-white/10 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-purple-300 text-sm mb-4">Data & Analysis</p>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {["EDA", "Pattern Recognition", "Data Quality", "Anomaly Detection"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-white/10 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Block 3 */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-purple-300 text-sm mb-4">Tools & Platforms</p>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {["Postman", "Zendesk", "Jira", "Confluence", "Salesforce"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-white/10 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Block 4 */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-purple-300 text-sm mb-4">AI & Emerging Tech</p>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {["AI Workflows", "Data Annotation", "Model Evaluation"].map((item) => (
                                        <span key={item} className="px-3 py-1 bg-white/10 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section>
                        <h2 className="text-xl font-semibold text-purple-300 mb-8">
                            Experience
                        </h2>

                        <div className="space-y-10">

                            {/* Transcom */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                                <div className="mb-4">
                                    <h3 className="text-white font-medium">
                                        Technical Support Engineer — Transcom
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        July 2024 – Present
                                    </p>
                                </div>

                                {/* Impact */}
                                <p className="text-purple-300 text-sm mb-4">
                                    High-volume SaaS support with strong focus on API debugging, system reliability, and root cause analysis.
                                </p>

                                {/* Details */}
                                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                                    <li>• Handled 20–25 support tickets daily across chat, email, and phone while maintaining 98%+ SLA compliance</li>
                                    <li>• Performed deep root cause analysis using logs, backend records, and error patterns, reducing repeat issues by ~20%</li>
                                    <li>• Troubleshot REST API integrations end-to-end, including request/response validation and authentication issues</li>
                                    <li>• Reduced integration-related escalations to engineering by ~30%</li>
                                    <li>• Acted as a liaison between customers and internal teams, translating issues into structured Jira tickets</li>
                                </ul>

                            </div>

                            {/* Outlier AI */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                                <div className="mb-4">
                                    <h3 className="text-white font-medium">
                                        AI Data Annotation Specialist — Outlier AI
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        Nov 2025 – Present
                                    </p>
                                </div>

                                <p className="text-purple-300 text-sm mb-4">
                                    Worked on AI training workflows focusing on data quality, edge case detection, and model evaluation.
                                </p>

                                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                                    <li>• Reviewed and annotated datasets across text, images, and workflow scenarios</li>
                                    <li>• Identified subtle edge cases and inconsistencies affecting model performance</li>
                                    <li>• Provided structured feedback to improve model reliability and output quality</li>
                                    <li>• Built practical experience in AI evaluation and quality assurance pipelines</li>
                                </ul>

                            </div>

                            {/* Kelly Services */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                                <div className="mb-4">
                                    <h3 className="text-white font-medium">
                                        Technical Support Engineer — Kelly Services
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        July 2022 – March 2024
                                    </p>
                                </div>

                                <p className="text-purple-300 text-sm mb-4">
                                    Delivered SaaS product support with focus on API issues, workflow failures, and documentation.
                                </p>

                                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                                    <li>• Resolved platform issues including access errors, workflow failures, and API integration bugs</li>
                                    <li>• Improved first-contact resolution rate by ~15% through efficient debugging</li>
                                    <li>• Built and maintained knowledge base articles reducing repeat issues</li>
                                    <li>• Escalated complex bugs with detailed logs and diagnostics, improving engineering turnaround time</li>
                                </ul>

                            </div>

                            {/* Optima */}
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">

                                <div className="mb-4">
                                    <h3 className="text-white font-medium">
                                        Services Support Representative — Optima Communications
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        March 2024 – July 2024
                                    </p>
                                </div>

                                <p className="text-purple-300 text-sm mb-4">
                                    Focused on billing systems, data accuracy, and operational support workflows.
                                </p>

                                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                                    <li>• Resolved billing discrepancies maintaining ~99% data accuracy</li>
                                    <li>• Reduced invoicing errors by ~15% through systematic analysis</li>
                                    <li>• Collaborated with internal teams to identify and fix recurring data issues</li>
                                </ul>

                            </div>

                        </div>
                    </section>

                    {/* EDUCATION + CERTS */}
                    <section>
                        <h2 className="text-xl font-semibold text-purple-300 mb-4">
                            Education & Certifications
                        </h2>

                        <div className="space-y-5 text-sm">

                            {/* Masters */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-white font-medium">
                                        Master of Engineering — Electrical & Computer Engineering
                                    </p>
                                    <p className="text-gray-400">
                                        University of Windsor, Canada
                                    </p>
                                </div>
                                <p className="text-gray-500 text-xs whitespace-nowrap">
                                    2021 – 2022
                                </p>
                            </div>

                            {/* Bachelors */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-white font-medium">
                                        Bachelor of Engineering — Electronics & Communication
                                    </p>
                                    <p className="text-gray-400">
                                        PES University, Bengaluru
                                    </p>
                                </div>
                                <p className="text-gray-500 text-xs whitespace-nowrap">
                                    2016 – 2020
                                </p>
                            </div>

                            {/* Certifications */}
                            <div className="pt-4">
                                <p className="text-purple-300 mb-2">Certifications</p>

                                <ul className="text-gray-300 space-y-1">
                                    <li>• Cisco Certified Network Addressing & Troubleshooting</li>
                                    <li>• Databricks Lakehouse Fundamentals</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
}