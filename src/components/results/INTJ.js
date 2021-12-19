import React from 'react'
import styles from './result.module.css'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../img/russell.svg'
import arrow from '../../img/arrow.svg'
import { motion } from 'framer-motion'

const INTJ = () => {
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
                        <img src={img} className={styles.img} alt='russell' />
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
                        <Card.Title className={styles.title}>과학자형 잭 러셀 테리어</Card.Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .4 }}
                    >
                        <Card.Text className={styles.text}>세상에서 가장 독립적인 유형의 성격이에요. 철저한 개인주의자로써 직관적이며 통찰력이 뛰어나요. 행동에서 뿐만 아니라 생각에 있어서도 혁신을 추구하는 타입이네요. 
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
                        <span className={styles.tag}>이성적</span>
                        <span className={styles.tag}>논리적</span>
                        <span className={styles.tag}>지식과 사고</span>
                        <span className={styles.tag}>예측을 즐김</span>
                        <span className={styles.tag}>질서있는 추론</span>
                        <span className={styles.tag}>합리성</span>
                        <span className={styles.tag}>과정보단 결과</span>
                        <span className={styles.tag}>계획과 전략</span>
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
                            <span className={styles.bestText}>래브라도 리트리버</span>
                            <span className={styles.worstText}>달마시안</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default INTJ
