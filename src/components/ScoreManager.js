import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

const ScoreManager = (props) => {
    const [checkAttention, setAttention] = useState('E')
    const [checkRecognition, setRecognition] = useState('S')
    const [checkJudgement, setJudgement] = useState('T')
    const [checkLifestyle, setLifestyle] = useState('J')
    const result = checkAttention+checkRecognition+checkJudgement+checkLifestyle

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
    return (
        <div>
            {/* <p>E or I = {props.attentionCount}</p>
            <p>S or N = {props.recognitionCount}</p>
            <p>T or F = {props.judgementCount}</p>
            <p>J or P = {props.lifestyleCount}</p> */}
        </div>
    )
}
const mapStatetoProps = (props) => {
    return{
        attentionCount : props.attentionFocus.count,
        recognitionCount : props.recognitionFn.count,
        judgementCount : props.judgementFn.count,
        lifestyleCount : props.lifestyle.count,
        endCount : props.checkStart.count
    }
}
export default connect(mapStatetoProps)(ScoreManager)
