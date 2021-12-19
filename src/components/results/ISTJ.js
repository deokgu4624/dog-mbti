import React from 'react'
import styles from './result.module.css'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../img/greyhound.svg'
import arrow from '../../img/arrow.svg'
import { motion } from 'framer-motion'

const ISTJ = () => {
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
                        <img src={img} className={styles.img} alt='greyhound' />
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
                        <Card.Title className={styles.title}>세상의 소금, 이탈리안 그레이하운드</Card.Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .4 }}
                    >
                        <Card.Text className={styles.text}>실제 사실에 대하여 정확하고 체계적으로 기억하며 일 처리에 있어서도 신중하고 책임감이 있어요. 집중력이 강한 현실 감각을 지녔으며 조직적이고 침착한 타입이네요. 
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
                        <span className={styles.tag}>선입견</span>
                        <span className={styles.tag}>심한 낯가림</span>
                        <span className={styles.tag}>강한 책임감</span>
                        <span className={styles.tag}>원리원칙</span>
                        <span className={styles.tag}>정리정돈</span>
                        <span className={styles.tag}>로봇</span>
                        <span className={styles.tag}>차가워보임</span>
                        <span className={styles.tag}>직설적</span>
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
                            <span className={styles.bestText}>프렌치 불독</span>
                            <span className={styles.worstText}>래브라도 리트리버</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ISTJ
