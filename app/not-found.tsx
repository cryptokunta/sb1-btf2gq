import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      </div>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}