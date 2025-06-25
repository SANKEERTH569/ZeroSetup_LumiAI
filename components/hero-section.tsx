"use client"

import { Button } from "@/components/ui/button"
import { Github, Play, Users, Sparkles, Terminal, Code, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [terminalText, setTerminalText] = useState("")
  const [currentStep, setCurrentStep] = useState(0)

  const terminalSteps = [
    "$ zerosetup https://github.com/user/awesome-project",
    "🧠 AI analyzing repository...",
    "📦 Installing dependencies...",
    "🚀 Environment ready!",
    "✨ Your AI assistant is standing by",
  ]

  useEffect(() => {
    setMounted(true)

    // Typewriter effect for terminal
    const typewriterInterval = setInterval(() => {
      if (currentStep < terminalSteps.length) {
        const currentText = terminalSteps[currentStep]
        setTerminalText((prev) => {
          if (prev.length < currentText.length) {
            return currentText.slice(0, prev.length + 1)
          } else {
            setCurrentStep((s) => s + 1)
            return prev + "\n"
          }
        })
      }
    }, 100)

    return () => clearInterval(typewriterInterval)
  }, [currentStep])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <div className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-purple-400 group-hover:animate-spin" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] animate-fade-in-up animation-delay-200">
          <span className="block">Run Any</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            GitHub Repo
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-bold mt-2">
            <span className="text-white">Instantly with </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-light">
          <span className="font-semibold text-white">ZeroSetup by Lumi AI</span> transforms any GitHub repository into a
          <span className="text-purple-300"> fully functional development environment</span> —
          <span className="text-pink-300"> no installation required</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center">
              <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Try Live Demo
            </div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-purple-400/50 text-white hover:bg-white/10 px-10 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Join Beta Waitlist
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="group text-gray-300 hover:text-white px-8 py-6 text-lg font-medium rounded-2xl hover:bg-white/5 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            View Source
          </Button>
        </div>

        {/* Enhanced Terminal */}
        <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="relative group">
            {/* Terminal glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm font-mono">zerosetup.ai</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-purple-400" />
                  <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-8 font-mono text-left min-h-[200px]">
                <div className="text-green-400 text-lg leading-relaxed">
                  <pre className="whitespace-pre-wrap">{terminalText}</pre>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats or features preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">0s</span>
            </div>
            <div className="text-gray-400 font-medium">Setup Time</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100+</span>
            </div>
            <div className="text-gray-400 font-medium">Languages Supported</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">∞</span>
            </div>
            <div className="text-gray-400 font-medium">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
