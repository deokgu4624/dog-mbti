import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { feeling, thinking } from '../../redux/judgementFn/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page9 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>내가 실패했을 때 더 두려운 것은</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=10'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.thinking()}>내가 해내지 못했다는 것에 대한 좌절감이다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=10'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.feeling()}>나의 실패에 대한 다른 사람들의 평판이다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page9)
