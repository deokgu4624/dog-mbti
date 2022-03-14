# 강아지 MBTI 웹사이트
https://dog-mbti.netlify.app/
## 목차
1. [개요](#개요)
2. [과정](#과정)  
  2.1. [Redux actions 세팅](#redux-actions-세팅)  
  2.2. [Redux reducer 세팅](#redux-reducer-세팅)  
  2.3. [질문 페이지 만들기](#질문-페이지-만들기)  
  2.4. [결과 분류하기](#결과-분류하기)  
  2.5. [결과 페이지 이동](#결과-페이지-이동)
3. [사용한 라이브러리](#사용한-라이브러리)
## 개요
React, Redux를 사용한 MBTI 테스트 사이트입니다. 자신은 어떤 강아지 성격과 비슷한지 재미로 확인해 볼 수 있습니다.  
메인화면입니다.
![제목 없음](https://user-images.githubusercontent.com/37141223/146687467-e2f2af76-c827-4742-9e0c-c40f02ac8645.png)

성향을 알 수 있는 질문 페이지입니다. 질문은 총 12개입니다.
![제목 없음](https://user-images.githubusercontent.com/37141223/146817946-6844ed5d-97e9-4238-a68b-91453e8e9083.png)

12개의 질문이 끝나면 나오는 결과 페이지입니다. 결과는 총 16개입니다.
![제목 없음](https://user-images.githubusercontent.com/37141223/146825400-9f63bc72-e00a-421a-ae33-5781c25f939b.png)

## 과정
### Redux actions 세팅
두가지 타입의 `aciton`입니다. 사용자가 선택하는 버튼에 따라 `dispatch`를 통해 호출됩니다.
```javascript
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
### Redux reducer 세팅
호출된 액션의 타입에 따라 `state`값을 변경하는 `reducer`입니다.  
`reducer`는 총 5개로 두 개의 태도 지표(외향-내향, 판단-인식)와 두 개의 기능 지표(감각-직관, 사고-감정)을 대표합니다. 나머지 1개는 검사 시작과 끝을 관리합니다.
```javascript
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
`combineReducers`는 5개의 `reducer`들을 하나로 반환합니다. `rootReducer`는 `store`로 들어갑니다.
```javascript
const rootReducer = combineReducers({
    attentionFocus,
    recognitionFn,
    judgementFn,
    lifestyle,
    checkStart
})
```
### 질문 페이지 만들기
`onClick`은 선택한 버튼에 따라서 `dispatch`를 통해 `action`을 호출되고 `reducer`를 통해 `state`가 변경됩니다.  
질문은 지표마다 각각 3개, 총 12개입니다.
```javascript
<Container className={styles.container}>
    <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
            <Card className={styles.card}>
            <Card.Body>
                <Card.Text className={styles.question}>나는 기분이 안 좋을 때</Card.Text>
            </Card.Body>
            </Card>
            <Card className={styles.card}>
            <Card.Body>
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
            </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

const mapDispatchtoProps = {
    extraversion,
    introversion
}
```
### 결과 분류하기
`useEffect`는 `store`에서 받아온 `state`의 값에 따라 결과를 분류합니다.
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
### 결과 페이지 이동
분류된 결과에 따라서  `if`문을 통해 해당되는 결과 페이지로 연결됩니다.
```javascript
if(result === 'ENFJ' && props.endCount === 2){
    window.location.pathname = '/enfj'
}
if(result === 'ENFP' && props.endCount === 2){
    window.location.pathname = '/enfp'
}
if(result === 'ENTJ' && props.endCount === 2){
    window.location.pathname = '/entj'
}
if(result === 'ENTP' && props.endCount === 2){
    window.location.pathname = '/entp'
}
if(result === 'ESFJ' && props.endCount === 2){
    window.location.pathname = '/esfj'
}
if(result === 'ESFP' && props.endCount === 2){
    window.location.pathname = '/esfp'
}
if(result === 'ESTJ' && props.endCount === 2){
    window.location.pathname = '/estj'
}
if(result === 'ESTP' && props.endCount === 2){
    window.location.pathname = '/estp'
}
if(result === 'INFJ' && props.endCount === 2){
    window.location.pathname = '/infj'
}
if(result === 'INFP' && props.endCount === 2){
    window.location.pathname = '/infp'
}
if(result === 'INTJ' && props.endCount === 2){
    window.location.pathname = '/intj'
}
if(result === 'INTP' && props.endCount === 2){
    window.location.pathname = '/intp'
}
if(result === 'ISFJ' && props.endCount === 2){
    window.location.pathname = '/isfj'
}
if(result === 'ISFP' && props.endCount === 2){
    window.location.pathname = '/isfp'
}
if(result === 'ISTJ' && props.endCount === 2){
    window.location.pathname = '/istj'
}
if(result === 'ISTP' && props.endCount === 2){
    window.location.pathname = '/istp'
}
```
## 사용한 라이브러리
`react` `redux` `react-bootstrap` `framer-motion`
