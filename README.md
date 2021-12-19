# 강아지 MBTI 웹사이트

`react` `redux` `react-bootstrap`

![제목 없음](https://user-images.githubusercontent.com/37141223/146687467-e2f2af76-c827-4742-9e0c-c40f02ac8645.png)

## 페이지 구조

`Home.js` 와 `Page1.js` 부터 `Page12.js` 까지의 질문 페이지가 있고, 선택지에 따라 결과를 계산하는 `ScoreManager.js` 그리고 `ENFJ.js` 부터 `ISTP.js` 까지 16가지의 결과 페이지 구성되어있습니다.

```javascript
import { EXTRAVERSION, INTROVERSION } from "./types";
const initialState = {
    count : 0,
}

const attentionFocus = (state=initialState, action) => {
    switch(action.type){
        case EXTRAVERSION :
            return{
                ...state,
                count: state.count + 1
            }
        case INTROVERSION :
            return{
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}
export default attentionFocus
```

`Redux`를 사용하여 MBTI의 4가지 지표 (E, I) (S, N) (T, F) (J, P)를 대표하는 `action`을 만들어서 `Page1.js` 부터 `Page12.js`까지 있는 두가지 선택지 중 하나를 고를때 마다 연결되어있는 `action`으로 `count`값이 +1 또는 -1 이 되며, 예를 들어 `count`> 0 이면 E, `count` < 0

```javascript
useEffect(()=>{
        props.attentionCount > 0 ? setAttention('E')
    :   props.attentionCount < 0 ? setAttention('I')
    :   console.log('0입니다')

        props.recognitionCount > 0 ? setRecognition('S')
    :   props.recognitionCount < 0 ? setRecognition('N')
    :   console.log('0입니다')

        props.judgementCount > 0 ? setJudgement('T')
    :   props.judgementCount < 0 ? setJudgement('F')
    :   console.log('0입니다')

        props.lifestyleCount > 0 ? setLifestyle('J')
    :   props.lifestyleCount < 0 ? setLifestyle('P')
    :   console.log('0입니다')
        
    }, [props])
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
