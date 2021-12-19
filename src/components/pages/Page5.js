import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { sensing, intuition } from '../../redux/recognitionFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page5 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>나는 음악을 들을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=6'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.sensing()}>멜로디가 좋으면 장땡이다. 가사는 크게 신경쓰지 않는다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=6'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.intuition()}>중요한 건 가사다. 가사를 음미하며 노래 속 주인공으로 빙의한다.</Button>
                        </Link>
                        </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({recognitionFn}) => {
    return {
        count: recognitionFn.count
    }
}
const mapDispatchtoProps = {
    sensing,
    intuition
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page5)
