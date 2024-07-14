import { useEffect, useState } from "react";

import { url } from "../../lib/url";
import { TBlogResponse, TResponseFromServer } from "../../types";
import { Link } from "react-router-dom";
import rightArr from "../../assets/icon/right-up-arrow.png";
export default function Blog() {
	const [blogs, setBlogs] = useState<TResponseFromServer<TBlogResponse[]>>();

	useEffect(() => {
		fetch(`${url}/blog`)
			.then((res) => res.json())
			.then((data) => setBlogs(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<section className="max-w-6xl mx-auto">
			<h3 className="text-center mb-16">Blogs</h3>
			<div className="grid grid-cols-1  lg:grid-cols-2 place-items-center gap-5 ">
				{blogs?.data.map((blog) => (
					<div
						key={blog.id}
						className="self-center h-[300px] overflow-hidden shadow-2xl p-4 relative rounded-md border border-b-0 border-primary group"
					>
						<h4 className="mb-3">{blog?.title}</h4>
						<div
							dangerouslySetInnerHTML={{
								__html: blog?.description,
							}}
						></div>
						<div className="absolute inset-0 group-hover:bg-black/80 "></div>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
							<Link to={`/blog/${blog.slug}`} >
								<div className="bg-primary p-2 flex items-center sudo">
									<span className="inline-flex text-nowrap">
										Read more
									</span>
									<img src={rightArr} alt="see more arrow" />
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
