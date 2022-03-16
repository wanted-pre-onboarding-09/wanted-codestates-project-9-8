# 더블앤씨 과제
- gif 추가

## 프로젝트 소개

- 충청북도 휴양림 중 마음에 드는 곳에 메모를 남겨 저장하는 서비스
- 기간: 22.03.14~22.03.15

## 배포링크

[🚀 배포 링크](https://doublenc-9.netlify.app/)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 팀원 소개

| 이름   | 직책 | 역할                 |
| ----- | -- | -------------------- |
| [유송현](https://github.com/ysh2987) | 팀장 |  |
| [서한석](https://github.com/holystorySeo) | 팀원 | |
| [윤솔비](https://github.com/y-solb) | 팀원 | |
| [조영제](https://github.com/youngjeJO) | 팀원 |  |
| [이지수](https://github.com/mynameisjisoo) | 팀원 |  |


## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<br/>

## 요구사항

```
- 휴양림 데이터 조회는 한 번에 10개씩 무한 스크롤로 조회해야 합니다. 무한 스크롤은 라이브러리를 사용하지 말고 직접 구현해 주세요.
- 유저는 이름, 주소, 메모 중 최소 두 가지 조건 중 하나를 선택해 검색할 수 있어야 합니다.
- 유저가 휴양림을 저장할 때 메모를 반드시 작성해야 합니다.
- 데이터의 저장은 서버가 아니라 브라우저의 로컬 스토리지에 합니다.
- 유저는 휴양림 데이터의 이름, 주소, 연락처를 수정할 수 없습니다.
- 유저는 저장된 정보 중 하나를 선택해 삭제 혹은 수정할 수 있습니다.
- 유저의 모든 활동에는 그에 맞는 피드백이 주어져야 합니다.
```

### 유송현

### 서한석
- Skeleton UI Loading Component([구현방법 블로그 보러가기](https://jobcoding.tistory.com/214))
    - linear-gradient와 keyframes로 First Loading은 background-position, Second Loading은 background-image를 변화시켜 로딩 효과 구현 <br>
    
      |First Loading|Second Loading|
      |:-:|:-:|
      |<img src="https://user-images.githubusercontent.com/87353284/158618174-61afc828-fd8e-4cf9-941c-f3f2678f23a2.gif" width="30%">|<img src="https://user-images.githubusercontent.com/87353284/158629672-358ac06d-385d-40f1-8beb-58aa299c462e.gif" width="30%">|
      

### 윤솔비
- Modal의 외부 화면을 클릭 시 Modal이 닫히도록 구현했습니다.
    - 이벤트 버블링을 막기 위해 `e.target`과 `e.currentTarget`이 같을 때만 Modal이 닫히도록 했습니다.
- 휴양림 정보 추가, 수정, 삭제 구현했습니다. 추가, 수정, 삭제 후에는 Toast로 사용자에게 각각 피드백을 제공하도록 했습니다.
- 휴양림 저장 시 메모가 있는 경우에만 저장 또는 수정이 되도록 구현했습니다. 메모가 없는 경우 버튼에 `opacity` 로 불투명하게 보이도록 했습니다. 만약 메모가 빈 상태에서 저장 또는 수정 버튼을 클릭 시 Toast로 사용자에게 알맞은 피드백 제공하도록 했습니다.
- 송현님께서 세팅해 주신 redux persist를 이용해 브라우저의 로컬 스토리지에 데이터 저장했습니다.
- 초반에는 Modal과 Toast의 상태 관리를 useState로 해주었으나 FormList와 List component에서 중복되는 부분이 많았습니다. 그래서 redux를 통해 전역에서 상태 관리를 할 수 있도록 리팩토링해줬습니다.
### 조영제

### 이지수
- Toast component
  - 마운트 후 2초 동안 컴포넌트가 보였다가 사라지게 함
  - useEffect 내에서 clean up function을 만들어 컴포넌트 언마운트 시 setTimeout의 메소드를 종료시킴
- Infinity scroll error handling
  - 처음에는 한번의 API 요청으로 전체 데이터를 받아오고 가져온 데이터를 10개씩 보여주는 식으로 구현을 했었는데, 이번 과제에는 받아오는 데이터가 적었지만 한번에 받아오는 데이터가 많다면 List컴포넌트가 너무 무거워져서 무한스크롤을 적용하는 이유가 없다는 것을 알았음
    - 스크롤이 될 때마다 API 요청을 보내서 데이터를 10개씩 받아오는 것으로 수정함
  - 컴포넌트가 마운트 되면 ListCard가 화면에 렌더링 되기 전에 가장 아래에 있는 Intersection Observer의 target 요소가 화면에 먼저 표시되는데, Intersection observer는 이를 Intersect 되었다고 판단하여 처음 컴포넌트가 마운트 되면 API 요청이 연달아서 2번 일어나는 문제가 발생함
    - target의 y값이 특정 값 이상일 때만 observer 콜백 함수를 실행하도록 조건을 추가함
    ```jsx
    const handleIntersect = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && target.intersectionRect.y > 100) {
          setDataIndex((prev) => prev + 1);
        }
      };
    ```

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
