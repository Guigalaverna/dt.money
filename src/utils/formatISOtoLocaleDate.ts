export function formatISOtoLocaleDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("pt-BR");
}
