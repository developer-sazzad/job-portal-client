import { useLoaderData } from "react-router-dom";

const JobsDetailsSingle = () => {
    const {title} = useLoaderData()

    return (
        <div className="">
            {title}
        </div>
    );
};

export default JobsDetailsSingle;