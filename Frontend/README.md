# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

## Folder Structure

- assets/ 공통 리소스 (이미지, 스타일 파일 등)
- components/ 여러 페이지에서 공통으로 쓰이는 UI 조각들
- features/ 기능 단위로 모듈을 분리
- pages/ 라우터와 매핑되는 페이지들
- routes/ react-router-dom 설정 (SPA용)
- types/ 전역에서 사용하는 TypeScript 타입 정의 파일
- utils/ 날짜 포맷팅, 색상 변환 등 비즈니스 로직과 무관한 도우미 함수들
- hooks/ 전역 공통 커스텀 훅 모음
- App.tsx 앱의 전체 구조 및 라우터 배치
- main.tsx 앱의 진입점, 실제로 DOM에 React를 그리는 곳
