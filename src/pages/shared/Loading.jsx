import { RotatingSquare } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex justify-center flex-col items-center h-screen">
            <RotatingSquare
                visible={true}
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p className="text-3xl font-bold">Please Wait.....</p>
        </div>
    );
};

export default Loading;