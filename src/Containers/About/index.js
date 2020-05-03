/* eslint-disable */

import React, {
	useCallback
} from "react"
import PropTypes from "prop-types"
import {
	Row,
	Col,
	Image,
	Container,
	Button
} from "react-bootstrap"
import lightPic from "../../assets/img/lightPic.jpg"
import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import {
	HeartIcon,
	CoffeeIcon
} from "../../assets/svg"
import CustomSpring from "../../Components/CustomSpring"

const resume = "https://www.linkedin.com/in/tarundhamor/"
const text = < span > About Me < /span>
const subText =
	"A Computer Science student currently in pre - final year who likes to build websites. I am a Web Developer who likes to develop solutions for the web. A website is not only about coding, it's about putting your heart into it, to engineer it perfectly. "

function About({
	thm
}) {
	const pic = useCallback(() => {
		if (thm) {
			return <Image src = {
				darkPic
			}
			thumbnail / >
		}
		return <Image src = {
			lightPic
		}
		thumbnail / >
	}, [thm])

	return ( <
		>
		<
		Container >
		<
		Row className = "align-items-center" >
		<
		Col md = {
			{
				span: 6,
				order: 1
			}
		}
		xs = {
			{
				span: 12,
				order: 2
			}
		}
		className = "mt-2 mt-sm-5" >
		<
		PageInfoText text = {
			text
		}
		/>

		<
		div className = " mt-sm-5 mt-3" >
		<
		PageInfoSubText text = {
			subText
		}
		/> < /
		div >

		<
		CustomSpring time = {
			1100
		} >
		<
		p className = "d-flex justify-content-center mt-sm-3" >
		<		/p> < /
		CustomSpring > <
		/Col>

		<
		Col md = {
			{
				span: 4,
				offset: 2
			}
		}
		xs = {
			{
				span: 8,
				offset: 2,
				order: 1
			}
		}
		className = "d-flex flex-column align-items-center mt-2 mt-sm-5" >
		<
		CustomSpring time = {
			900
		} > {
			pic()
		} <
		p className = "d-flex justify-content-center text-center mt-1 mt-sm-3" >
		*
		Name: Tarun Dhamor < br / >
		*
		Web Developer < br / > * Currently in: Chennai, India <
		/p> < /
		CustomSpring >

		<
		CustomSpring time = {
			1300
		} >
		<
		Button variant = "outline-secondary"
		href = {
			resume
		}
		download >
		Download Resume <
		/Button> < /
		CustomSpring > <
		/Col> < /
		Row > <
		/Container> < / >
	)
}

About.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false]).isRequired
}

export default About