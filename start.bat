@echo off
echo Starting JSON Server and React App...

start cmd /k "npx json-server --watch db.json --port 3001"
echo Waiting for JSON Server to initialize...
timeout /t 5 /nobreak > nul
start cmd /k "npx react-scripts start"

echo.
echo JSON Server is running on http://localhost:3001
echo React App is running on http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers when done.