import { Card } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const stats = [
  {
    title: "Active Projects",
    value: "-",
    change: "Add your first project",
    icon: "rocket"
  },
  {
    title: "Community Members",
    value: "-",
    change: "Join the community",
    icon: "users"
  },
  {
    title: "Resources Shared",
    value: "-",
    change: "Share your first resource",
    icon: "share"
  },
  {
    title: "Success Rate",
    value: "-",
    change: "Complete your first project",
    icon: "target"
  }
]

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </div>
            <div className="text-primary">
              <Icon name={stat.icon} className="h-5 w-5" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}