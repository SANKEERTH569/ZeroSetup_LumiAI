import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Shield, Zap } from "lucide-react"

export function BuiltByLumi() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lumi AI</span>
          </h2>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-8">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're a small team on a mission to make software setup obsolete. Lumi AI builds developer tools that give
              superpowers to coders — powered by AI, security, and simplicity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-400 text-sm text-center">Intelligent automation for developers</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Secure</h3>
                <p className="text-gray-400 text-sm text-center">Enterprise-grade security standards</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Simple</h3>
                <p className="text-gray-400 text-sm text-center">Intuitive tools that just work</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
