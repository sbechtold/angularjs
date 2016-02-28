@echo off

pushd ..
SET APP_HOME=%cd%
popd


SET ENV=win
SET ARCH=x64
SET ANGULAR_HOME=%APP_HOME%

FOR /D %%I IN ("%CD%") DO SET _LAST_SEGMENT_=%%~nxI

SET EXE_HOME=%ANGULAR_HOME%\%_LAST_SEGMENT_%\bin\%ENV%\%ARCH%
SET NODE_HOME=%EXE_HOME%/node
SET NODE_EXE=%NODE_HOME%/node.exe

SET MONGO_HOME=%EXE_HOME%\mongo
SET MONGOD_EXE=%MONGO_HOME%\mongod.exe


set OLD_PATH=%PATH%
set NODE_MODULES=%ANGULAR_HOME%\node_modules\.bin
set CHROMEDRIVER=%ANGULAR_HOME%\node_modules\protractor\selenium

set PATH=%NODE_MODULES%;%CHROMEDRIVER%;%ANGULAR_HOME%\bin;%EXE_HOME%\scripts;%NODE_HOME%;%MONGO_HOME%;%PATH%

echo %EXE_HOME%\scripts
echo %MONGOD_EXE%