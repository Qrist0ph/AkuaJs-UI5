rd build /s /q
robocopy src\AkuaJs\ build\AkuaJs *.js

cd build
7z a -tzip -r ..\bin\AkuaJs.zip *.*
cd ..