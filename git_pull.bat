@echo off  
title vue-designer
set INTERVAL=5 

:Again  
echo git pull
git pull
timeout %INTERVAL%

goto Again