'use client'

import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors
} from 'chart.js'
import githubStats from '@/data/github-stats.json'
import { GitHubStats } from '@/types/github'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GitFork, Star } from 'lucide-react'
import Link from 'next/link'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Colors)

const stats = githubStats as GitHubStats

// HSL values for Zinc color palette (without commas)
const zincColors = [
    'hsl(240 4% 16% / 0.9)', // zinc-800
    'hsl(240 5% 26% / 0.9)', // zinc-700
    'hsl(240 5% 34% / 0.9)', // zinc-600
    'hsl(240 4% 46% / 0.9)', // zinc-500
    'hsl(240 5% 84% / 0.9)', // zinc-300
    'hsl(240 5% 96% / 0.9)', // zinc-200
]

export function RepoLanguageChart({ repoName }: { repoName: string }) {
  const repoData = stats[repoName]
  
  if (!repoData) {
    return null
  }

  const { languages, description, stars, forks, url, topics } = repoData

  const chartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: zincColors,
        borderWidth: 1,
        borderColor: 'hsl(240 4% 16% / 0.1)', // zinc-800 with low opacity
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'hsl(240 4% 46%)', // zinc-500
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ''
            const value = context.raw || '0'
            return `${label}: ${value}%`
          },
        },
        backgroundColor: 'hsl(240 4% 16% / 0.9)', // zinc-800
        titleColor: 'hsl(240 5% 96%)', // zinc-100
        bodyColor: 'hsl(240 5% 96%)', // zinc-100
        padding: 12,
        boxPadding: 6,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
  }

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="flex-none">
        <CardTitle className="flex items-center justify-between">
          <span>{repoName}</span>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{forks}</span>
            </div>
            {/* <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
            </Link> */}
          </div>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 min-h-[400px]">
        <div className="w-full h-full">
          <Pie data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  )
} 