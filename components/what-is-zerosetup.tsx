import { Card, CardContent } from "@/components/ui/card"
import { Github, Brain, Monitor, Code, Bot, GitBranch } from "lucide-react"

export function WhatIsZeroSetup() {
  const features = [
    {
      icon: Github,
      title: "Paste any GitHub link",
      description: "Simply paste any GitHub repository URL",
      color: "from-gray-500 to-gray-700",
      delay: "0ms",
    },
    {
      icon: Brain,
      title: "AI auto-detects stack",
      description: "Automatically installs dependencies",
      color: "from-purple-500 to-pink-500",
      delay: "100ms",
    },
    {
      icon: Monitor,
      title: "Online terminal + live preview",
      description: "Full development environment in browser",
      color: "from-blue-500 to-cyan-500",
      delay: "200ms",
    },
    {
      icon: Code,
      title: "Built-in code editor",
      description: "VS Code-like editing experience",
      color: "from-green-500 to-emerald-500",
      delay: "300ms",
    },
    {
      icon: Bot,
      title: "AI assistant included",
      description: "Explain code, fix bugs, write features",
      color: "from-orange-500 to-red-500",
      delay: "400ms",
    },
    {
      icon: GitBranch,
      title: "Push changes to GitHub",
      description: "Commit and push directly from browser",
      color: "from-indigo-500 to-purple-500",
      delay: "500ms",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:100px_100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-500/20 mb-8">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">Intelligent Development</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            What is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              ZeroSetup
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl block mt-2 font-bold text-gray-300">anyway?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            ZeroSetup is a <span className="font-semibold text-white">next-generation developer tool</span> that
            transforms any GitHub link into a
            <span className="text-purple-300"> fully functional, editable, and AI-assisted environment</span> inside
            your browser —<span className="font-semibold text-pink-300"> instantly</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-400 mb-6">Ready to experience the future of development?</p>
          <div className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 cursor-pointer group">
            <span className="font-semibold">See it in action</span>
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
              <svg
                className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
