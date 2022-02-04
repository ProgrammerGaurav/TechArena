import React, { useState, useRef, useEffect } from "react";

const Taboiz = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const videoRef = useRef(null);
	const playVideo = () => {
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
	return (
		<div className="taboiz">
			<div className="title">meet our team </div>
			<div className="video-container">
				{!isVideoPlaying && <img src="/assets/play.svg" alt="" />}
				<video
					src="/assets/taprep.mp4"
					type="video/mp4"
					ref={videoRef}
					// controls
					onClick={(e) => {
						playVideo();
					}}
				></video>
			</div>
		</div>
	);
};

export default Taboiz;
