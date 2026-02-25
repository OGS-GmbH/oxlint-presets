#!/usr/bin/env bash

echo "Preparing VitePress source..."

# Filesystem
mkdir -p ./dist/vitepress-src

cp -r ./.vitepress/public ./dist/vitepress-src/public

cp -r ./.vitepress/docs/* ./dist/vitepress-src
