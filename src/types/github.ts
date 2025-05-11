export interface GitHubRepoData {
  name: string;
  description: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  url: string;
  homepage: string | null;
  languages: Record<string, number>;
  topics: string[];
}

export interface GitHubStats {
  [repoName: string]: GitHubRepoData;
} 