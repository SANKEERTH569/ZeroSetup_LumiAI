import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap, Brain, Github, Globe, Shield, Clock } from "lucide-react"

export function WhyDevelopersLove() {
  const features = [
    {
      icon: Zap,
      feature: "Zero Config",
      benefit: "Skip reading README.md",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Brain,
      feature: "AI First",
      benefit: "Let the AI fix, build, and commit",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Github,
      feature: "GitHub Connected",
      benefit: "Work with your own repos",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Globe,
      feature: "Cross-Platform",
      benefit: "Just need a browser",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      feature: "Secure",
      benefit: "Sandboxed cloud container for each project",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      feature: "Fast",
      benefit: "Boot environments in seconds",
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Developers{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Love</span>{" "}
            ZeroSetup
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.feature}</h3>
                    <p className="text-gray-300 text-sm">{item.benefit}</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">Available now</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
