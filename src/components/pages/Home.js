import React from 'react'
import { connect } from 'react-redux'
import { check } from '../../redux/checkStart/actions'
import styles from './Home.module.css'
import img from '../../img/labrador.svg'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = (props) => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center">
                <Col md={8} lg={6} className={styles.col}>
                    <Card className={styles.card}>
                        <Card.Body className={styles.cardBody}>
                        <motion.div
                            initial={{ scale: .5}}
                            animate={{ scale: 1}}
                        >
                        <img src={img} className={styles.img} alt='corgi'/>
                        </motion.div>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Body className={styles.cardBody}>
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{delay: .1}}
                            >
                                <Card.Title><h1 className={styles.title}>강아지로 보는 내 성격!</h1></Card.Title>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{delay: .2}}
                            >
                                <Card.Subtitle className={styles.subtitle}>만약 내가 강아지로 태어났다면?</Card.Subtitle>
                            </motion.div>
                        </Card.Body>
                    </Card>
                    <motion.div
                        initial={{ opacity: 0, scale: .5}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{delay:.3}}
                    >
                    <Link to={process.env.PUBLIC_URL+'/page=1'} style={{ textDecoration: 'none', width: '100px' }}>
                        <div className={styles.startBtn} onClick={()=>props.check()}>GET STARTED</div>
                    </Link>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}
const mapStatetoProps = ({checkStart}) => {
    return{
        count : checkStart.count
    }
}
const mapDispatchtoProps = {
        check
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
