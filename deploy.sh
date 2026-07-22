#!/usr/bin/env bash
# Runs ON the VPS to pull the latest code and restart the app.
# Usage: ./deploy.sh
set -euo pipefail

# --- EDIT THESE TWO TO MATCH YOUR VPS SETUP ---
PROJECT_DIR="/root/web/presswayy"    # path to this repo on the VPS
PM2_APP_NAME="presswayy-web"         # name shown in `pm2 list`
BRANCH="main"                        # branch to deploy
# -----------------------------------------------

cd "$PROJECT_DIR"

# Non-interactive SSH sessions (e.g. GitHub Actions) don't source ~/.bashrc,
# so nvm's node/npm/pm2 never make it onto PATH unless we load it ourselves.
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "==> Pulling latest code ($BRANCH)"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Restarting PM2 process: $PM2_APP_NAME"
pm2 restart "$PM2_APP_NAME" --update-env

echo "==> Deploy finished"
