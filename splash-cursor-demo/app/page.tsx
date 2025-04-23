import { SplashCursor } from "@/components/ui/splash-cursor"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashCursor />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Splash Cursor Demo</h1>
        <p className="text-lg">Move your mouse around to see the fluid effect!</p>
      </div>
    </main>
  )
}
