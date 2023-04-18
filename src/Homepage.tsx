import MvmtHeader from "./MvmtHeader";

const Homepage = () => {
    return (
        <div>
            <div className="flex items-start">
                <MvmtHeader />
            </div>
            <div className="grid grid-cols-2 pt-16">
                <div>
                    <div className="pb-4 text-7xl font-semibold">Welcome to Movement</div>
                    <div>We are a Christ-centered community committed to loving Jesus, our city, and the world. Our hope is that you and your family will find a place here to grow and be involved in God's work.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
