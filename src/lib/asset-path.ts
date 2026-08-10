const githubPagesBasePath = process.env.GITHUB_PAGES === "true" ? "/Cremedia_de_Oly" : "";

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${githubPagesBasePath}${normalizedPath}`;
}
