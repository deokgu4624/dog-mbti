import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { sensing, intuition } from '../../redux/recognitionFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page6 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>길을 가다가 새로 생긴 소품샵을 발견했을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=7'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.sensing()}>목적지가 우선이다. 일단 가기로 한 곳부터 간다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=7'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.intuition()}>궁금한 건 못 참는다. 일단 들어가서 구경부터 하고 본다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page6)
