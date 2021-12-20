# 강아지 MBTI 웹사이트

`react` `redux` `react-bootstrap`

자신은 어떤 강아지 성격과 비슷한지 알 수 있는 MBTI 테스트 사이트입니다.

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

`Redux`를 사용하여 MBTI의 4가지 지표 (E, I) (S, N) (T, F) (J, P)를 대표하는 `action`을 만들어서 `Page1.js` 부터 `Page12.js`까지 있는 두가지 선택지 중 하나를 고를때 마다 `reducer`를 통해 `count`값이 +1 또는 -1 이 되며,

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

예를 들어 `count` > 0 이면 E, `count` < 0 이면 I 가 되는 식으로 성향이 결정되게 됩니다. 12문제를 모두 풀면 결정된 성향에 따라 결과 페이지로 넘어가는 방식입니다.


## Redux

### actions.js
```javascript
import { EXTRAVERSION, INTROVERSION } from "./types";

export const extraversion = () =>{
    return{
        type: EXTRAVERSION
    }
}
export const introversion = () =>{
    return{
        type: INTROVERSION
    }
}
```
`actions.js`마다 2가지의 `action`을 만들어서 `action`이 무슨 역할을 하는지 `type`을 반환하였습니다.

### reducer.js
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
`reducer`는 `actions.js`의 `type`을 핸들링하기 위해서 `switch`문을 사용해서 처리하였습니다.
예를 들어 `switch`문에 `EXTRAVERSION`타입이 들어가게되면 `state`를 그대로 복사를 하고 `count`값만 +1이 되는 방식입니다.

### rootReducer.js

```javascript
import { combineReducers } from "redux";
import attentionFocus from './attentionFocus/reducer';
import recognitionFn from './recognitionFn/reducer'
import judgementFn from './judgementFn/reducer'
import lifestyle from './lifestyle/reducer'
import checkStart from './checkStart/reducer'

const rootReducer = combineReducers({
    attentionFocus,
    recognitionFn,
    judgementFn,
    lifestyle,
    checkStart
})

export default rootReducer
```
`reducer` 가 여러개였기 때문에 `combineReducers`로 하나로 합칠 필요가 있었습니다.

## Page1.js

```javascript
const mapStatetoProps = ({attentionFocus}) => {
    return {
        count: attentionFocus.count
    }
}
const mapDispatchtoProps = {
    extraversion,
    introversion
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page1)
```
`redux`와 연결하는 부분인데 `mapDispatchtoProps`는 오브젝트 형태로 `extraversion`과 `introversion`에는 `actions.js`에서 가져온 `extraversion`과 `introversion`으로 맵핑을 시켰습니다.

![제목 없음](https://user-images.githubusercontent.com/37141223/146817946-6844ed5d-97e9-4238-a68b-91453e8e9083.png)

```javascript
<motion.div
    whileTap={{ scale: 0.97 }}
>
    <Link to={process.env.PUBLIC_URL+'/page=2'}>
        <Button variant="light" className={styles.btn} onClick={()=>props.extraversion()}>사람들과 만나서 놀아야 한다. 집에 혼자 있으면 괜히 울적해지기만 한다.</Button>
    </Link>
</motion.div>
<motion.div
    whileTap={{ scale: 0.97 }}
>
    <Link to={process.env.PUBLIC_URL+'/page=2'}>
        <Button variant="light" className={styles.btn} onClick={()=>props.introversion()}>집에서 조용히 쉬고 싶다. 이럴 때 나가봤자 기만 빨린다.</Button>
    </Link>
</motion.div>
```
`<Button />` 클릭시 `props`로 받아온 함수가 실행되어 `dispatch`되도록 하였습니다.



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
