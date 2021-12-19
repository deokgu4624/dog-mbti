import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { sensing, intuition } from '../../redux/recognitionFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page4 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>영화관에서 재밌는 영화를 보고 나온 후</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=5'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.sensing()}>재밌는 영화였다. 배고프니까 밥이나 먹으러 가야겠다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=5'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.intuition()}>여운이 가시질 않는다. 포털 사이트에 영화 해석을 검색해 본다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page4)
