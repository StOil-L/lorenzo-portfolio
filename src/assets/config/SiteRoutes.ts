export const siteRouteIds: string[] = [
  "",
  "aboutme",
  "projects",
  "education",
  "experience",
  "contact"
];

export const siteRouteNames: string[] = [
  "Accueil",
  "A propos de moi",
  "Projets",
  "Formation",
  "Expérience professionnelle",
  "Contact"
];

const siteRoutes = new Map<string, string>();
siteRouteIds.forEach((id, i) => {
  siteRoutes.set(id, siteRouteNames[i])
});

export default siteRoutes;