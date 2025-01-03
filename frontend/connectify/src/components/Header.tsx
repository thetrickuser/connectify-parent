const Header = () => {
    return (
        <header className="bg-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold text-blue-500">Connectify</h1>
            <div className="flex space-x-4">
                <div>Messages</div>
                <div>Notifications</div>
                <div>Account</div>
            </div>
        </header> );
}

export default Header;