import { DeployGenerator } from "@/components/DeployGenerator"
import { Rocket } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">DeployBTN</span>
          </div>
          <div className="flex-1" />
          <a
            href="https://github.com/magiccode1412/deploy-button-generate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <DeployGenerator />
      </main>
    </div>
  )
}

export default App
