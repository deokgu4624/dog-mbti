import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { perceiving, judging } from '../../redux/lifestyle/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page10 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>나는 과제를 할 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=11'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.judging()}>자료조사부터 발표까지 세세하게 계획부터 세운다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=11'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.perceiving()}>일단 자료조사부터 하면서 틀을 잡아 간다.</Button>
                        </Link>
                        </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({lifestyle}) => {
    return {
        count: lifestyle.count
    }
}
const mapDispatchtoProps = {
    perceiving,
    judging
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page10)
