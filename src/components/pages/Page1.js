import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { extraversion, introversion } from '../../redux/attentionFocus/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page1 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <Card.Text className={styles.question}>나는 기분이 안 좋을 때</Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                    <motion.div
                        whileTap={{ scale: 0.97 }}
                    >
                    <Link to={process.env.PUBLIC_URL+'/page=2'}>
                    <Button variant="light" className={styles.btn} onClick={()=>props.extraversion()}>사람들과 만나서 놀아야 한다. 집에 혼자 있으면 괜히 울적해지기만 한다.</Button>
                    </Link>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 0.97 }}
                    >
                    <Link to={process.env.PUBLIC_URL+'/page=2'}>
                    <Button variant="light" className={styles.btn} onClick={()=>props.introversion()}>집에서 조용히 쉬고 싶다. 이럴 때 나가봤자 기만 빨린다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page1)
