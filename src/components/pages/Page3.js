import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { extraversion, introversion } from '../../redux/attentionFocus/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page3 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>나는 새로운 사람을 만나면</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=4'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.extraversion()}>어색한 침묵은 못 견디겠다. 무슨 말이라도 걸어본다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=4'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.introversion()}>어색하더라도 누군가 말을 걸지 않으면 웬만해선 먼저 말을 걸지 않는다.</Button>
                        </Link>
                        </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({attentionFocus}) => {
    return {
        count: attentionFocus.count
    }
}
const mapDispatchtoProps = {
    extraversion,
    introversion
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page3)
