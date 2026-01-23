@echo off
cd /d "C:\Users\Chandar\safety-consultancy-site"
node keepalive.js >> keepalive_log.txt 2>&1
echo %date% %time% >> keepalive_log.txt

