PowerShell -NoProfile -ExecutionPolicy Bypass -Command "& {Start-Process PowerShell -ArgumentList 'Set-ExecutionPolicy Unrestricted -Force' -Verb RunAs}" 
timeout 1 
powershell -File %~dp0\build_tools\build.ps1 'dev'
