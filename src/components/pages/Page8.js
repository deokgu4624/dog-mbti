import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { feeling, thinking } from '../../redux/judgementFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page8 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>누군가 나를 싫어하는 걸 알았을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=9'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.thinking()}>싫어하든지 말든지 내가 알 바 아니다. 어차피 모든 사람이 나를 좋아할 순 없다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=9'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.feeling()}>왜 나를 싫어하지? 내가 뭘 잘못했나? 집에 가서도 계속 생각나고 신경쓰인다.</Button>
                        </Link>
                        </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({judgementFn}) => {
    return {
        count: judgementFn.count
    }
}
const mapDispatchtoProps = {
    feeling,
    thinking
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page8)
