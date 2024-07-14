import { useParams } from "react-router-dom";
import { TBlogResponse, TResponseFromServer } from "../types";
import { useEffect, useState,  } from "react";
import { url } from "../lib/url";
import Loading from "../components/Loading";

export default function BlogDetails() {
	const [loading, setLoading] = useState(true);
	const { slug } = useParams();
	const [blogDetails, setBlogDetails] =
		useState<TResponseFromServer<TBlogResponse>>();

	useEffect(() => {
		fetch(`${url}/blog/${slug}`)
			.then((res) => res.json())
			.then((data) => {
				setBlogDetails(data);
				setLoading(false);
			})
			.catch((e) => console.log(e));
	}, []);
	if (loading) return <Loading />;
	return (
		<section>
			<div className="max-w-4xl mx-auto">
				<h3 className="py-5">{blogDetails?.data.title}</h3>

				<div
					dangerouslySetInnerHTML={{
						__html: blogDetails?.data?.description as string,
					}}
				></div>
			</div>
		</section>
	);
}
