import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { extraversion, introversion } from '../../redux/attentionFocus/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page2 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>내가 일을 하는 이유는</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=3'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.extraversion()}>이 일을 해냈을 때 얻게 될 보상이 기대되기 때문이다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=3'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.introversion()}>이 일을 하지 않았을 때 잃게 될 것들이 있기 때문이다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page2)
