import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icons"

export function DashboardHero() {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background px-6 py-8 md:px-8 md:py-12">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Icon name="rocket" className="mr-2 h-4 w-4" />
            Off-Grid Accelerator
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering Sustainable Communities
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Join our network of innovators building resilient, off-grid solutions for a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Launch a Project
            </Button>
            <Button variant="outline" size="lg">
              Join Community
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
              alt="Solar panels in nature"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}