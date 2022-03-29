const Header = (props) => {
    let {titre} = props;
    return(
        <div className="text-center py-3">
            
            <h1>{titre}</h1>
        </div>
        
    );
}

export default Header;

