#!/usr/bin/env bash

# ================================================================= #
#  Version Script: Bump the project version, create a git tag and push the changes:
#  - check repo is clean
#  - get latest version from git tags
#  - increment version based on VERSION_TYPE
#  - update version in Cargo.toml & Cargo.lock
#  - tag commit & push changes
# ================================================================= #

set -euo pipefail

if [ -n "$(git status --porcelain)" ]; then
  printf "\nError: repo has uncommitted changes\n\n"
  exit 1
fi

# =================================================================
# Get the latest git tag version and increment it
# =================================================================

# See NPM Version command: https://docs.npmjs.com/cli/v10/commands/npm-version
# does all this + tagging

VERSION=$(jq -r '.version' package.json)
VERSION_TYPE="${1-}" # From the first argument passed
VERSION_NEXT=""

if [ "$VERSION_TYPE" = "patch" ]; then
  VERSION_NEXT="$(echo "$VERSION" | awk -F. '{$NF++; print $1"."$2"."$NF}')"
elif [ "$VERSION_TYPE" = "minor" ]; then
  VERSION_NEXT="$(echo "$VERSION" | awk -F. '{$2++; $3=0; print $1"."$2"."$3}')"
elif [ "$VERSION_TYPE" = "major" ]; then
  VERSION_NEXT="$(echo "$VERSION" | awk -F. '{$1++; $2=0; $3=0; print $1"."$2"."$3}')"
else
  printf "\nError: invalid VERSION_TYPE arg passed, must be patch, minor or major\n\n"
  exit 1
fi

# =================================================================
# Update version in Cargo.toml and commit it
# =================================================================

jq ".version=\"$VERSION_NEXT\"" package.json > temp.json && mv temp.json package.json

npm publish

# git add .
# git commit -m "build: bump version to v$VERSION_NEXT"

# =================================================================
# Create new git tag and push it
# =================================================================

# echo "Tagging Commit & Pushing Changes: v$VERSION_NEXT"
# git tag -a "v$VERSION_NEXT" -m "Release: v$VERSION_NEXT"
# git push -u origin main --follow-tags