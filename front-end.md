# Front End Test

## 시작하기

### 디벤던시 설치
프로젝트 루트에서 설치하세요
```shell
pnpm install
```

### 저장소 설명

(프로젝트 루트에서 실핼 하세요)

각 모노레포 실행 방법은 Pnpm https://pnpm.io/ko/filtering#--filter-package_name 참조

- ./apps/react-test : React 로 테스트를 수행하려면 이 폴더를 사용 하세요
  - dev script `pnpm run --filter @foo-bar-project/react-test dev`
  - build script `pnpm run --filter @foo-bar-project/react-test build`
  - start script `pnpm run --filter @foo-bar-project/react-test start`
- ./apps/vue-test : Vue 로 테스트를 수행하려면 이 폴더를 사용 하세요
  - dev script `pnpm run --filter @foo-bar-project/vue-test dev`
  - build script `pnpm run --filter @foo-bar-project/vue-test build`
  - start script `pnpm run --filter @foo-bar-project/vue-test start`
- ./apps/solid-test : SolidJs 로 테스트를 수행하려면 이 폴더를 사용 하세요
  - dev script `pnpm run --filter @foo-bar-project/soild-test dev`
  - build script `pnpm run --filter @foo-bar-project/soild-test build`
  - start script `pnpm run --filter @foo-bar-project/soild-test start`

### 문제 내용

로그인과 회원 가입 페이지를 아래 디자인 링크 내용대로 만듭니다 \
이미 보일러플레이트가 작성 되어있습니다 작성된 보일러플레이를 이용하여 아래 스팩을 구현하세요 <strong>(!!보일러블레이트 사용은 옵션 입니다!!)</strong> 보일러플레이트 코드 추가나 보일러플레이트에 오류가 있다면 해결 하셔도 좋습니다
각 보일러플레이트 React, Vue, SolidJs 폴더에는 스타일링 방법과 컴포넌트 세트 라이브러리가 미리 설치되어 있습니다 원하시는 다른 방법으로 스타일링하며 컴포넌트를 작성 하셔도 됩니다 \

### 꼭 지켜야 될 것
- eslint 룰을 지키세요
- type 오류가 없야 합니다

#### 스팩

프론트엔드 구현을 위한 백엔드는 아래 백엔드 주소를 사용하세요 아래 스팩으로 <strong>!!! 직접 구현해주셔도 !!!</strong> 좋습니다.

화면 구현은 디자인 링크를 보고 구현해주세요 

- 디자인 링크 > [Figma Link](https://www.figma.com/file/rRh6du4JPZclkiuBqLS6xX/Fornt-End-Test?node-id=0%3A1)  (디자인은 반응형레이아웃 입니다)

- 백엔드 주소 >
    - REST
        - url: http://playground-719591487.us-west-2.elb.amazonaws.com/rest
          - (POST) /rest/auth/sign-in
            - req.body {email: '<string>', password: '<string>'} 
            - res 401 {email: '<string>'}
            - res 404 {email: '<string>'}
            - res 200 {email: '<string>', name: '<string>', token: '<string>'}
          - (POST) /rest/auth/sign-up
            - req.body {email: '<string>', password: '<string>'}
            - res 409 {email: '<string>'}
            - res 201 {email: '<string>', name: '<string>', token: '<string>'}
          - (PATCH) /rest/auth/update-password
            - req.body {password: '<string>', newPassword: '<string>'} req.header {Authorization: '<jwt token>'}
            - res 404 {email: '<string>'}
            - res 401 {email: '<string>'}
            - res 200 {email: '<string>'}
    - GraphQl
        - url: http://playground-719591487.us-west-2.elb.amazonaws.com/graphql
        - playground: http://playground-719591487.us-west-2.elb.amazonaws.com/graphql
  
   > 모든 주소에 만약 jwt 토큰이 필요하다면 header Authorization key 를 사용 합니다 (Bearer Authentication)

미리 설치된 컴포넌트 세트 라이브러리

- React : [daisy-ui](https://daisyui.com/), [tailwind](https://tailwindcss.com/)
- Vue :  [daisy-ui](https://daisyui.com/) , [tailwind](https://tailwindcss.com/)
- SolidJs : [daisy-ui](https://daisyui.com/), [tailwind](https://tailwindcss.com/)

<< [README.md](README.md)
