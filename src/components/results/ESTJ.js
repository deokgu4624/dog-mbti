import React from 'react'
import styles from './result.module.css'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../img/bordercollie.svg'
import arrow from '../../img/arrow.svg'
import { motion } from 'framer-motion'

const ESTJ = () => {
    return (
        <Container className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
            <Row className='justify-content-md-center'>
                <Col md={8} lg={6}>
                    <Card className={styles.homeBtnWrapper}>
                    <Card.Text className={styles.homeBtn}>
                        <Link to={process.env.PUBLIC_URL + '/'} style={{ textDecoration: 'none' }}>
                            <img src={arrow} className={styles.arrow} alt='home'/><span className={styles.homeBtnText}>돌아가기</span>
                        </Link>
                    </Card.Text>
                    </Card>
                    <Card className={styles.card}>
                    <Card.Body>
                        <img src={img} className={styles.img} alt='bordercollie' />
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: .1 }}
            >
            <Row className='justify-content-md-center'>
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .3 }}
                    >
                        <Card.Title className={styles.title}>지도력있는 보더콜리</Card.Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .4 }}
                    >
                        <Card.Text className={styles.text}>현실적, 사실적이며 활동을 조직화하고 주도해 나가는 지도력이 있는 타입이네요. 실질적이고 현실 감각이 뛰어나며 일을 조직하고 계획하여 추진시키는 능력이 있어요.
                        </Card.Text>
                    </motion.div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: .2 }}
            >
            <Row className='justify-content-md-center'>
                <Col md={8} lg={6}>
                    <Card className={styles.card}>
                    <Card.Body className={styles.tagWrapper}>
                        <span className={styles.tag}>현실적</span>
                        <span className={styles.tag}>지도자</span>
                        <span className={styles.tag}>추진능력</span>
                        <span className={styles.tag}>실용적</span>
                        <span className={styles.tag}>타고난 현실감각</span>
                        <span className={styles.tag}>업무위주</span>
                        <span className={styles.tag}>속단속결</span>
                        <span className={styles.tag}>일을 좋아함</span>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </motion.div>
            <Row className='justify-content-md-center'>
                <Col md={8} lg={6}>
                    <Card className={styles.lastCard}>
                    <Card.Body>
                        <Card.Title className={styles.bwWrapper}>
                            <span className={styles.best}>👍 잘 맞아요</span>
                            <span className={styles.worst}>👎 최악이에요</span>
                        </Card.Title>
                        <Card.Text>
                            <span className={styles.bestText}>마스티프</span>
                            <span className={styles.worstText}>복서</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ESTJ
