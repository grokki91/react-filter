const Toolbar = ({filters, selected, onSelectFilter}) => {

    return(
        <div>
            {filters.map((el, index) => {
                return(
                    <button key={index} onClick={onSelectFilter} className={el === selected ? 'active' : ''}>{el}</button>
                );
            })}             
        </div>
    );
}

export default Toolbar;