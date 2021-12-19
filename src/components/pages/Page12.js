import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { perceiving, judging } from '../../redux/lifestyle/actions'
import { check } from '../../redux/checkStart/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page12 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>여행 중 예상치 못한 일로 계획이 틀어졌을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=13'} onClick={()=>props.check()}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.judging()}>이건 내 계획과 어긋나는 일이다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=13'} onClick={()=>props.check()}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.perceiving()}>모든게 계획대로 흘러갈 수는 없다. 그럴 수도 있다고 생각하고 넘긴다.</Button>
                        </Link>
                        </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({checkStart}) => {
    return {
        endCount : checkStart.count
    }
}
const mapDispatchtoProps = {
    perceiving,
    judging,
    check
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Page12)
