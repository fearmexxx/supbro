# Starknet Brother ($BROTHER) - Official Website

Revamped community & cultural hub for Starknet's leading meme movement: **[supbro.fun](https://www.supbro.fun/)**.

## Features

- **Institutional Modern Crypto Aesthetic**: Dark-mode Starknet theme (`#050811`), subtle blue glow ambiance, and responsive Bento grids.
- **The Brother Manifesto Reader** (`/manifesto`): Complete sacred lore, tenets, the 4 Energies, and the 10-point Brother Code with 1-click quote sharing to X.
- **Interactive Brothers Hall of Fame**: Dynamic spotlight viewer for all 18 Starknet Brothers (`AKUMA`, `BARAN`, `CARLOS`, `HOVA`, `ODIN`, etc.) with personality lore and archetype tags.
- **Live On-Chain DEX Metrics**: Real-time pricing, 24h performance, liquidity status, and contract copying via DexScreener API.
- **Brother Meme & PFP Creator (Meme Lab)**: HTML5 Canvas tool enabling users to pick a Brother base, add custom top/bottom meme captions, stamp Starknet badges, and download high-resolution graphics.
- **Starknet Wallet Support**: Argent X & Braavos wallet detection and holder status verification.

## 🚀 Easy 1-Click Deployment to Vercel

This repository is built with **Astro 5 + Tailwind CSS** as a pure static output (`dist/`), making it ready for instant deployment on Vercel with zero configuration:

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository.
4. Leave all build settings default:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

## Local Development

```bash
# Start background dev server as instructed in AGENTS.md
astro dev --background

# Check status
astro dev status

# Build for production
npm run build
```
