type LanguageStats = {
  [key: string]: number;
};

export async function fetchGitHubLanguageStats(username: string): Promise<LanguageStats> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();
  
  const languageStats: LanguageStats = {};
  
  // Fetch language data for each repository
  await Promise.all(
    repos.map(async (repo: any) => {
      const langResponse = await fetch(repo.languages_url);
      const languages = await langResponse.json();
      
      // Add bytes of each language
      Object.entries(languages).forEach(([language, bytes]: [string, any]) => {
        languageStats[language] = (languageStats[language] || 0) + bytes;
      });
    })
  );
  
  // Convert bytes to percentages
  const total = Object.values(languageStats).reduce((a, b) => a + b, 0);
  const percentages = Object.entries(languageStats).reduce((acc, [lang, bytes]) => {
    acc[lang] = Math.round((bytes / total) * 100);
    return acc;
  }, {} as LanguageStats);
  
  // Sort by percentage
  return Object.fromEntries(
    Object.entries(percentages).sort(([, a], [, b]) => b - a)
  );
} 