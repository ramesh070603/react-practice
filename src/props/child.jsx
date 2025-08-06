export const Child = ({title,price,img})=>{
    return(
        <>
            <div className="shadow border p-3">
                <img src={img} alt="not found" width={'100%'} height={'250px'} />
                <h1>{title}</h1>
                <mark>{price}</mark>
            </div>

        </>
    )
}