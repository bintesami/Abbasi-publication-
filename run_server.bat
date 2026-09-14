@echo off
title APN ERP - Abbasi Publication Network
echo ========================================================
echo    Abbasi Publication Network (APN) - ERP Server
echo    اسٹاک، پروڈکشن اور گودام مینجمنٹ سسٹم
echo ========================================================
echo.

set PYTHON_CMD="C:\Users\T14\AppData\Local\Programs\Python\Python312\python.exe"

if not exist %PYTHON_CMD% (
    set PYTHON_CMD=python
)

echo Starting FastAPI Backend & UI Server on http://127.0.0.1:8000 ...
echo Browser opening in 2 seconds...

start "" http://127.0.0.1:8000

cd /d "%~dp0backend"
set PYTHONIOENCODING=utf-8
%PYTHON_CMD% -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

pause
