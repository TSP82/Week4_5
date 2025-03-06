function Myblogs(){
    var title = "xxx";
    var description = "yyy";
    var rating = 4;
    let enabled = true;
    const pi = 2.14;

    //alert("title: " + title);
    console.log("Rating: " + rating);

    //arrow funtion
    const getRating = () => {
        return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
    }
    const getRating2 = (r) => {
        let msg = "";
        for(let i=0; i<r; i++){
            msg+= '\u2B50';
        }
        return <span>{msg} </span>;
    }
    return (
        <div className="m-3">
            <h1 className="text-lg font-bold">Review of Tourist Attractions</h1>
            <p><strong>Subject : </strong>{title}</p>
            <p><strong>Detail : </strong>{description}</p>
            <p><strong>Likes : </strong>{getRating2(rating)}</p>
            <p><strong>Other : </strong>...</p>
            <h1 className="text-lg font-bold">Comments:</h1>
            <Comment 
            avatar="/images/myprofile.png"
            message="Hi😆"
            author="APMP82."
            top={true}
            />
            <Comment 
            avatar="/images/myprofile.png"
            message="Flex so hard, think I am elastic💅"
            author="APMP82."
            top={false}
            />
        </div>
    );
}
function Comment({avatar,message,author,top}){
    return(
        <div>
            <GetTop top={top} />
            <img
                src={avatar}
                title={author}
                width={40}/>
                <p>{message}</p>
                <i>{author}</i><hr/><br/>

        </div>
    );
}
function GetTop({top}){
    if(top){
        return '\u2764';
    return '';
    }

}

export default Myblogs;