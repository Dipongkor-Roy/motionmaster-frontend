import MyCart from "../Dashboard/MyCart";


const UserHome = () => {
    return (
        <div>
            <h3 className="text-center text-xl bg-green-100 py-3">Items In Cart:</h3>
            <MyCart/>
        </div>
    );
};

export default UserHome;