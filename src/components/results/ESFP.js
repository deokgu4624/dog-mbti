import React from 'react'
import styles from './result.module.css'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../img/whippet.svg'
import arrow from '../../img/arrow.svg'
import { motion } from 'framer-motion'

const ESFP = () => {
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
                        <img src={img} className={styles.img} alt='whippet' />
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
                        <Card.Title className={styles.title}>자유로운 영혼, 휘핏</Card.Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            delay: .4 }}
                    >
                        <Card.Text className={styles.text}>사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적인 유형이에요. 어떤 상황이든 잘 적응하며 현실적이고 실제적이에요. 주위의 사람이나 일어나는 일에 대하여 관심이 많아요. 
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
                        <span className={styles.tag}>사교적</span>
                        <span className={styles.tag}>친절</span>
                        <span className={styles.tag}>낙천적</span>
                        <span className={styles.tag}>강한 수용력</span>
                        <span className={styles.tag}>수다스러움</span>
                        <span className={styles.tag}>재밌음</span>
                        <span className={styles.tag}>충동적</span>
                        <span className={styles.tag}>관심이 많음</span>
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
                            <span className={styles.bestText}>잭 러셀 테리어</span>
                            <span className={styles.worstText}>달마시안</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ESFP
