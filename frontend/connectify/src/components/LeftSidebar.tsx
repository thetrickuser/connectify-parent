import {Link} from "react-router";

const LeftSidebar = () => {
    return (
        <aside className="w-1/4 bg-gray-100 p-4">
            <ul>
                <li className="mb-2">Home</li>
                <li className="mb-2"><Link to={"/profile"}>Profile</Link></li>
                <li className="mb-2">Settings</li>
            </ul>
        </aside>
    )
}

export default LeftSidebar;