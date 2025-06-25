import { Card, CardContent } from "@/components/ui/card"
import { Bot, MessageSquare, Bug, Code, Zap, GitBranch } from "lucide-react"

export function AIAgent() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "Explain confusing code",
      example: '"Explain what this function does"',
    },
    {
      icon: Bug,
      title: "Fix errors and bugs",
      example: '"Fix the bug in login.js"',
    },
    {
      icon: Code,
      title: "Write new components",
      example: '"Add tests for signup flow"',
    },
    {
      icon: Zap,
      title: "Optimize performance",
      example: '"Optimize this database query"',
    },
    {
      icon: GitBranch,
      title: "Help with Git commands",
      example: '"Create a new branch for this feature"',
    },
  ]

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Agent</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your personal dev assistant can help you understand, fix, and improve your code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <capability.icon className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 font-mono text-sm">
                  <span className="text-green-400">{">"} </span>
                  <span className="text-gray-300">{capability.example}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface Preview */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
                    Can you explain what this React hook does?
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-700 text-white rounded-lg px-4 py-2 max-w-md">
                    This is a custom hook that manages user authentication state. It uses useEffect to check for stored
                    tokens and useState to track login status. Would you like me to add error handling?
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
