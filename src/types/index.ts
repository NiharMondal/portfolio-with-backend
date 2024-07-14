

export type TExperienceResponse = {
    id:string;
	position: string;
	company: string;
	start_date: string;
	end_date: string;
	responsibilities: string;
    createdAt:string;
    updatedAt:string;

};

export type TProjectResponse = {
    id:string;
	title: string;
	photo: string;
    live_link:string;
    front_end:string;
    back_end:string;
	description: string;
    slug:string;
    createdAt:string;
    updatedAt:string;
};

export type TSkillsResponse = {
    id:string;
    name:string;

    createdAt:string;
    updatedAt:string;
}

export type TBlogResponse = {
    id:string;
	title: string;
	description: string;
    slug:string;
    createdAt:string;
    updatedAt:string;
};


export type TResponseFromServer<T> = {
    success:boolean;
    message:string;
    data: T
}


