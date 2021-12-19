import React from 'react'
import styles from './pages.module.css'
import { connect } from 'react-redux'
import { perceiving, judging } from '../../redux/lifestyle/actions'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Page11 = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                        <div className={styles.question}>친구들과 만나기로 했을 때</div>
                    </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=12'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.judging()}>점심은 여기서 먹고, 커피는 여기서 먹어야지... 이미 머릿속에 루트를 그려 놓았다.</Button>
                        </Link>
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                        <Link to={process.env.PUBLIC_URL+'/page=12'}>
                        <Button variant="light" className={styles.btn} onClick={()=>props.perceiving()}>일단 만나서 뭘 할 지 생각해 본다.</Button>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Page11)
