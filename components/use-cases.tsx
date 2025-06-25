import { Card, CardContent } from "@/components/ui/card"
import { Rocket, GraduationCap, FileText, Users, Laptop } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: Rocket,
      title: "Hackathons and quick testing",
      description: "Rapidly prototype and test ideas without setup overhead",
    },
    {
      icon: GraduationCap,
      title: "Student coding projects",
      description: "Focus on learning and coding, not environment configuration",
    },
    {
      icon: FileText,
      title: "Resume and portfolio previews",
      description: "Showcase your projects with live, interactive demos",
    },
    {
      icon: Users,
      title: "Recruiters reviewing code",
      description: "Instantly run and evaluate candidate submissions",
    },
    {
      icon: Laptop,
      title: "Trying open-source tools",
      description: "Test and explore new libraries without local installation",
    },
  ]

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Perfect for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every</span>{" "}
            Use Case
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
