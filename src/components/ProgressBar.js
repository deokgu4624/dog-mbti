import React from 'react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from './ProgressBar.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const ProgressBar = (props) => {
    const pages = [1,2,3,4,5,6,7,8,9,10,11,12]
    const [progress, setProgress] = useState('/')
    useEffect(()=>{
        setProgress(window.location.pathname)
    }, [props])
    return (
        <Container>
            <Row>
                <Col xl={12}>
                    {pages.map(function(item){
                       return(
                        progress === '/page='+item ? <div className={styles.progress} style={{width: item/12*100+'%'}} key={item}></div>:null
                       ) 
                    })}
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = (props) => {
    return{
        props
    }
}

export default connect(mapStatetoProps)(ProgressBar)
