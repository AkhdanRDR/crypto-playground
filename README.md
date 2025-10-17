# Crypto Playground

Crypto Playground is a small, educational React app (Vite) that demonstrates common cryptographic utilities in the browser using the `crypto-js` library. It's meant for learning and experimentation — not for production-grade cryptography.

Key features

- Hash Generator: create hashes (SHA-256, SHA-512, MD5) from arbitrary input.
- Encrypt / Decrypt: AES-based symmetric encryption and decryption using a password.
- Integrity Checker: compare two inputs using SHA-256 to help demonstrate integrity checks.

Tech stack

- React 19 + Vite
- crypto-js for hashing / encryption
- Tailwind CSS (via `tailwindcss` and `@tailwindcss/vite`) for styling
- ESLint for linting

Quick start

1. Install dependencies

	```bash
	npm install
	```

2. Start the dev server (Vite)

	```bash
	npm run dev
	```

3. Build for production

	```bash
	npm run build
	```

4. Preview the production build locally

	```bash
	npm run preview
	```

Available npm scripts (from `package.json`)

- `dev` — start Vite dev server with HMR
- `build` — build production assets
- `preview` — serve the production build locally
- `lint` — run ESLint across the codebase

Project structure (important files)

- `index.html` — Vite entry HTML
- `src/main.jsx` — app entry, mounts React to `#root`
- `src/App.jsx` — main layout and page switcher
- `src/components/Header.jsx` — top navigation
- `src/components/HashGenerator.jsx` — hash generation UI
- `src/components/EncryptDecrypt.jsx` — AES encrypt/decrypt UI
- `src/components/IntegrityChecker.jsx` — integrity / hash comparison UI
- `package.json` — dependencies and scripts

How the app works (short)

- Hash Generator uses `CryptoJS.SHA256`, `CryptoJS.SHA512`, and `CryptoJS.MD5` to compute hex digests of user input.
- Encrypt / Decrypt uses `CryptoJS.AES.encrypt` and `CryptoJS.AES.decrypt` with a password string. The app stores and displays the ciphertext (base64-like format provided by crypto-js) and attempts to decode to UTF-8 on decryption.
- Integrity Checker computes SHA-256 of two inputs (live) and allows comparing them.

Security & usage notes (important)

- This project is educational. Do NOT use it to protect real secrets in production.
- The `crypto-js` library performs cryptographic operations client-side in JavaScript. Password-based AES encryption here uses raw passwords directly as keys (via the library's high-level API) — this is convenient for demos but lacks best-practice hardening (e.g., proper key derivation with PBKDF2/Argon2, random IV handling, authenticated encryption modes, and secure key storage).
- MD5 is cryptographically broken for collision resistance — it is included only for demonstration.

Tips for contributors

- Keep the UI accessible: focusable controls, labels, and clear error messaging.
- If adding new algorithms, prefer using modern, well-reviewed libraries and add clear security notes.
- Add tests for pure functions (if you refactor cryptographic logic into utilities).

Local development checklist

1. Run `npm install`.
2. Run `npm run dev` and open the address shown by Vite (usually `http://localhost:5173`).
3. Use the top navigation to switch between:
	- Hash Generator
	- Encrypt / Decrypt
	- Integrity Checker

Contributing & license

Feel free to open issues or PRs. Add tests and keep changes small and focused. This project doesn't include a license file — add one if you plan to open-source it publicly.

Contact / attribution

Built as a small learning tool to explore hashing and symmetric encryption in the browser.
