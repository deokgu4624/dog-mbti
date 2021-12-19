import React from 'react'
import styles from './Header.module.css'
import { Nav, Navbar, Container , Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap'
import share from '../img/share.svg'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import gsap from 'gsap'


const Header = () => {
    return (
        <>
        <Navbar expand="lg" fixed='top' className={styles.nav}>
        <Container>
            <Nav className={styles.title} onClick={()=>{
                window.location.href = process.env.PUBLIC_URL + '/'
            }}>DOG MBTI</Nav>
            <CopyToClipboard text = {window.location.href}>
            <Nav href="#link"><img src={share} alt='share' className={styles.share} onClick={()=>{
                gsap.fromTo('#copy', {display:'none', opacity:0},{display:'block',opacity:1})
                gsap.to('#copy', {display:'none',opacity:0,delay:1})
            }} /></Nav>
            </CopyToClipboard>
        </Container>
        </Navbar>
        <span id='copy' className={styles.copyWrapper}>클립보드에 복사했어요.</span>
        </>
    )
}

export default Header
