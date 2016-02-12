rd build /s /q
robocopy src\AkuaJs\ build\AkuaJs /MIR

cd build
7z a -tzip -r ..\bin\AkuaJs-UI5.zip *.*
cd ..