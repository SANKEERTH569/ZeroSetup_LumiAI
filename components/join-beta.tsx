"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User, Github, MessageSquare } from "lucide-react"
import { useState } from "react"

export function JoinBeta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    useCase: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Beta</span>
          </h2>
          <p className="text-xl text-gray-300">Be among the first to experience the future of development</p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-center">Request Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile (optional)
                </label>
                <Input
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourusername"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Use case or feedback
                </label>
                <Textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  placeholder="Tell us how you plan to use ZeroSetup or any feedback you have..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
