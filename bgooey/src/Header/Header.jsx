
function Header(params) {
    const headerStyle = { "backgroundColor": params.mainColor }
    return (
    <div style={headerStyle}>
        <h1>{params.title}</h1>
        {/* <p>{params.description}</p> */}
    </div>)
}
export default Header;