import cheflogo from './assets/cheflogo.png'

function Header() {
    return (
    <div className="h-[80px] flex items-center justify-center gap-2 bg-[#ffdcb7] shadow-md">
    <img src={cheflogo} 
    alt="chef c logo"
    className="w-15 rounded-full"> 
    </img>
    <h1 className="text-2xl">Chef Cow AI</h1>
    </div>
    )
}

export default Header