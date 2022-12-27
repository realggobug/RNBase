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
![image](/uploads/f4a1ba968fabc24a0ba006c17d7b76db/image.png)
- vsCode 커맨드 창(단축키 : `Ctrl + ~`) 열어서 `yarn install` 수행.
- 수행 완료 되면 node_modules 라는 폴더가 생성됨.

### VsCode Extension
- 개발을 도와주는 vsCode 자체 확장 프로그램 설치.

![image](/uploads/f14d3708600defdddd37b1c5f6859780/image.png)
![image](/uploads/5822bef99dc491d1afa61fde8bb7e957/image.png)
![image](/uploads/11d97d97dfbfa0dca343b89a2f3d4db4/image.png)
![image](/uploads/31c6ecae32592c1b141a7beda1578ee7/image.png)

### Android Studio 설치 및 설정 / 버전 : 2021.3.1 (Dolphin)
(다운로드 사이트 : https://developer.android.com/studio)
- 기존 Android Studio가 설치되어 있을 경우 버전 업데이트 해줘야함.
- 초기 설치시 설치 후 기본 화면에서 Tools 탭 안의 SDK Manager 메뉴 클릭
![image](/uploads/aae017320f27dacff0ab6c3edb17a529/image.png)
![image](/uploads/b09e5d0be5a05c37f270e2eaaf69181a/image.png)
![image](/uploads/b0d00e7297dae62315d2da5969d8ab7d/image.png)
- Android SDK Platform
- Intel Atom System Image
- Google Play Intel Atom System Image
- 위 항목들을 체크 해서 설치.
![image](/uploads/4715a9332a74c63427375287bd5164ed/image.png)
- SDK Tools 탭으로 이동하여 체크된 항목들 체크 후 설치.
- 다시 Tools 탭 안의 Device Manager 메뉴 클릭 후 Create device 클릭
![image](/uploads/d9d79113da557d31989d46ce0649cd14/image.png)
- 원하는 디바이스 모델 선택
![image](/uploads/8545bcf057384a9585791b5f9ce01740/image.png)
- 위에서 설정했던 SDK 버전과 동일한 버전으로 설치 후 완료.
![image](/uploads/2ac2293e5b6d3843166ba06327c94e39/image.png)
- 생성된 Device 실행.
![image](/uploads/f2a12b6760016d8087f785d061a9fcff/image.png)
- 실행이 잘 되면 Git 받은 프로젝트 열기 
- File -> Open -> android 열기
![image](/uploads/a4fa1b2514a68fb8a7e51120576d873a/image.png)
- 프로젝트 열게 되면 자동으로 build 시작.
- 빌드 완료 되면 Device 실행 후 vsCode로 가서 터미널에 `yarn android` 명령어 실행.
- 실행한 Device Emulator 랑 연결이 잘 되었으면 아래 사진처럼 진행됨.
![image](/uploads/475f6e2b4a188757d434b6e72b7ac4f5/image.png)
![image](/uploads/cb17b3c68f2251a93c94cdab5228decc/image.png)

