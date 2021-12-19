import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { feeling, thinking } from '../../redux/judgementFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page7 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>친구가 힘들게 돈 모아서 차를 샀다고 했을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=8'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.thinking()}>무슨 차 샀어? 얼마 줬어?</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=8'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.feeling()}>오 대박 축하해! 그 동안 고생한 보람이 있네!</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page7)
