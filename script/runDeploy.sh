#!/bin/bash

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FRONTEND_DIR="$SCRIPT_DIR/../sourceflooring"
BACKEND_DIR="$SCRIPT_DIR/../server"
ROOT_DIR="$SCRIPT_DIR/../"

echo "Going into Frontend..."
cd "$FRONTEND_DIR"

echo "Installing Frontend Dependencies..."
npm install

echo "Building the Frontend..."
npm run build

echo "Going into Backend..."
cd "$BACKEND_DIR"

if [ -d "dist" ]; then
  echo "Removing existing dist directory in backend..."
  rm -rf dist
fi

echo "Copying Dist from Frontend..."
cp -R "$FRONTEND_DIR/build" ./dist

echo "Deleting Dist from Frontend..."
rm -rf "$FRONTEND_DIR/build"

echo "Installing Backend Dependencies..."
npm install

echo "Changing to Root..."
cd "$ROOT_DIR"

echo "Building Docker Compose File..."
docker-compose build

echo "Logging into Docker Hub..."
docker login || { echo "Docker login failed! Exiting."; exit 1; }

echo "Tagging Image"
docker tag sourceflooring-sourceflooring ferasaljoudi/sourceflooring:latest

echo "Pushing Image"
docker push ferasaljoudi/sourceflooring:latest

echo "Deleting Local Docker Images"
docker rmi -f $(docker images -q)

echo "Deployment Completed Successfully!"
