import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Link, Brain, Wrench, Code, Eye, GitCommit } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Link,
      title: "Paste your GitHub link",
      description: "Simply paste any GitHub repository URL into ZeroSetup",
    },
    {
      icon: Brain,
      title: "AI analyzes the codebase",
      description: "ZeroSetup analyzes the codebase using AI to understand the stack",
    },
    {
      icon: Wrench,
      title: "Environment built in real-time",
      description: "Python, Node, Java, and more - all set up automatically",
    },
    {
      icon: Code,
      title: "Edit using in-browser IDE",
      description: "Full-featured code editor with syntax highlighting and IntelliSense",
    },
    {
      icon: Eye,
      title: "Preview instantly",
      description: "See your app or service running live in the browser",
    },
    {
      icon: GitCommit,
      title: "Commit & push to GitHub",
      description: "Push your changes directly back to GitHub with one click",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
