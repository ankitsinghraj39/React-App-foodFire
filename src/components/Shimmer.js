const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-evenly body">
            {Array(100)
                .fill("")
                .map((e, index) => (
                    <div key={index} className=" h-60 w-48 bg-gray-100 mt-12  mx-6 shimmer-card"></div>
            ))}
        </div>
    );
};

export default Shimmer;