function LocationTab(props) {

    const handleClick = () => {
        props.onClick(props.name); // handleSelectLocation(props.name)
    }

    if (props.selectedLocation === props.name) {
        return (
        <div className="text-base font-bold bg-gray-200 border rounded-md px-2 py-1 cursor-pointer" onClick={handleClick}>
        {props.name}
        </div>
        );
    }
    return (
        <div className="text-base font-semibold border rounded-md px-2 py-1 cursor-pointer" onClick={handleClick}>
        {props.name}
        </div>
    );
}

export default LocationTab;