import React, { useState, useRef, useEffect } from "react";

const Taboiz = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const videoRef = useRef(null);

	const toggleVideo = () => {
		console.log(isVideoPlaying);
		if (isVideoPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	};

	useEffect(() => {
		videoRef.current.addEventListener("play", () => {
			setIsVideoPlaying(true);
		});
		videoRef.current.addEventListener("pause", () => {
			setIsVideoPlaying(false);
		});
		videoRef.current.play();
	}, []);

	const videoUrl = "https://res.cloudinary.com/di9lrcrlj/video/upload/v1644032086/techarena/taprep_hfiyqa.mp4";

	return (
		<div className="taboiz">
			<div className="title">meet our team</div>
			<div className="video-container">
				{!isVideoPlaying && <img src="/assets/play.svg" alt="" />}
				<video
					src={videoUrl}
					poster="/assets/taboiz.jpg"
					type="video/mp4"
					ref={videoRef}
					onClick={(e) => {
						toggleVideo();
					}}
				></video>
			</div>
		</div>
	);
};

export default Taboiz;
