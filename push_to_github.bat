@echo off
title Push APN to GitHub
echo ========================================================
echo    Pushing Abbasi Publication Network ERP to GitHub
echo    Target: https://github.com/bintesami/Abbasi-publication-.git
echo ========================================================
echo.

cd /d "%~dp0"
git push -u origin main

echo.
echo If prompted, please sign in with your GitHub account in the pop-up window or enter your Personal Access Token.
echo.
pause
