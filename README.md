<h1>📑 프로젝트 소개 및 개요</h1> 

<h3> TMDB API를 이용해서 영화 소개 사이트를 구현하였습니다. </h3> 

➡️ **TMDB**가 운영하는 **TMDB API**를 사용해서 영화를 볼 수 있게 만들었고,

➡️ **무한스크롤**로 해당 영화 데이터들을 확인할 수 있습니다.

➡️ 또한 **필터 기능**을 통해 영화를 '지금상영순','인기순,'최고평점순',개봉순'을 선택하여 볼 수 있습니다.

➡️ 또한 영화 포스터를 클릭하면 영화의 정보가 담긴 **디테일 페이지**로 이동하도록 만들었습니다.

## ➡️ 와이어 프레임

![figma](https://github.com/FE-team1/GITFLIX/assets/110034416/d042254d-be4d-4a9c-9b66-48a56d13f6e5)

## ➡️ 시연 영상 

슬라이드 구현 
https://github.com/FE-team1/GITFLIX/assets/110034416/e43b9dc4-2e78-476f-815f-1b9f5f7f5af6

필터 기능 
https://github.com/FE-team1/GITFLIX/assets/110034416/355cd27e-24b7-4a51-9dd8-d1a676976385

페이지 이동
https://github.com/FE-team1/GITFLIX/assets/110034416/83def4c2-7300-4c6b-82cd-569b00460d8b


## ➡️ 진행 팀원 소개

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="">🥰 김가영</a></td>
    <td><a href="">❄️ 권희식</a></td>
    <td><a href="">🦊 장상준</a></td>
  </tr>
</table>

## ➡️ 역할 분담

- 초기세팅 - 상준
- api 가져오기 - 희식,가영,상준 
- 메인페이지 - 가영
- 무한스크롤 - 희식
- 슬라이더 구현 - 가영
- 필터링(현재상영순,인기순,최고평점순,개봉순) - 가영
- 디테일 페이지 - 상준,희식

## ➡️ 문서화

📋 스프린트


## ➡️ 폴더 구조

src <br>
 ├ apis <br>
 │   ├ core.js <br>
 │	 ├ detail.api.js <br>
 │   ├ image.api.js <br>
 │	 ├ movieList.js <br>
 │	 ├ now-pliaying.api.js <br>
 │	 ├ popular.api.js <br>
 │	 ├ top-rated.api.js <br>
 │	 ├ upcoming.api.js <br>
 │	 └ video.api.js <br>
 ├ components <br>
 │   ├ layout <br>
 │   │	└ header.js <br>
 │   └ oneMovie.js <br>
 ├ consts <br>
 │   └ queryKey.js <br>
 ├ pages <br>
 │   ├ detail <br>
 │   │  └ index.js <br>
 │   ├ main <br>
 │   │  ├ components <br>
 │   │  │   ├ carousel.js <br>
 │   │  │   ├ infinitescroll.js <br>
 │	 │  │   └ skeleton.js <br>
 │   │  ├ now-playing <br>
 │   │  │   └ index.js <br>
 │   │  ├ popular <br>
 │   │  │   └ index.js <br>
 │   │  ├ top-rated  <br>
 │   │  │   └ index.js <br>
 │   │  ├ upcoming <br>
 │   │  │   └ index.js <br>
 │   │  └ index.js <br>
 │   ├ search <br>
 │   │  └ index.js <br>
 ├ routes <br>
 │	 └ router.js <br>
 ├ styles <br>
 │   ├ common.js <br>
 │   ├ global.js <br>
 │   └ theme.js <br>

 

## ➡️ 사용 라이브러리

초기셋팅
<div align="left">
	<img src="https://img.shields.io/badge/Eslint-4B32C3?style=flat&logo=Eslint&logoColor=white" />
	<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
	<img src="https://img.shields.io/badge/Husky-1572B6?style=flat&logo=Husky&logoColor=white" />
	<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white" />
</div>

사용 라이브러리
<div align="left">
	<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
	<img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white" />
</div>


- 가영
 1) 슬라이더 구현하는데에 있어서 이해력 부족 -> 이미지를 받아올경우 슬라이드가 무지성으로 늘어남. 한개만받아오면 이미지 한 개만 받아짐 (???) 어떻게 해결해야할까 고민중입니다. 
  2) skeleton 사용방법을 모르겠습니다.. 추후 개선할 예정입니다.
  3) 깃허브 머지과정에서의 아쉬움 ->  전보다는 나아진 거 같지만 아직 익숙하지 않습니다. 조심조심해서 써야할 거 같습니다.

- 희식
 1) 상태 관리를 하지 못함. api 호출 과정에서 props 드릴링 발생 및 공통된 로직에 대해 전역 상태관리를 하지 못하여서 코드의 가독성이 떨어지고 복잡하게 되어있음. 추후에 rtk , context 혹은 custom-hook을 사용하여 재사용되는 로직 수정할 예정입니다.
  2) 무한스크롤 구현하지 못했습니다. tanstack-query 공식 문서를 읽어보고 구글링을 했는데 적용을 하지 못함. 아직 공식 문서를 보고 적용하는 것에 대해 어려움을 겪고 있음. react-query에 대한 이해가 부족한거 같다. 추후에 복습하여 구현 예정입니다.

- 상준
  1) API 호출 및 데이터 이용(데이터를 가져오고, 원하는 데이터만 뽑아서 뿌려주는 등)의 개념이 부족하다보니 막상 코드 작성 단계에서 많이 막혀서 다른 팀원에게 부탁한 부분도 있다.
  2) 깃허브 관련 이슈가 많았습니다. 머지 과정에서 아직 익숙하지 않아서 오류를 해결하는데 고생을 했고, 제일 큰 실수인 강제로 머지를 해버려서 커밋 전체가 한 번 날아갔다가 복구가 되어서 내가 했었던 커밋들이 전부 날아가는 안타까운 일을 겪었기에 다음부턴 좀 더 조심해서 사용해야겠다는 걸 깨달았습니다.
  3) 전체적으로 디테일 페이지에 관련해서 아쉬운게 많았기 때문에 추후 부족한 부분을 채울 수 있도록 하겠습니다.
