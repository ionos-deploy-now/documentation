import { getCountryForTimezone } from "countries-and-timezones";

export function determineCountryByTimezone() {
  const timezone = Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
  const country =  timezone ? getCountryForTimezone(timezone) : 'US';
  return country?.id;
}

export function determineLocaleByTimezone() {
  switch (determineCountryByTimezone()) {
    case 'DE':
      return 'de_DE';
    case 'US':
      return 'en_US';
    case 'CA':
      return 'en_CA';
    case 'GB':
      return 'en_GB';
    case 'ES':
      return 'es_ES';
    case 'MX':
      return 'es_MX';
    case 'FR':
      return 'fr_FR';
    case 'IT':
      return 'it_IT';
    default:
      return 'en_US';
  }
}
