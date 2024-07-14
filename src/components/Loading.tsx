import loading from "../assets/loading.svg";

export default function Loading() {
	return (
		<section className="min-h-screen flex justify-center items-center">
			<img src={loading} alt="loading svg" />
		</section>
	);
}
