export default function Contact(){
    return(
        <form>
            <h3 className="font-bold m-3">contact us</h3>
            <div className="flex flex-col gap-4">
            <span>title</span>
            <input name="title" id="title" className="border rounded border-gray-950 w-fit" />
            </div>
            <button type="submit" className="border border-green-400 bg-gray-400 rounded m-10">send info</button>
        </form>
    );
}