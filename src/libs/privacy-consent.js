// More information about PrivacyConsent structure: https://git.ionos.org/SFE/cookie-banner#usage

import { determineLocaleByTimezone } from "./location";

export const STATISTICS = 'statistics';

export function getPrivacyContent() {
  try {
    // eslint-disable-next-line no-undef
    return new PrivacyConsent({ language: determineLocaleByTimezone });
  } catch (e) {
    return null;
  }
}

export function checkForPrivacyConsent(type, consentedCallback) {
  if (!hasConsented(type)) {
    const privacyConsent = getPrivacyContent();
    if (privacyConsent) {
      privacyConsent.invoke(
        () => {
          if (hasConsented(type)) {
            consentedCallback();
          }
        },
        type,
        null,
        true,
      );
      privacyConsent.initialize();
    }
  } else {
    consentedCallback();
  }
}

export function hasConsented(type) {
  return getPrivacyContent()?.hasConsented(type);
}
