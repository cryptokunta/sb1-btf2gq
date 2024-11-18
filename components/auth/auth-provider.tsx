"use client"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "volunteer" | "backer" | "member"
  verified: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (data: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token and validate
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      // Implement auth check logic
      setIsLoading(false)
    } catch (error) {
      console.error("Auth check failed:", error)
      setIsLoading(false)
    }
  }

  async function login(email: string, password: string) {
    // Implement login logic
  }

  async function logout() {
    // Implement logout logic
  }

  async function register(data: any) {
    // Implement registration logic
  }

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}