@echo off  
title vite_vue_chrome_extend_pull
set INTERVAL=10

:Again  
echo git pull
git pull
timeout %INTERVAL%

goto Again