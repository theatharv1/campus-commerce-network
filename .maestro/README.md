# CCN Mobile E2E (Maestro)

Critical-path flows (mandatory before pilot, per SRS §12):

- onboarding & verification
- buy -> sell with delivery
- delivery-fee payment

Flows are authored in this directory as `<flow>.yaml` when their feature exists.
Run locally with `maestro test .maestro`. CI wiring is added when the Expo app
and its first flow exist (Mobile App Foundation milestone).
