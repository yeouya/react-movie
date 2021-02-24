# React Movie

리액트와 타입스크립트를 활용한 React Movie 프로젝트.

[React Movie 데모 페이지](https://yeouya.github.io/react-movie)

![React Movie](image/screenshot-yeouya-github-io-react-movie-1614128597666.png)

## 목차

- [기술 스택](#기술-스택)
- [구현 기능](#구현-기능)
- [프로젝트 진행 중 어려웠던 점](#프로젝트-진행-중-어려웠던-점)
- [프로젝트 후기](#프로젝트-후기)

## 기술 스택

- React
- TypeScript
- CSS Module

## 구현 기능

- [x] 슬라이더
- [x] 영화 검색
- [x] 영화 예고편 미리보기

## 프로젝트 진행 중 어려웠던 점

우선 이번 프로젝트에서 css grid 로 구현하기 어렵거나 껄끄러운 형태가 아니면

최대한 css grid 를 사용하는 식으로 프로젝트를 진행했는데

슬라이더를 css grid 로 구현해본적이 없어서 시작부터 애를 좀 먹었다.

슬라이더니 캐러셀이니 별의 별 키워드를 다 가져다 구글 서칭을 해봤는데

grid 관련해서는 딱히 참고할만한 예시가 없어서 그냥 grid 속성 뒤져가면서

직접 구현해봤는데 결과물이 상당히 만족스럽다.

```css
:root {
  --slider-view: 6;
  --slider-gap: 1rem;
  --slider-item-width: calc(
    (100% - var(--slider-gap) * (var(--slider-view) - 1)) / var(--slider-view)
  );
}

.slider {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--slider-item-width);
  gap: var(--slider-gap);
  overflow-x: auto;
  scroll-behavior: smooth;
}
```

우선 한 화면에 보여줄 슬라이더 아이템의 갯수를 정의하고 (`--slider-view`)

슬라이더의 gutter 값을 정의한 후에 (`--slider-gap`)

두 값을 기반으로 각 아이템의 너비를 계산해서 (`--slider-item-width`)

`grid-auto-columns` 속성과 `gap` 속성의 값으로 할당해주는 방식이다.

반응형 처리는 미디어 쿼리와 `--slider-view` 값을 사용하면 된다.

사실 처음엔 계산하는것도 그렇고 반응형 처리하기도 귀찮아서

auto-fill or auto-fit, minmax 조합으로 어떻게든 해보려고 했는데

`ex) grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)`

이게 스크롤이 들어가면 제대로 동작을 안한다.. 결국 이건 포기.

```js
Promise.allSettled();
```

이건 페이지별로 api 호출할때 따로따로 하는것보다 한번에 처리하면

좋을 것 같아서 처음으로 써봤는데 얘도 자료가 별로 없고

타입스크립트로 쓰면 손수 타입 캐스팅까지 해가면서 써야해서

익숙해지려면 시간이 필요할 것 같다.

정확히 말하면 자료가 없다기보다 교과서적인 설명은 많은데

실제로 활용하는 코드, 혹은 방법을 설명하는 글이 많지 않고

기존에 쓰이던 `Promise.all()` 메서드랑 다르게 사용법이 좀 이질적이라고

해야하나.. 당장 써보면서 받았던 느낌은 이렇다.

```tsx
useEffect(() => {
  const handleKeydown = ({ key }: KeyboardEvent) => {
    if (key === "Escape") {
      setIsOpen(false);
    }
  };

  document.addEventListener("keydown", handleKeydown);
  return () => {
    document.removeEventListener("keydown", handleKeydown);
  };
}, [setIsOpen]);
```

모달 컴포넌트를 클릭이 아닌 esc 키로도 닫을 수 있게 하고 싶어서

추가로 작성한 코드이고, 잘 동작하는것도 확인했는데

YouTube Player API 로 불러온 iframe 태그 내부에선 제대로 동작하질 않는다.

iframe 태그 내부에서 일어난 이벤트를 들을 방법이 있는 것 같긴 한데

어찌저찌 해서 성공하더라도 결국엔 동일 출처 정책에 막힐 게 뻔해서

깔끔하게 포기했다.

## 프로젝트 후기

처음 시작할땐 만만하게 생각했는데, 생각보다 쉽지 않은 프로젝트였다.

이번 프로젝트 덕분에 특히 css grid 모듈에 대한 이해도가 크게 올라서

앞으로의 프로젝트에서도 css grid 모듈을 적극적으로 활용해 볼 생각이다.
