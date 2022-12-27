# 프로젝트 환경 설정.


# Window
### java openjdk 11 버전 설치 후 환경변수 설정.
(다운로드 사이트 : https://jdk.java.net/java-se-ri/11)

### nvm, node 설치
(다운로드 사이트 : https://github.com/coreybutler/nvm-windows/releases)

- 다운로드하여 압축을 풀고 nvm-setup.exe 파일을 실행하여 nvm을 설치.
- 설치 후 터미널 cmd(윈도키 + R키) 에서
`nvm version` or `nvm -v`
- 버전 확인 후 node 18.12.1 설치
`nvm install 18.12.1`
- 설치 후 `node -v` 와 `npm -v` 명령어로 버전 확인.
- node : 18.12.1 | npm : 9.2.0

### yarn 설치
- npm이 설치된것을 확인 후에 `npm install -g yarn` 명령어 실행.
- 설치 여부 확인 : `yarn --version`


### VsCode
(다운로드 사이트 : https://code.visualstudio.com/download)

- 설치 후 vsCode에서 F1 누른 후 `>Git: Clone` 찾아서 git repository 연결.
- 연동 완료 된 후 RNbase 폴더로 vsCode open.
- 아래 화면의 폴더구조처럼 되게끔 open.
<img width="1680" alt="image" src="https://user-images.githubusercontent.com/67956546/209611439-c6b4944b-5926-4a1e-a407-c9dbd1c3bd39.png">
- vsCode 커맨드 창(단축키 : `Ctrl + ~`) 열어서 `yarn install` 수행.
- 수행 완료 되면 node_modules 라는 폴더가 생성됨.

### VsCode Extension
- 개발을 도와주는 vsCode 자체 확장 프로그램 설치.

<img width="341" alt="image (1)" src="https://user-images.githubusercontent.com/67956546/209611449-bb685e50-47d1-4fa7-961f-cffe60c92e0f.png">
<img width="700" alt="image (2)" src="https://user-images.githubusercontent.com/67956546/209611457-38f91bd3-0e46-48b9-b9c7-b8d78a9ce534.png">
<img width="701" alt="image (3)" src="https://user-images.githubusercontent.com/67956546/209611460-4449f435-de9d-4140-a1c1-0106c022c206.png">
<img width="729" alt="image (4)" src="https://user-images.githubusercontent.com/67956546/209611461-f0c5ea27-3f14-4200-9da9-774172507a1c.png">

### Android Studio 설치 및 설정 / 버전 : 2021.3.1 (Dolphin)
(다운로드 사이트 : https://developer.android.com/studio)
- 기존 Android Studio가 설치되어 있을 경우 버전 업데이트 해줘야함.
- 초기 설치시 설치 후 기본 화면에서 Tools 탭 안의 SDK Manager 메뉴 클릭
![image (5)](https://user-images.githubusercontent.com/67956546/209611464-1999d156-1887-437e-8561-ac3296fc2db9.png)
![image (6)](https://user-images.githubusercontent.com/67956546/209611465-687b32d5-5a8d-4914-b8f6-3cc07252c688.png)
![image (7)](https://user-images.githubusercontent.com/67956546/209611467-1e3b0d39-1182-4e19-b924-5018205ccceb.png)
- Android SDK Platform
- Intel Atom System Image
- Google Play Intel Atom System Image
- 위 항목들을 체크 해서 설치.
![image (8)](https://user-images.githubusercontent.com/67956546/209611468-6663caf5-9a82-474d-b706-7e488deb0b46.png)
- SDK Tools 탭으로 이동하여 체크된 항목들 체크 후 설치.
- 다시 Tools 탭 안의 Device Manager 메뉴 클릭 후 Create device 클릭
![image (9)](https://user-images.githubusercontent.com/67956546/209611469-c55e65d1-7153-48a6-8008-0298081806c3.png)
- 원하는 디바이스 모델 선택
![image (10)](https://user-images.githubusercontent.com/67956546/209611471-ef5ad30e-54c2-4ed3-8b45-6eedaa76290e.png)
- 위에서 설정했던 SDK 버전과 동일한 버전으로 설치 후 완료.
![image (11)](https://user-images.githubusercontent.com/67956546/209611472-ab8c767e-34e9-4503-bd3e-52ac1cd0cb5d.png)
- 생성된 Device 실행.
![image (12)](https://user-images.githubusercontent.com/67956546/209611474-8646f1c4-40a4-4d76-a428-3eb8bb6b662a.png)
- 실행이 잘 되면 Git 받은 프로젝트 열기 
- File -> Open -> android 열기
![image (13)](https://user-images.githubusercontent.com/67956546/209611476-f64c08e1-1e48-4c55-b108-a845e95e536f.png)
- 프로젝트 열게 되면 자동으로 build 시작.
- 빌드 완료 되면 Device 실행 후 vsCode로 가서 터미널에 `yarn android` 명령어 실행.
- 실행한 Device Emulator 랑 연결이 잘 되었으면 아래 사진처럼 진행됨.
![image (14)](https://user-images.githubusercontent.com/67956546/209611477-d4755a97-c44c-4112-9538-2ed1778d7ede.png)
![image (15)](https://user-images.githubusercontent.com/67956546/209611480-40784d3b-929d-4e36-aea3-db4d1cb5db15.png)

