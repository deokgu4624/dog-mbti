import React from 'react'
import styles from './result.module.css'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../img/rottweiler.svg'
import arrow from '../../img/arrow.svg'
import { motion } from 'framer-motion'

const ISFJ = () => {
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
                        <img src={img} className={styles.img} alt='rottweiler' />
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
                        <Card.Title className={styles.title}>용감한 수호자 로트 와일러</Card.Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .4 }}
                    >
                        <Card.Text className={styles.text}>책임감과 인내력 또한 매우 강한 유형이에요. 본인의 친한 친구나 가족에게 애정이 가득하죠. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 타입이에요. 
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
                        <span className={styles.tag}>외유내강</span>
                        <span className={styles.tag}>철저한 대비</span>
                        <span className={styles.tag}>많은 잔걱정</span>
                        <span className={styles.tag}>뛰어난 공감</span>
                        <span className={styles.tag}>겸손</span>
                        <span className={styles.tag}>전통적 관념</span>
                        <span className={styles.tag}>타인을 챙김</span>
                        <span className={styles.tag}>눈치가 빠름</span>
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
                            <span className={styles.bestText}>비글</span>
                            <span className={styles.worstText}>프렌치 불독</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ISFJ
